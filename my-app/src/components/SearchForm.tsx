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
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6">
      <div className="space-y-4">
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
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="https://example.com"
              value={formData.url}
              onChange={handleChange}
            />
          </div>
        </div>

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
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter keywords (one per line)"
              value={formData.keywords}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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

        <div>
          <label className="block text-sm font-medium text-gray-700">Device Type</label>
          <div className="mt-2 flex space-x-4">
            <button
              type="button"
              onClick={() => handleDeviceChange('desktop')}
              className={`inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${
                formData.device === 'desktop'
                  ? 'bg-indigo-600 text-white border-transparent'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Monitor className="h-5 w-5 mr-2" />
              Desktop
            </button>
            <button
              type="button"
              onClick={() => handleDeviceChange('android')}
              className={`inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${
                formData.device === 'android'
                  ? 'bg-indigo-600 text-white border-transparent'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Android
            </button>
            <button
              type="button"
              onClick={() => handleDeviceChange('iphone')}
              className={`inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${
                formData.device === 'iphone'
                  ? 'bg-indigo-600 text-white border-transparent'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Smartphone className="h-5 w-5 mr-2" />
              iPhone
            </button>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
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