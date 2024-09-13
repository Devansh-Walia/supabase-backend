import { createClient } from '@supabase/supabase-js';
import { applicationConfig } from '../config';
import assert from 'assert';

assert(applicationConfig.supabase.supabaseUrl, 'Supabase URL is not defined');
assert(applicationConfig.supabase.supabaseKey, 'Supabase Key is not defined');

const supabase = createClient(
  applicationConfig.supabase.supabaseUrl,
  applicationConfig.supabase.supabaseKey
);

export default supabase;
