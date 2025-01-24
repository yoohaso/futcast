import { css } from '@emotion/react';
import DayCardSkeleton from '../DayCardSkeleton';

export function StadiumGamesSkeleton() {
  return (
    <>
      <DayCardSkeleton />
      <hr css={css({ width: '100%', margin: '15px 0', border: '1px solid white' })} />
      <div
        css={css({
          width: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          gap: '2vh',
        })}
      >
        <DayCardSkeleton />
        <DayCardSkeleton />
        <DayCardSkeleton />
      </div>
    </>
  );
}
