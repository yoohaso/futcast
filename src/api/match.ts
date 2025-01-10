import { createClient, PostgrestSingleResponse } from '@supabase/supabase-js';
import { Match } from './types';

type FetchMatchesResponse = PostgrestSingleResponse<Match[]>;

const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = import.meta.env;
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

export async function fetchMatches() {
  const response: FetchMatchesResponse = await supabase.rpc('get_matches_by_schedule');

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.data;
}
