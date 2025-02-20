import React, { useState } from 'react';
import { Search, Smartphone, Globe, Monitor } from 'lucide-react';
import type { SearchForm, DeviceType } from '../types';

interface Props {
  onSubmit: (data: SearchForm) => void;
  isLoading: boolean;
}

const LOCATIONS = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Spain',
  'Italy',
];

export function SearchForm({ onSubmit, isLoading }: Props) {
  const [formData, setFormData] = useState<SearchForm>({
    url: '',
    keywords: '',
    location: 'United States',
    device: 'desktop',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeviceChange = (device: DeviceType) => {
    setFormData((prev) => ({ ...prev, device }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-900">SEO Ranking Analysis</h2>
        <p className="mt-2 text-md text-gray-1000">
          Enter your website details to analyze your SEO rankings.
        </p>
      </div>

      {/* URL Input */}
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700">
          Website URL
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Globe className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="url"
            name="url"
            id="url"
            required
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg shadow-sm transition-all duration-200 hover:border-indigo-400"
            placeholder="https://example.com"
            value={formData.url}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Keywords Input */}
      <div>
        <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
          Keywords
        </label>
        <div className="mt-1">
          <textarea
            name="keywords"
            id="keywords"
            required
            rows={3}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-lg shadow-sm transition-all duration-200 hover:border-indigo-400"
            placeholder="Enter keywords (one per line)"
            value={formData.keywords}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Location Dropdown */}
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <select
          id="location"
          name="location"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg shadow-sm transition-all duration-200 hover:border-indigo-400"
          value={formData.location}
          onChange={handleChange}
        >
          {LOCATIONS.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Device Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Device Type</label>
        <div className="mt-2 grid grid-cols-3 gap-4">
          <button
            type="button"
            onClick={() => handleDeviceChange('desktop')}
            className={`inline-flex justify-center items-center px-4 py-2 border rounded-lg shadow-sm text-sm font-medium transition-all duration-200 ${
              formData.device === 'desktop'
                ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white border-transparent'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Monitor className="h-5 w-5 mr-2" />
            Desktop
          </button>
          <button
            type="button"
            onClick={() => handleDeviceChange('android')}
            className={`inline-flex justify-center items-center px-4 py-2 border rounded-lg shadow-sm text-sm font-medium transition-all duration-200 ${
              formData.device === 'android'
                ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white border-transparent'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Smartphone className="h-5 w-5 mr-2" />
            Android
          </button>
          <button
            type="button"
            onClick={() => handleDeviceChange('iphone')}
            className={`inline-flex justify-center items-center px-4 py-2 border rounded-lg shadow-sm text-sm font-medium transition-all duration-200 ${
              formData.device === 'iphone'
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-transparent'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Smartphone className="h-5 w-5 mr-2" />
            iPhone
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
          ) : (
            <>
              <Search className="h-5 w-5 mr-2" />
              Check Rankings
            </>
          )}
        </button>
      </div>
    </form>
  );
}