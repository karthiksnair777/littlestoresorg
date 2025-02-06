import { createClient } from '@supabase/supabase-js';

// Environment variables for Supabase URL and Key
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

// Initialize the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
