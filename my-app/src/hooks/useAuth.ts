import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';
import { toast } from 'react-hot-toast';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and set the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`, // Ensure this matches the redirect URI in Google Cloud Console
        },
      });

      if (error) throw error;
    } catch (error) {
      toast.error('Error signing in with Google');
      console.error('Error:', error);
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Error signing out');
      console.error('Error:', error);
    }
  };

  return {
    user,
    loading,
    signIn,
    signOut,
  };
}