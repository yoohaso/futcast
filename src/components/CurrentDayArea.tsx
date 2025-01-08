import { css } from '@emotion/react';
import DayCard from './DayCard';

function CurrentDayArea() {
  return (
    <div
      css={css({
        width: 'inherit',
        paddingBottom: '10px',
      })}
    >
      <h2 css={css({ padding: '10px 0', fontSize: '1rem', color: '#ffffff' })}>오늘</h2>
      <DayCard />
    </div>
  );
}

export default CurrentDayArea;
