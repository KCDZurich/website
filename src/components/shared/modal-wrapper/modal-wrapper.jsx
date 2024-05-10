import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useId, useEffect, useCallback } from 'react';

import iconClose from './images/close.svg';

const defaultModalAnimation = {
  transition: { duration: 0.2, delay: 0.1, ease: 'easeInOut' },
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const defaultModalBackdropAnimation = {
  transition: { duration: 0.2, ease: 'easeInOut' },
  initial: { opacity: 0 },
  animate: { opacity: 0.4 },
  exit: { opacity: 0 },
};

const ModalWrapper = ({ isVisible, onModalHide, children }) => {
  const shouldReduceMotion = useReducedMotion();
  const headingId = useId();
  const modalAnimation = shouldReduceMotion ? {} : defaultModalAnimation;
  const modalBackdropAnimation = shouldReduceMotion ? {} : defaultModalBackdropAnimation;

  const handleWindowKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onModalHide();
      }
    },
    [onModalHide]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleWindowKeyDown);
    return () => window.removeEventListener('keydown', handleWindowKeyDown);
  }, [handleWindowKeyDown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <LazyMotion features={domAnimation}>
          <m.div
            className={clsx(
              'fixed inset-0 z-50 m-auto flex h-[fit-content] max-h-[calc(100%-60px)] max-w-[592px] flex-col overflow-y-auto border border-primary-1 bg-white p-8 text-primary-1 shadow-[20px_20px_0_0_rgba(161,203,211,0.2)] md:max-h-[65vh] sm:left-2 sm:right-2 sm:p-5'
            )}
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            {...modalAnimation}
          >
            <button
              className="absolute right-[18px] top-[18px] transition-opacity hover:opacity-60"
              type="button"
              onClick={onModalHide}
            >
              <img
                className="h-[18px] w-[18px]"
                src={iconClose}
                width={18}
                height={18}
                loading="lazy"
                alt=""
              />
            </button>
            {children}
          </m.div>

          <m.div
            className="fixed inset-0 z-10 bg-white opacity-50"
            key="modal-backdrop"
            onClick={onModalHide}
            {...modalBackdropAnimation}
          />
        </LazyMotion>
      )}
    </AnimatePresence>
  );
};

ModalWrapper.propTypes = {
  onModalHide: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalWrapper;
