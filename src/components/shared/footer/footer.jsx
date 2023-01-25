import React from 'react';

import MENUS from 'constants/menus';
import Logo from 'icons/logo.inline.svg';

import Button from '../button';
import Link from '../link';

const Footer = () => {
  const handleAnchorClick = (e) => {
    e.preventDefault();
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
    <footer className="safe-paddings border-t border-t-gray-10 bg-white">
      <div className="container flex items-center justify-between pt-5 pb-5 sm:justify-around">
        <Link className="ml-2" to="/">
          <Logo className="h-12 w-44" />
        </Link>

        <nav>
          <ul className="flex space-x-10 text-white md:mr-4 md:space-x-8 sm:mx-6 sm:max-w-[200px] sm:flex-col sm:space-y-3 sm:space-x-0 sm:self-center">
            {MENUS.footer.map(({ text }, index) => (
              <li className="font-semibold text-primary-1" key={index}>
                <Button theme="link-primary" onClick={handleAnchorClick}>
                  {text}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
