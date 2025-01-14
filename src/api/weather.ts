import { createClient } from '@supabase/supabase-js';
import { Location } from './types';

type FetchWeatherRequest = {
  locations: Location[];
};

const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = import.meta.env;
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

export async function fetchWeather({ locations }: FetchWeatherRequest) {
  const { data, error } = await supabase.functions.invoke('weather', {
    body: { locations },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
