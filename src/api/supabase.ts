import { createClient } from '@supabase/supabase-js';

export const connect = createClient(
  process.env.NEXT_PUBLIC_REMOTE_HOST,
  process.env.NEXT_PUBLIC_REMOTE_KEY
);
