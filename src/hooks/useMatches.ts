import { Match } from '../api/types';
import { fetchMatches } from '../api/match';

let matchesData: Match[] | null = null;
let matchesError: Error | null = null;
let matchesPromise: Promise<void> | null = null;

function useMatches() {
  if (matchesError) {
    throw matchesError;
  }

  if (!matchesData) {
    if (!matchesPromise) {
      matchesPromise = fetchMatches()
        .then(data => {
          matchesData = data;
          matchesPromise = null;
        })
        .catch(error => {
          matchesError = error;
          matchesPromise = null;
        });
    }

    throw matchesPromise;
  }

  return matchesData;
}

export default useMatches;
