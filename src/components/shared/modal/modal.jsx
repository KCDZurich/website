import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useId } from 'react';

import CommunityIcon from 'icons/cncf-icon.inline.svg';
import GithubIcon from 'icons/github-icon.inline.svg';
import InstagramIcon from 'icons/instagram-icon.inline.svg';
import LinkedInIcon from 'icons/linkedin-icon.inline.svg';
import TwitterIcon from 'icons/twitter-icon.inline.svg';
import WebsiteIcon from 'icons/webpage-icon.inline.svg';

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

const Modal = ({ isVisible, modalData, onModalHide }) => {
  const {
    name,
    photo,
    position,
    content,
    twitterUrl,
    linkedInUrl,
    githubUrl,
    communityUrl,
    instagramUrl,
    websiteUrl,
  } = modalData;
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
        <>
          <motion.div
            className="fixed inset-0 z-20 m-auto flex h-[fit-content] max-h-[calc(100%-60px)] max-w-[620px] flex-col overflow-y-auto rounded bg-white p-10 text-primary-1 sm:left-2 sm:right-2 sm:p-5"
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            {...modalAnimation}
          >
            <div className="flex items-start">
              <img
                className="mr-7 mb-7 h-auto w-[120px] sm:mr-4 sm:mb-4"
                src={photo}
                width={120}
                alt={name}
              />
              <div>
                <h2
                  id={headingId}
                  className="whitespace-nowrap text-6xl font-bold leading-tight sm:whitespace-normal sm:text-4xl"
                >
                  {name}
                </h2>
                <p className="mt-2 text-lg font-semibold leading-normal sm:text-base">{position}</p>
              </div>
            </div>
            <div className="text-lg leading-normal sm:text-base">{content}</div>
            <ul className="my-8 flex items-center gap-3">
              {twitterUrl && (
                <li>
                  <a
                    className="flex h-[28px] w-[28px] items-center justify-center transition-colors duration-200 hover:text-blue-1"
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon />
                    <span className="sr-only">Twitter link</span>
                  </a>
                </li>
              )}
              {linkedInUrl && (
                <li>
                  <a
                    className="flex h-[28px] w-[28px] items-center justify-center transition-colors duration-200 hover:text-blue-1"
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                    <span className="sr-only">Linkedin link</span>
                  </a>
                </li>
              )}
              {githubUrl && (
                <li>
                  <a
                    className="flex h-[28px] w-[28px] items-center justify-center transition-colors duration-200 hover:text-blue-1"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                    <span className="sr-only">Github link</span>
                  </a>
                </li>
              )}
              {communityUrl && (
                <li>
                  <a
                    className="flex h-[28px] w-[28px] items-center justify-center transition-colors duration-200 hover:text-blue-1"
                    href={communityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CommunityIcon />
                    <span className="sr-only">Cloud native community link</span>
                  </a>
                </li>
              )}
              {instagramUrl && (
                <li>
                  <a
                    className="flex h-[28px] w-[28px] items-center justify-center transition-colors duration-200 hover:text-blue-1"
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                    <span className="sr-only">Instagram link</span>
                  </a>
                </li>
              )}
              {websiteUrl && (
                <li>
                  <a
                    className="flex h-[28px] w-[28px] items-center justify-center transition-colors duration-200 hover:text-blue-1"
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WebsiteIcon />
                    <span className="sr-only">Personal website link</span>
                  </a>
                </li>
              )}
            </ul>
            <h3 className="text-lg font-bold leading-normal">Speaker’s schedule</h3>
          </motion.div>

          <motion.div
            className="fixed inset-0 z-10 bg-primary-1 opacity-40"
            key="modal-backdrop"
            {...modalBackdropAnimation}
            onClick={onModalHide}
          />
        </>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  onModalHide: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  modalData: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    twitterUrl: PropTypes.string.isRequired,
    linkedInUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
    communityUrl: PropTypes.string.isRequired,
    instagramUrl: PropTypes.string.isRequired,
    websiteUrl: PropTypes.string.isRequired,
  }).isRequired,
};
export default Modal;
