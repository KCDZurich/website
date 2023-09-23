import clsx from 'clsx';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import React, { useState } from 'react';
import slugify from 'slugify';

import MENUS from 'constants/menus';
// import Logo from 'icons/logo.inline.svg';

import Burger from '../burger';
import Button from '../button';
import Link from '../link';
import Modal from '../modal';

const Header = ({ isMobileMenuOpen, onBurgerClick, additionalClassName, homepage }) => {
  const getAnchor = (str) => slugify(str).toLocaleLowerCase();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalShow = () => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
  };

  const handleAnchorClick = (e) => {
    const id = getAnchor(e.target.firstChild.data);

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
        isMobileMenuOpen ? 'bg-white bg-opacity-100' : 'bg-[#EDC3C7] bg-opacity-10',
        additionalClassName
      )}
    >
      <div className="container flex items-center justify-between pt-5 pb-2">
        <Link className="z-50 ml-2" to="/">
          {/* <Logo className="h-12 w-44" /> */}
          <strong className="text-2xl font-extrabold text-primary-1 hover:text-blue-1">
            KCD Utrecht
          </strong>
        </Link>

        <nav>
          <ul className="-ml-8 flex space-x-8 text-white lg:ml-0 lg:space-x-6 md:hidden">
            {MENUS.header.map(({ text, to, homeTo }, index) => (
              <li className="text-[15px] font-semibold text-primary-1" key={index}>
                {homepage ? (
                  <Button
                    to={homeTo}
                    theme="link-primary"
                    onClick={homeTo ? undefined : handleAnchorClick}
                  >
                    {text}
                  </Button>
                ) : (
                  <Button to={to} theme="link-primary">
                    {text}
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <Button
          className="-mr-2 md:hidden"
          theme="primary"
          size="sm"
          onClick={() => handleModalShow()}
        >
          KCD Amsterdam 2023 Video
        </Button>

        <Burger
          className="z-50 hidden md:block"
          isToggled={isMobileMenuOpen}
          onClick={onBurgerClick}
        />

        <Modal
          modalData={{}}
          isVisible={isModalVisible}
          isVideoModal
          onModalHide={handleModalHide}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
  additionalClassName: PropTypes.string,
  homepage: PropTypes.bool,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
  additionalClassName: null,
  homepage: false,
};

export default Header;
