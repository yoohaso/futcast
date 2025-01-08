import { css } from '@emotion/react';

function DayCard() {
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
    >
      <div css={css({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '25px 0' })}>
        <div css={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
          <span css={css({ display: 'block', fontWeight: 'bold' })}>1월 7일 (화)</span>
          <span css={css({ display: 'block', fontSize: '15px' })}>서울 송파 천마 풋살파크 1구장</span>
          <span css={css({ display: 'block', fontSize: '18px', fontWeight: 'bold' })}>20시</span>
        </div>
        <div
          css={css({
            width: '60px',
            height: '30px',
            backgroundColor: '#facc15',
            textAlign: 'center',
            borderRadius: '12px',
            fontSize: '13px',
            alignContent: 'center',
            fontWeight: 'bold',
          })}
        >
          주의
        </div>
      </div>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        })}
      >
        <img src="https://openweathermap.org/img/wn/10d@2x.png" />
        <span css={css({ display: 'block', fontSize: '30px', fontWeight: 'bold' })}>21℃</span>
      </div>
    </div>
  );
}

export default DayCard;
