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
      <div className="container flex items-center justify-between pt-5 pb-5 sm:flex-col sm:justify-around">
        <Link className="ml-2" to="/">
          <Logo className="h-12 w-44" />
        </Link>

        <nav>
          <ul className="-ml-2 mt-4 grid min-w-fit grid-cols-4 gap-y-4 gap-x-3 xl:gap-x-1 lg:mr-6 lg:grid-cols-2 sm:mx-auto">
            {MENUS.footer.map(({ text }, index) => (
              <li className="w-fit max-w-min text-sm font-semibold text-primary-1" key={index}>
                <Button
                  className="flex sm:flex-wrap"
                  theme="link-primary"
                  onClick={handleAnchorClick}
                >
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
