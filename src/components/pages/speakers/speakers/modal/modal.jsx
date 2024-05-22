import PropTypes from 'prop-types';
import React from 'react';

import ModalWrapper from 'components/shared/modal-wrapper';
import FacebookIcon from 'icons/social/facebook.inline.svg';
import GithubIcon from 'icons/social/github.inline.svg';
import InstagramIcon from 'icons/social/instagram.inline.svg';
import LinkedInIcon from 'icons/social/linkedin.inline.svg';
import LinkIcon from 'icons/social/other.inline.svg';
import SessionizeIcon from 'icons/social/sessionize.inline.svg';
import TwitterIcon from 'icons/social/x.inline.svg';
import YoutubeIcon from 'icons/social/youtube.inline.svg';

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

const additionalIcons = [
  {
    name: 'youtube',
    icon: YoutubeIcon,
  },
  {
    name: 'github',
    icon: GithubIcon,
  },
];

const Modal = ({ isVisible, modalData, onModalHide }) => {
  const { profilePicture, fullName, tagLine, bio, links } = modalData;

  return (
    <ModalWrapper isVisible={isVisible} onModalHide={onModalHide}>
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
      <ul className="mt-7 flex items-center gap-[18px]">
        {links.map(({ title, url, linkType }, index) => {
          let Icon = icons[linkType];

          additionalIcons.forEach(({ name, icon }) => {
            if (url.includes(name)) Icon = icon;
          });

          return (
            <li key={index}>
              <a
                className="block text-primary-1 transition-opacity hover:opacity-60"
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
    </ModalWrapper>
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
