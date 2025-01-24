import { Suspense } from 'react';
import useMatches from '../../hooks/useMatches';
import { StadiumGamesWithWeatherSkeleton } from './StadiumGamesWithWeatherSkeleton';
import { StadiumGamesWithWeather } from './StadiumGamesWithWeather';

export function StadiumGames() {
  const matches = useMatches();

  return (
    <Suspense fallback={<StadiumGamesWithWeatherSkeleton matches={matches} />}>
      <StadiumGamesWithWeather matches={matches} />
    </Suspense>
  );
}
