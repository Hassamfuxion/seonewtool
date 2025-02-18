import React, { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { ResultsTable } from './components/ResultsTable';
import { RankingHistory } from './components/RankingHistory';
import { Navbar } from './components/Navbar';
import { RankResult, SearchForm as SearchFormType } from './types';
import { Toaster, toast } from 'react-hot-toast';
import { Search } from 'lucide-react';
import { useAuth } from './hooks/useAuth';
import { supabase } from './lib/supabase';

const simulateRankCheck = async (formData: SearchFormType): Promise<RankResult[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const keywords = formData.keywords.split('\n').filter(Boolean);

  return keywords.map((keyword) => ({
    keyword: keyword.trim(),
    position: Math.floor(Math.random() * 100) + 1,
    url: formData.url,
    device: formData.device,
    location: formData.location,
    timestamp: new Date(),
  }));
};

function App() {
  const [results, setResults] = useState<RankResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (formData: SearchFormType) => {
    setIsLoading(true);
    try {
      const newResults = await simulateRankCheck(formData);
      setResults(newResults);

      // Save results to Supabase if user is authenticated
      if (user) {
        const { error } = await supabase.from('rank_history').insert(
          newResults.map((result) => ({
            user_id: user.id,
            keyword: result.keyword,
            position: result.position,
            url: result.url,
            device: result.device,
            location: result.location,
          }))
        );

        if (error) throw error;
        toast.success('Rankings saved to your history!');
      }
    } catch (error) {
      toast.error('Failed to check rankings. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Navbar />

      {/* Inline CSS for keyframes animation */}
      <style>
        {`
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
        `}
      </style>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Search className="h-12 w-12 text-indigo-600 mx-auto" />
            <h1
              className="mt-4 text-4xl font-bold tracking-tight text-gray-900"
              style={{
                display: 'inline-block',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                animation: 'typing 2s steps(30) 1s forwards',
                width: '100%',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Keyword Rank Checker
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Track your website's position in search results across different locations and devices
            </p>
            {!user && (
              <p className="mt-2 text-sm text-gray-500">
                Sign in to save your ranking history and track changes over time
              </p>
            )}
          </div>

          <div className="mt-12">
            <SearchForm onSubmit={handleSubmit} isLoading={isLoading} />
            <ResultsTable results={results} />
            {user && <RankingHistory />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
