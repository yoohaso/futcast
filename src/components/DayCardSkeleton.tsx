import { css } from '@emotion/react';

function DayCardSkeleton() {
  return (
    <div
      css={css({
        width: 'inherit',
        height: '25vh',
        maxHeight: '166px',
        backgroundColor: '#fffff0',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px',
      })}
    />
  );
}

export default DayCardSkeleton;
