import { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weather';
import { Location, Weather } from '../api/types';

type UseWeatherProps = {
  locations: Location[];
};

function useWeather({ locations }: UseWeatherProps): [Weather[], boolean, Error | null] {
  const [weather, setWeather] = useState<Weather[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (locations.length === 0) {
      return;
    }

    async function storeWeather() {
      try {
        const result = await fetchWeather({ locations });
        setWeather(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }

    storeWeather();
  }, [locations]);

  return [weather, isLoading, error];
}

export default useWeather;
