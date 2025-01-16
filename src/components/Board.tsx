import { css } from '@emotion/react';
import useMatches from '../hooks/useMatches';
import { useMemo } from 'react';
import useWeather from '../hooks/useWeather';
import DayCard from './DayCard';
import { formatDate, formatTime } from '../utils';

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

  const upcomingMatch = matches?.[0];
  const upcomitMatchWeather = weather?.[0];
  const otherMatches = matches?.slice(1, matches.length);

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
          <div
            css={css({
              width: 'inherit',
              paddingBottom: '10px',
            })}
          >
            <h2 css={css({ padding: '10px 0', fontSize: '1rem', color: '#ffffff' })}>오늘</h2>
            <DayCard
              date={formatDate(upcomingMatch!.schedule)}
              fieldName={upcomingMatch!.field.name}
              startTime={formatTime(upcomingMatch!.schedule)}
              temp={upcomitMatchWeather?.temperature.value}
              skyCondition={upcomitMatchWeather?.skyCondition.value}
              precipitationType={upcomitMatchWeather?.precipitationType.value}
              precipitationProbability={upcomitMatchWeather?.precipitationProbability.value}
            />
          </div>
          <hr css={css({ width: '100%', border: '1px solid white' })} />
          <div
            css={css({
              width: 'inherit',
              display: 'flex',
              flexDirection: 'column',
              gap: '2vh',
            })}
          >
            {otherMatches.map(match => {
              const matchWeather = weather?.find(ele => ele.datetime === match.schedule);

              return (
                <DayCard
                  key={match.id}
                  date={formatDate(match.schedule)}
                  fieldName={match.field.name}
                  startTime={formatTime(match.schedule)}
                  temp={matchWeather?.temperature.value}
                  skyCondition={matchWeather?.skyCondition.value}
                  precipitationType={matchWeather?.precipitationType.value}
                  precipitationProbability={matchWeather?.precipitationProbability.value}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Board;
