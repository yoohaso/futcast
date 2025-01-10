import { css } from '@emotion/react';
import DayCard from './DayCard';
import { Match } from '../api/types';

type OtherDaysAreaProps = {
  matches: Match[];
};

function OtherDaysArea({ matches }: OtherDaysAreaProps) {
  return (
    <div
      css={css({
        width: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        gap: '2vh',
      })}
    >
      {matches.map(match => (
        <DayCard key={match.id} date={match.schedule} fieldName={match.field.name} startTime={match.schedule} />
      ))}
    </div>
  );
}

export default OtherDaysArea;
