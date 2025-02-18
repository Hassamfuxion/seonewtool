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
          newResults.map(result => ({
            user_id: user.id,
            keyword: result.keyword,
            position: result.position,
            url: result.url,
            device: result.device,
            location: result.location
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
    <div className="min-h-screen bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
      <Toaster position="top-right" />
      <Navbar />

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Search className="h-12 w-12 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Keyword Rank Checker
            </h1>
            <p className="mt-2 text-lg text-gray-200">
              Track your website's position in search results across different locations and devices.
            </p>
            {!user && (
              <p className="mt-2 text-sm text-gray-300">
                Sign in to save your ranking history and track changes over time.
              </p>
            )}
          </div>

          <div className="mt-12">
            <SearchForm onSubmit={handleSubmit} isLoading={isLoading} />
            <ResultsTable results={results} />
            {user && <RankingHistory />}
          </div>

          {/* Why Us Section */}
          <section className="mt-24 bg-white text-gray-900 py-16 px-6 sm:px-16">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-indigo-600">Why Choose Us?</h2>
              <p className="mt-4 text-lg text-gray-700">
                We provide a fast, reliable, and easy-to-use keyword rank checker to help businesses stay on top of their SEO game. With real-time tracking and device/location-specific rankings, you'll have everything you need to optimize your digital presence.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center bg-indigo-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Accuracy</h3>
                <p className="mt-2 text-gray-600">
                  We ensure precise rankings, taking into account device types and geographic location for more accurate results.
                </p>
              </div>
              <div className="text-center bg-indigo-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Ease of Use</h3>
                <p className="mt-2 text-gray-600">
                  Our tool is user-friendly with a minimalistic design, ensuring you get the most out of your experience.
                </p>
              </div>
              <div className="text-center bg-indigo-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Free Forever</h3>
                <p className="mt-2 text-gray-600">
                  Our rank checker tool is completely free to use with no hidden charges. Track your rankings without any constraints.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="mt-24 bg-indigo-900 text-white py-16 px-6 sm:px-16">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold">What We Do</h2>
              <p className="mt-4 text-lg text-gray-300">
                We help businesses and individuals track their keyword rankings and optimize their websites for better visibility on Google. With powerful tools, personalized results, and a commitment to quality, we make SEO easier for everyone.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Real-Time Data</h3>
                <p className="mt-2 text-gray-600">
                  Get instant results with real-time keyword tracking for up-to-date SEO performance monitoring.
                </p>
              </div>
              <div className="text-center bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Customizable Reports</h3>
                <p className="mt-2 text-gray-600">
                  Personalize your keyword reports based on devices, location, and other parameters to meet your business needs.
                </p>
              </div>
              <div className="text-center bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Track Progress</h3>
                <p className="mt-2 text-gray-600">
                  Monitor your SEO progress over time, helping you make informed decisions to boost your rankings.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
