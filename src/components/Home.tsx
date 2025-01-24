import { css } from '@emotion/react';
import { Board } from './Board';

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

export default Home;
