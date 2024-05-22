import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import MENUS from 'constants/menus';
import ComputerIcon from 'icons/computer.inline.svg';
import Logo from 'icons/logo.inline.svg';

import Burger from '../burger';
import Button from '../button';
import Link from '../link';
import Modal from '../modal';

const Header = ({
  isMobileMenuOpen,
  onBurgerClick,
  additionalClassName,
  isHomePage,
  isHideMenu,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalShow = () => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
  };

  return (
    <header
      className={clsx(
        'safe-paddings transition-200 relative z-10 transition-colors',
        isMobileMenuOpen ? 'bg-white bg-opacity-100' : '',
        additionalClassName
      )}
    >
      <div className="container flex items-center justify-between py-5 md:py-2">
        <Link className="z-50 block" to="/">
          <Logo className="h-[40px] w-[149px]" />
          <span className="sr-only">KCD Zürich</span>
        </Link>
        {!isHideMenu && (
          <nav className={clsx(isHomePage && 'mr-40 lg:mr-[154px]')}>
            <ul
              className={clsx(
                'flex space-x-8 text-white lg:ml-0 lg:space-x-6 md:hidden',
                isHomePage && 'lg:space-x-5'
              )}
            >
              {MENUS.header.map(({ title, to }, index) => (
                <li className="text-[15px] font-semibold text-primary-1" key={index}>
                  <Button to={to} theme="link-primary">
                    {title}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <Button
          className="lg:!px-2 lg:!text-[13px] md:hidden"
          theme="primary"
          size="sm"
          onClick={() => handleModalShow()}
        >
          <ComputerIcon className="mr-2.5 h-4 w-4" aria-hidden />
          Video 2023
        </Button>
        {!isHideMenu && (
          <>
            <Burger
              className="!absolute right-4 z-50 hidden md:block"
              isToggled={isMobileMenuOpen}
              onClick={onBurgerClick}
            />
            <Modal
              modalData={{}}
              isVisible={isModalVisible}
              isVideoModal
              onModalHide={handleModalHide}
            />
          </>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
  additionalClassName: PropTypes.string,
  isHomePage: PropTypes.bool,
  isHideMenu: PropTypes.bool,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
  additionalClassName: null,
  isHomePage: false,
  isHideMenu: false,
};

export default Header;
