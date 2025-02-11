import { Suspense } from 'react';
import useMatches from '../../hooks/useMatches';
import { StadiumGamesWithWeatherSkeleton } from './StadiumGamesWithWeatherSkeleton';
import { StadiumGamesWithWeather } from './StadiumGamesWithWeather';
import { css } from '@emotion/react';

function EmptyGame() {
  return (
    <div
      css={css({
        width: 'inherit',
        height: '25vh',
        maxHeight: '166px',
        backgroundColor: '#fffff0',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
        fontWeight: 'bold',
      })}
    >
      ⚽️ 경기가 없습니다 ⚽️
    </div>
  );
}

export function StadiumGames() {
  const matches = useMatches();

  return (
    <Suspense fallback={<StadiumGamesWithWeatherSkeleton matches={matches} />}>
      {matches.length !== 0 ? <StadiumGamesWithWeather matches={matches} /> : <EmptyGame />}
    </Suspense>
  );
}
