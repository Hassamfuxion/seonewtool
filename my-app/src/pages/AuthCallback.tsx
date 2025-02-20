import React, { useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error during callback:', error);
        alert('Authentication failed. Please try again.');
        return;
      }
      if (data.session) {
        // Redirect to the home page or dashboard after successful login
        navigate('/');
      } else {
        alert('No session found. Please try logging in again.');
      }
    };

    handleCallback();
  }, [navigate]);

  return <div>Completing authentication...</div>;
};

export default AuthCallback;