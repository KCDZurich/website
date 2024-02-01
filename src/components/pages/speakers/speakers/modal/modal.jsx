import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useId } from 'react';

import iconClose from './images/close.svg';
import FacebookIcon from './images/facebook.inline.svg';
import InstagramIcon from './images/instagram.inline.svg';
import LinkIcon from './images/link.inline.svg';
import LinkedInIcon from './images/linkedin.inline.svg';
import SessionizeIcon from './images/sessionize.inline.svg';
import TwitterIcon from './images/x.inline.svg';

const icons = {
  Twitter: TwitterIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Blog: LinkIcon,
  Company_Website: LinkIcon,
  Sessionize: SessionizeIcon,
  Other: LinkIcon,
};

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
  const { profilePicture, fullName, tagLine, bio, links } = modalData;

  const shouldReduceMotion = useReducedMotion();
  const headingId = useId();
  const modalAnimation = shouldReduceMotion ? {} : defaultModalAnimation;
  const modalBackdropAnimation = shouldReduceMotion ? {} : defaultModalBackdropAnimation;

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
            <div className="flex w-full flex-1 flex-row gap-x-5">
              <div className="relative h-[52px] w-[52px] flex-none">
                <div className="absolute inset-0 z-10 h-full w-full bg-primary-1 opacity-50 mix-blend-color sm:hidden" />
                <img
                  className="h-[52px] w-[52px] brightness-110 saturate-0"
                  src={profilePicture}
                  width={52}
                  height={52}
                  alt={fullName}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <h3 className="text-lg font-bold uppercase leading-snug text-primary-1 transition-colors duration-200 md:text-base">
                  {fullName}
                </h3>
                <p className="text-left text-sm font-normal leading-tight text-primary-1/60 transition-colors duration-200">
                  {tagLine}
                </p>
              </div>
            </div>
            <div
              className="mt-7 text-lg leading-normal sm:text-base"
              dangerouslySetInnerHTML={{ __html: bio }}
            />
            <ul className="mt-7 flex items-center gap-5">
              {links.map(({ title, url, linkType }, index) => {
                const Icon = icons[linkType];
                return (
                  <li key={index}>
                    <a
                      className="block text-primary-1 transition-colors duration-200 hover:text-blue-1"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-[18px]" />
                      <span className="sr-only">{title} link</span>
                    </a>
                  </li>
                );
              })}
            </ul>
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

Modal.propTypes = {
  onModalHide: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  modalData: PropTypes.shape({
    id: PropTypes.string,
    profilePicture: PropTypes.string,
    fullName: PropTypes.string,
    tagLine: PropTypes.string,
    bio: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        linkType: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Modal;
