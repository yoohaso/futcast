import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Global, css } from '@emotion/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global
      styles={css`
        body {
          width: 100%;
          height: 100vh;
          margin: 0;
          background-color: #070c25;
          font-size: 16px;
          font-family:
            ui-sans-serif,
            -apple-system,
            system-ui,
            Segoe UI,
            Helvetica,
            Apple Color Emoji,
            Arial,
            sans-serif,
            Segoe UI Emoji,
            Segoe UI Symbol;
        }

        h1,
        h2,
        p {
          margin: 0;
        }
      `}
    />
    <App />
  </StrictMode>
);
