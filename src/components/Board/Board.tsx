import { css } from '@emotion/react';
import { Suspense } from 'react';
import { StadiumGamesSkeleton } from './StadiumGamesSkeleton';
import { StadiumGames } from './StadiumGames';

export function Board() {
  return (
    <div
      css={css({
        width: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 15px 2vh 15px',
      })}
    >
      <h2 css={css({ padding: '10px 0', fontSize: '1rem', color: '#ffffff' })}>다가오는 매치</h2>
      <Suspense fallback={<StadiumGamesSkeleton />}>
        <StadiumGames />
      </Suspense>
    </div>
  );
}
