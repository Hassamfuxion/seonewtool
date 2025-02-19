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
import CardsPage from './cardspage';
import icongif25 from './assets/icongif25.gif';
import icongif44 from './assets/icongif44.gif';
import icongif42 from './assets/icongif43.gif';

// Simulate rank checking
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

  // Handle form submission
  const handleSubmit = async (formData: SearchFormType) => {
    setIsLoading(true);
    try {
      const newResults = await simulateRankCheck(formData);
      setResults(newResults);
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
      {/* Toast Notifications */}
      <Toaster position="top-right" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#5580E9] to-[#8860D0] text-white py-32 lg:py-40 text-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Tagline */}
          <span className="bg-orange-500 text-white px-10 py-2 rounded-full text-base lg:text-lg font-semibold">
            Powered Rank Checker
          </span>
          {/* Main Heading */}
          <h1 className="text-6xl lg:text-7xl font-bold mt-8 leading-tight">
            Track Your SEO Rankings with Ease
          </h1>
          {/* Subheading */}
          <p className="mt-6 text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Monitor your website’s search rankings across different locations and devices in real-time.
          </p>
          {/* Call-to-Action Button */}
          <button className="mt-10 bg-white text-[#5580E9] px-10 py-4 rounded-lg font-semibold text-lg lg:text-xl shadow-md hover:shadow-lg transition-all">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
            SEO Ranking Analysis
          </h1>
          {/* Search Form */}
          <SearchForm onSubmit={handleSubmit} isLoading={isLoading} />
          {/* Results Table */}
          <ResultsTable results={results} />
          {/* Ranking History (if user is logged in) */}
          {user && <RankingHistory />}
        </div>
      </main>

      {/* SEO Tracking Section */}
      <section className="py-20 bg-gradient-to-br from-[#5580E9] to-[#8860D0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">SEO Tracking Made Simple</h2>
          <p className="text-lg opacity-90">
            Our platform provides real-time insights into your website's performance, helping you optimize for better rankings.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-br from-[#C1C8E4] to-[#F9FAFB]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-[#1A1A1A] mb-8">What We Do</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="text-center">
        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <img src="assets/icongif43.gif" alt="Performance Monitoring Icon" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold text-[#1A1A1A]">Performance Monitoring</h3>
        <p className="mt-2 text-gray-600">
          Continuously monitor your website's performance metrics for optimal results.
        </p>
      </div>
      {/* Card 2 */}
      <div className="text-center">
        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <img src="assets/icongif40.gif" alt="Device Optimization Icon" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold text-[#1A1A1A]">Device Optimization</h3>
        <p className="mt-2 text-gray-600">
          Optimize your website's user experience across all devices seamlessly.
        </p>
      </div>
      {/* Card 3 */}
      <div className="text-center">
        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <img src="assets/icongif41.gif" alt="Geo-Targeting Insights Icon" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold text-[#1A1A1A]">Geo-Targeting Insights</h3>
        <p className="mt-2 text-gray-600">
          Unlock actionable insights tailored to specific geographic regions.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-[#C1C8E4]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-[#1A1A1A] mb-8">Why Choose Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="flex items-center">
        <div className="w-16 h-16 flex items-center justify-center mr-4">
          <img src="assets/icongif42.gif" alt="Powered Insights Icon" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#1A1A1A]">Powered Insights</h3>
          <p className="mt-2 text-gray-600">
            Leverage cutting-edge AI to get actionable insights.
          </p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="flex items-center">
        <div className="w-16 h-16 flex items-center justify-center mr-4">
          <img src="assets/icongif44.gif" alt="Real-Time Updates Icon" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#1A1A1A]">Real-Time Updates</h3>
          <p className="mt-2 text-gray-600">
            Get real-time updates on your rankings and performance.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      <CardsPage></CardsPage>

      {/* Footer Section */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding Section */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-[#5580E9]">SEONEWTOOL</h3>
              <p className="mt-4 text-gray-400">
                Your go-to tool for tracking SEO rankings with ease.
              </p>
            </div>

            {/* Quick Links */}
            <div >
              <h4 className="text-lg font-semibold text-[#8860D0]">Quick Links</h4>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#C1C8E4]">Follow Us</h4>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.989H8.438V12h2.562V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

    

          {/* Copyright */}
          <div className="mt-12 text-center text-gray-400">
            &copy; {new Date().getFullYear()} SEONEWTOOL. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;