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
              {MENUS.header.map(({ title, to, items }, index) => (
                <li
                  className={clsx(
                    items && 'group relative',
                    'text-[15px] font-semibold text-primary-1'
                  )}
                  key={index}
                >
                  {items ? (
                    <>
                      <button
                        className="-my-3 whitespace-pre p-3 text-[15px] font-semibold text-primary-1"
                        type="button"
                      >
                        {title}
                      </button>
                      <div className="group-hover:opacity-1 invisible absolute bottom-0 w-max -translate-x-1 translate-y-[114%] opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100">
                        <ul className="flex min-w-[184px] flex-col border border-primary-1 bg-white p-2">
                          {items.map(({ title: childTitle, to: childTo }, idx) => (
                            <li
                              className="relative mt-4 before:absolute before:-top-2 before:h-px before:w-full before:bg-[url('/images/dash-line-gray.svg')] before:bg-13 first:mt-0 first:before:hidden"
                              key={idx}
                            >
                              <Button
                                className="!block p-2 !text-left !tracking-tight"
                                to={childTo}
                                theme="link-primary"
                              >
                                {childTitle}
                              </Button>
                            </li>
                          ))}
                        </ul>
                        <span
                          className="absolute inset-0 -left-[5px] -z-10 h-[calc(100%+5px)] w-[calc(100%+10px)] bg-white"
                          aria-hidden
                        />
                        <span
                          className="absolute inset-2.5 -z-20 h-full w-full bg-blue-light"
                          aria-hidden
                        />
                      </div>
                    </>
                  ) : (
                    <Button to={to} theme="link-primary">
                      {title}
                    </Button>
                  )}
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
          Video 2024
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
