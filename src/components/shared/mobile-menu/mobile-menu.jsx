import { m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import MENUS from 'constants/menus';
import useScrollOverflow from 'hooks/use-scroll-overflow';
import ComputerIcon from 'icons/computer.inline.svg';

import Button from '../button';

const ANIMATION_DURATION = 0.2;

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 40,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen, onButtonClick, handleModalShow }) => {
  const controls = useAnimation();

  useScrollOverflow(controls, isOpen);

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        className="safe-paddings fixed inset-0 z-[-1] mt-[56px] hidden overflow-x-hidden overflow-y-hidden bg-white px-8 py-5 lg:flex lg:flex-col lg:justify-between"
        initial="from"
        animate={controls}
        variants={variants}
      >
        <div className="scrollbar-hidden my-auto flex h-full w-full overflow-x-hidden overflow-y-scroll">
          <ul className="mx-auto flex flex-col justify-center space-y-3 text-center text-xl font-semibold text-primary-1">
            {MENUS.mobile.map(({ title, to, id }, index) => (
              <li key={index}>
                <Button
                  className="block py-4"
                  theme="link-primary"
                  to={to || `/#${id}`}
                  onClick={onButtonClick}
                >
                  {title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Button
          className="mt-7 md:!h-16 md:!text-lg"
          theme="primary"
          size="sm"
          onClick={() => handleModalShow()}
        >
          <ComputerIcon className="mr-2.5 h-4 w-4" aria-hidden />
          Video 2023
        </Button>
      </m.nav>
    </LazyMotion>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  onButtonClick: PropTypes.func.isRequired,
  handleModalShow: PropTypes.func.isRequired,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
