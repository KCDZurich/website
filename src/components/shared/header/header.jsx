import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import MENUS from 'constants/menus';
import Logo from 'icons/logo.inline.svg';

import Burger from '../burger';
import Button from '../button';
import Link from '../link';

const Header = ({ isMobileMenuOpen, onBurgerClick }) => {
  const handleAnchorClick = (e) => {
    const id = e.target.firstChild.data;
    const element = document.getElementById(id);

    if (element) {
      const indent = 50;
      const elementTop = element.getBoundingClientRect().top;
      const elementOffset = window.pageYOffset + elementTop - indent;

      window.scrollTo({
        top: elementOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={clsx(
        'safe-paddings transition-200 z-10 transition-colors',
        isMobileMenuOpen ? 'bg-white bg-opacity-100' : 'bg-[#EDC3C7] bg-opacity-10'
      )}
    >
      <div className="container flex items-center justify-between pt-5 pb-2">
        <Link className="z-50 ml-2" to="/">
          <Logo className="h-12 w-44" />
        </Link>

        <nav>
          <ul className="-ml-8 flex space-x-8 text-white md:hidden">
            {MENUS.header.map(({ text, to }, index) => (
              <li className="text-[15px] font-semibold text-primary-1" key={index}>
                <Button theme="link-primary" to={to} onClick={handleAnchorClick}>
                  {text}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          className="-mr-2 md:hidden"
          to="https://tickets.kcdzurich.ch/"
          theme="primary"
          size="sm"
        >
          Get your ticket
        </Button>

        <Burger
          className={clsx('z-50 hidden md:block', isMobileMenuOpen && 'text-black dark:text-white')}
          isToggled={isMobileMenuOpen}
          onClick={onBurgerClick}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
};

export default Header;
