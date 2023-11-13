import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import Modal from 'components/shared/modal';

const Layout = ({ children, headerClassnames, isHomePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalShow = () => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setIsMobileMenuOpen(false);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
  };

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header
        isHomePage={isHomePage}
        isMobileMenuOpen={isMobileMenuOpen}
        additionalClassName={headerClassnames}
        onBurgerClick={handleHeaderBurgerClick}
      />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        handleModalShow={handleModalShow}
        onButtonClick={handleHeaderBurgerClick}
      />
      <Modal modalData={{}} isVisible={isModalVisible} isVideoModal onModalHide={handleModalHide} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerClassnames: PropTypes.string,
  isHomePage: PropTypes.bool,
};

Layout.defaultProps = {
  headerClassnames: null,
  isHomePage: false,
};

export default Layout;
