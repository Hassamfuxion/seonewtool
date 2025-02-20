import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://alewafpmftkrnzqhafmy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZXdhZnBtZnRrcm56cWhhZm15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4OTczNzQsImV4cCI6MjA1NTQ3MzM3NH0._xhdo-sPWd13Ws3jRxIUlELNjh-ivZ-7ZVpL0VPCuEg';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Supabase URL or Key is missing. Check your .env file.');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);