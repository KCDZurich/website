import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation, useReducedMotion } from 'framer-motion';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useId, useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CloseIcon from 'icons/close.inline.svg';
import CommunityIcon from 'icons/cncf-icon.inline.svg';
import GithubIcon from 'icons/github-icon.inline.svg';
import InstagramIcon from 'icons/instagram-icon.inline.svg';
import LinkedInIcon from 'icons/linkedin-icon.inline.svg';
import TwitterIcon from 'icons/twitter-icon.inline.svg';
import WebsiteIcon from 'icons/webpage-icon.inline.svg';

import Button from '../button';

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

const Modal = ({ isVisible, modalData, onModalHide, isPresentationShow, isVideoModal }) => {
  const {
    id = '',
    name = '',
    photo = '',
    position = '',
    content = '',
    twitterUrl = '',
    linkedInUrl = '',
    githubUrl = '',
    communityUrl = '',
    instagramUrl = '',
    websiteUrl = '',
    time = '',
    title = '',
    duration = '',
    presentation = '',
    speakers = [],
    isCoincidedEvent = false,
    isPhotoGallery = false,
    slideIndex = 0,
  } = modalData;
  const sliderGalleryData = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "archive-2023" }, extension: { eq: "jpg" } }
        sort: { relativePath: ASC }
      ) {
        nodes {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 1200)
          }
        }
      }
    }
  `);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: slideIndex,
  };
  const sliderRef = useRef();
  const shouldReduceMotion = useReducedMotion();
  const headingId = useId();
  const modalAnimation = shouldReduceMotion ? {} : defaultModalAnimation;
  const modalBackdropAnimation = shouldReduceMotion ? {} : defaultModalBackdropAnimation;

  const handleWindowKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onModalHide();
      }

      if (e.key === 'ArrowRight' && isPhotoGallery) {
        sliderRef?.current?.slickNext();
      }

      if (e.key === 'ArrowLeft' && isPhotoGallery) {
        sliderRef?.current?.slickPrev();
      }
    },
    [isPhotoGallery, onModalHide]
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
              'fixed inset-0 z-50 m-auto flex h-[fit-content] max-h-[calc(100%-60px)] max-w-[592px] flex-col rounded bg-white text-primary-1 md:max-h-[65vh] sm:left-2 sm:right-2',
              {
                'overflow-y-auto p-10 sm:p-5': !isVideoModal && !isPhotoGallery,
                'w-[1200px] max-w-[90vw]': isVideoModal,
                'w-[1200px] max-w-[80vw] p-0': isPhotoGallery,
              }
            )}
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            {...modalAnimation}
          >
            {/* eslint-disable-next-line no-nested-ternary */}
            {isVideoModal ? (
              <>
                <iframe
                  allow="autoplay; picture-in-picture; web-share"
                  src="https://www.youtube.com/embed/7-b0llQFT8E?autoplay=1&mute=0&rel=0"
                  title="Kubernetes Community Days Zürich 2023"
                  width="100%"
                  height="520"
                  allowFullScreen
                />
                <Button
                  className="z-999 absolute -right-12 -top-12 md:-right-6"
                  theme="default"
                  size="sm"
                  aria-label="close modal"
                  onClick={onModalHide}
                >
                  <CloseIcon className="h-7 w-7" aria-hidden />
                </Button>
              </>
            ) : // eslint-disable-next-line no-nested-ternary
            isPhotoGallery ? (
              <>
                <Slider ref={sliderRef} {...sliderSettings}>
                  {sliderGalleryData.allFile.nodes.map((photo, index) => {
                    const image = getImage(photo);

                    return (
                      <GatsbyImage
                        key={index}
                        className="w-full"
                        image={image}
                        width={1200}
                        height={800}
                        alt="Gallery photo"
                      />
                    );
                  })}
                </Slider>
                <Button
                  className="z-999 absolute -right-12 -top-10 md:-right-6"
                  theme="default"
                  size="sm"
                  aria-label="close modal"
                  onClick={onModalHide}
                >
                  <CloseIcon className="h-7 w-7" aria-hidden />
                </Button>
              </>
            ) : isPresentationShow ? (
              <>
                <div className="flex items-center">
                  <time className="text-sm font-semibold leading-none tracking-tight text-primary-1 opacity-60">
                    {time}
                  </time>
                  <span className="relative ml-8 rounded-full bg-yellow px-2 py-1.5 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 before:absolute before:-left-4 before:bottom-0 before:top-0 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3">
                    {duration}
                  </span>
                  {speakers.length > 0 &&
                    speakers.map(({ name, photo }, index) => (
                      <span
                        className="relative ml-8 inline-flex items-center gap-x-2 text-left text-lg font-semibold leading-normal text-primary-5 transition-colors duration-200 before:absolute before:-left-4 before:bottom-0 before:top-0 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 hover:text-blue-1"
                        key={index}
                      >
                        <img
                          className="h-7 w-7 rounded-full"
                          src={photo}
                          width={28}
                          alt={name}
                          loading="lazy"
                        />
                        <p className="whitespace-nowrap text-sm font-medium leading-none sm:whitespace-normal">
                          {name}
                        </p>
                      </span>
                    ))}
                </div>
                <h2 className="mt-7 text-2xl font-semibold leading-tight tracking-[-0.01em] text-primary-1 sm:text-lg">
                  {title}
                </h2>
                <p
                  className="mt-3 text-lg leading-normal text-primary-1 sm:text-base"
                  dangerouslySetInnerHTML={{ __html: presentation }}
                />
              </>
            ) : (
              <>
                <div className="flex items-start">
                  <img
                    className="mb-7 mr-7 h-auto w-[120px] sm:mb-4 sm:mr-4"
                    src={photo}
                    width={120}
                    alt={name}
                  />
                  <div>
                    <h2
                      id={headingId}
                      className="whitespace-nowrap text-4xl font-bold leading-tight tracking-[-0.01em] sm:whitespace-normal sm:text-2xl"
                    >
                      {name}
                    </h2>
                    <p
                      className="mt-2 text-lg font-semibold leading-normal sm:text-base"
                      dangerouslySetInnerHTML={{ __html: position }}
                    />
                  </div>
                </div>
                <div
                  className="text-lg leading-normal sm:text-base"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <ul className="flex items-center gap-5">
                  {twitterUrl && (
                    <li>
                      <a
                        className="mt-8 block transition-colors duration-200 hover:text-blue-1"
                        href={twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon className="h-[20px]" />
                        <span className="sr-only">Twitter link</span>
                      </a>
                    </li>
                  )}
                  {linkedInUrl && (
                    <li>
                      <a
                        className="mt-8 block transition-colors duration-200 hover:text-blue-1"
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon className="h-[21px]" />
                        <span className="sr-only">Linkedin link</span>
                      </a>
                    </li>
                  )}
                  {githubUrl && (
                    <li>
                      <a
                        className="mt-8 block transition-colors duration-200 hover:text-blue-1"
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="h-[20px]" />
                        <span className="sr-only">Github link</span>
                      </a>
                    </li>
                  )}
                  {communityUrl && (
                    <li>
                      <a
                        className="mt-8 block transition-colors duration-200 hover:text-blue-1"
                        href={communityUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CommunityIcon className="h-[22px]" />
                        <span className="sr-only">Cloud native community link</span>
                      </a>
                    </li>
                  )}
                  {instagramUrl && (
                    <li>
                      <a
                        className="mt-8 block transition-colors duration-200 hover:text-blue-1"
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon className="h-[21px]" />
                        <span className="sr-only">Instagram link</span>
                      </a>
                    </li>
                  )}
                  {websiteUrl && (
                    <li>
                      <a
                        className="mt-8 block transition-colors duration-200 hover:text-blue-1"
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WebsiteIcon className="h-[21px]" />
                        <span className="sr-only">Personal website link</span>
                      </a>
                    </li>
                  )}
                </ul>
                <div className="mt-8">
                  <h3 className="text-lg font-bold leading-normal text-primary-1">
                    Speaker’s schedule
                  </h3>
                  <div className="mt-4 border-l-2 border-l-primary-1 pl-8">
                    <time className="text-sm font-semibold leading-none tracking-tight text-primary-1 opacity-60">
                      {time}
                    </time>
                    <span className="relative ml-8 rounded-full bg-yellow px-2 py-1.5 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 before:absolute before:-left-4 before:bottom-0 before:top-0 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3">
                      {duration}
                    </span>
                    <Link
                      className="mt-3 block text-left text-lg font-semibold leading-normal text-primary-1 transition-colors duration-200 hover:text-blue-1"
                      to="/schedule"
                      state={{ modalId: id, isCoincidedEvent }}
                    >
                      {title}
                    </Link>
                  </div>
                </div>
              </>
            )}
          </m.div>

          <m.div
            className="fixed inset-0 z-10 bg-primary-1 opacity-40"
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
  isPresentationShow: PropTypes.bool,
  isVideoModal: PropTypes.bool,
  modalData: PropTypes.shape({
    id: PropTypes.string,
    photo: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    content: PropTypes.string,
    twitterUrl: PropTypes.string,
    linkedInUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    communityUrl: PropTypes.string,
    instagramUrl: PropTypes.string,
    websiteUrl: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.string,
    presentation: PropTypes.string,
    speakers: PropTypes.array,
    isCoincidedEvent: PropTypes.bool,
    activePhoto: PropTypes.string,
    isPhotoGallery: PropTypes.bool,
    slideIndex: PropTypes.number,
  }).isRequired,
};

Modal.defaultProps = {
  isPresentationShow: false,
  isVideoModal: false,
};

export default Modal;
