import clsx from 'clsx';
import { m, AnimatePresence, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import MENUS from 'constants/menus';
import useScrollOverflow from 'hooks/use-scroll-overflow';
import arrowIcon from 'icons/arrow-down.svg';
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
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const controls = useAnimation();

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsSubmenuOpen((prevState) => !prevState);
  };

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
          <ul className="flex w-full flex-col justify-center space-y-3 text-center text-xl font-semibold text-primary-1">
            {MENUS.mobile.map(({ title, to, items }, index) => (
              <li key={index}>
                {items ? (
                  <button
                    className="relative flex w-full items-center justify-center py-4"
                    type="button"
                    onClick={(e) => handleButtonClick(e)}
                  >
                    {title}
                    <img
                      className={clsx(
                        'ml-2 transition-all duration-200',
                        isSubmenuOpen && 'mb-0.5 rotate-180'
                      )}
                      src={arrowIcon}
                      width={10}
                      height={6}
                      loading="lazy"
                      alt=""
                    />
                  </button>
                ) : (
                  <Button
                    className="!block py-4"
                    theme="link-primary"
                    to={to}
                    onClick={onButtonClick}
                  >
                    {title}
                  </Button>
                )}
                {items && (
                  <AnimatePresence>
                    {isSubmenuOpen && (
                      <m.ul
                        className="relative mt-2.5"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: ANIMATION_DURATION }}
                      >
                        {items.map(({ title: childTitle, to: childHref }, idx) => (
                          <li className="" key={idx}>
                            <Button className="block py-4" theme="link-primary" to={childHref}>
                              {childTitle}
                            </Button>
                          </li>
                        ))}
                      </m.ul>
                    )}
                  </AnimatePresence>
                )}
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
