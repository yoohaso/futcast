import { css } from '@emotion/react';
import { createPortal } from 'react-dom';

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ onClose, children }: ModalProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onClose();
  };

  return createPortal(
    <div
      css={css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      })}
      onClick={handleClick}
    >
      <div
        css={css({
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          height: 'auto',
          backgroundColor: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          zIndex: '1001',
          overflow: 'hidden',
          maxWidth: '380px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        })}
      >
        <div>
          <button
            type="button"
            onClick={onClose}
            css={css({
              position: 'fixed',
              border: 'none',
              color: '#ffffff',
              backgroundColor: 'transparent',
              top: '10px',
              right: '10px',
              fontSize: '15px',
            })}
          >
            X
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
