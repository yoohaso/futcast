import { css } from '@emotion/react';
import { createPortal } from 'react-dom';

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ onClose, children }: ModalProps) {
  return createPortal(
    <div
      css={css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
      })}
      onClick={onClose}
    >
      <div
        css={css({
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          height: '35%',
          backgroundColor: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          zIndex: '1001',
          overflow: 'hidden',
          maxWidth: '380px',
          maxHeight: '400px',
          padding: '10px 20px 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        })}
      >
        <div css={css({ alignSelf: 'flex-end' })}>
          <button type="button" onClick={onClose} css={css({ border: 'none', backgroundColor: 'white' })}>
            X
          </button>
        </div>
        <div css={css({ height: '100%', marginTop: '50px' })}>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
