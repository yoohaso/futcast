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

function OtherDayArea() {
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

function Board() {
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
      <CurrentDayArea />
      <hr css={css({ width: '100%', border: '1px solid white' })} />
      <OtherDayArea />
    </div>
  );
}

function Home() {
  return (
    <div
      css={css({
        maxWidth: '462px',
        width: '100%',
        backgroundColor: '#070c25',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <h1 css={css({ color: '#ffffff', padding: '15px', fontSize: '1.5rem' })}>풋캐스트</h1>
      <main css={css({ flex: 1 })}>
        <Board />
      </main>
      <footer css={css({ height: '8vh' })}></footer>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
