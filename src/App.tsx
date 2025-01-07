import { css } from '@emotion/react';

function DayCard() {
  return <div css={css({ width: 'inherit', height: '25vh', backgroundColor: '#fffff0', borderRadius: '10px' })}></div>;
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
