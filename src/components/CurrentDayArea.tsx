import { css } from '@emotion/react';
import DayCard from './DayCard';
import { Match, Weather } from '../api/types';
import { formatDate, formatTime } from '../utils';

type CurrentDayAreaProps = {
  match: Match;
  weather: Weather | null;
};

function CurrentDayArea({ match, weather }: CurrentDayAreaProps) {
  return (
    <div
      css={css({
        width: 'inherit',
        paddingBottom: '10px',
      })}
    >
      <h2 css={css({ padding: '10px 0', fontSize: '1rem', color: '#ffffff' })}>오늘</h2>
      <DayCard
        date={formatDate(match.schedule)}
        fieldName={match.field.name}
        startTime={formatTime(match.schedule)}
        temp={weather?.temperature.value}
        skyCondition={weather?.skyCondition.value}
        precipitationType={weather?.precipitationType.value}
      />
    </div>
  );
}

export default CurrentDayArea;
