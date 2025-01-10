import { useEffect, useState } from 'react';
import { Match } from '../api/types';
import { fetchMatches } from '../api/match';

function useMatches(): [Match[], boolean, Error | null] {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function storeMatches() {
      try {
        const result = await fetchMatches();
        setMatches(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }

    storeMatches();
  }, []);

  return [matches, isLoading, error];
}

export default useMatches;
