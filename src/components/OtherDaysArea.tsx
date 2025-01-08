import { css } from '@emotion/react';
import DayCard from './DayCard';

function OtherDaysArea() {
  return (
    <div
      css={css({
        width: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        gap: '2vh',
      })}
    >
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
    </div>
  );
}

export default OtherDaysArea;
