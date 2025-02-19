import React from 'react';
import { LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import logo from '../logo.png'; // Ensure logo is in src/

export function Navbar() {
  const { user, signIn, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between relative">
          
          {/* Empty div to balance flex space */}
          <div className="w-1/3"></div>

          {/* Centered Logo */}
          <div className="w-1/3 flex justify-center absolute left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
          </div>

          {/* Auth Section (Aligned Right) */}
          <div className="w-1/3 flex justify-end">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-sm text-gray-700">{user.email}</span>
                </div>
                <button
                  onClick={signOut}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={signIn}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
