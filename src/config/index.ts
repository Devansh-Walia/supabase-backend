import dotenv from 'dotenv';

dotenv.config();

export const applicationConfig = {
  port: process.env.PORT || 3000,
  supabase: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  },
};
