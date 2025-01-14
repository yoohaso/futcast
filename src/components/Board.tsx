import { css } from '@emotion/react';
import CurrentDayArea from './CurrentDayArea';
import OtherDaysArea from './OtherDaysArea';
import useMatches from '../hooks/useMatches';
import { useMemo } from 'react';
import useWeather from '../hooks/useWeather';

function Board() {
  const [matches, isLoading] = useMatches();

  const locations = useMemo(
    () =>
      matches.map(match => ({
        timestamp: match.schedule,
        gridX: match.field.gridX,
        gridY: match.field.gridY,
      })),
    [matches]
  );

  const [weather] = useWeather({ locations });

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
          <CurrentDayArea match={matches[0]} weather={weather[0] ? weather[0] : null} />
          <hr css={css({ width: '100%', border: '1px solid white' })} />
          <OtherDaysArea
            matches={matches.slice(1, matches.length)}
            weather={weather.slice(1, weather.length) ? weather.slice(1, weather.length) : null}
          />
        </>
      )}
    </div>
  );
}

export default Board;
