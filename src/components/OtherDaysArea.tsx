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
      {matches.map(match => {
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
  );
}

export default OtherDaysArea;
