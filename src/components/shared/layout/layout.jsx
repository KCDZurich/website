import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';

const Layout = ({ children, headerClassnames }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        additionalClassName={headerClassnames}
        onBurgerClick={handleHeaderBurgerClick}
      />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileMenu isOpen={isMobileMenuOpen} onButtonClick={handleHeaderBurgerClick} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerClassnames: PropTypes.string,
};

Layout.defaultProps = {
  headerClassnames: null,
};

export default Layout;
