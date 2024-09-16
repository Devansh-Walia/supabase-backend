import dotenv from 'dotenv';

dotenv.config();

export const applicationConfig = {
  supabase: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    supabaseApiKey: process.env.SUPABASE_API_KEY,
  },
};
