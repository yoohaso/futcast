import { css } from '@emotion/react';
import DayCard from './DayCard';
import { Match, Weather } from '../api/types';
import { formatDate, formatTime } from '../utils';

type OtherDaysAreaProps = {
  matches: Match[];
  weather: Weather[] | null;
};

function OtherDaysArea({ matches, weather }: OtherDaysAreaProps) {
  return (
    <div
      css={css({
        width: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        gap: '2vh',
      })}
    >
      {matches.map((match, index) => (
        <DayCard
          key={match.id}
          date={formatDate(match.schedule)}
          fieldName={match.field.name}
          startTime={formatTime(match.schedule)}
          temp={weather && weather.length > 0 ? weather[index].temperature.value : undefined}
        />
      ))}
    </div>
  );
}

export default OtherDaysArea;
