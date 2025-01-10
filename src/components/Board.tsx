import { css } from '@emotion/react';
import CurrentDayArea from './CurrentDayArea';
import OtherDaysArea from './OtherDaysArea';
import useMatches from '../hooks/useMatches';

function Board() {
  const [matches, isLoading] = useMatches();

  return (
    <div
      css={css({
        width: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        gap: '2vh',
        padding: '0 15px 2vh 15px',
      })}
    >
      {!isLoading && (
        <>
          <CurrentDayArea match={matches[0]} />
          <hr css={css({ width: '100%', border: '1px solid white' })} />
          <OtherDaysArea matches={matches.slice(1, matches.length)} />
        </>
      )}
    </div>
  );
}

export default Board;
