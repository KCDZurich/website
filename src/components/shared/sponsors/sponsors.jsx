import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
// import Acend from 'icons/acend-logo.svg';
// import Adfinis from 'icons/adfinis.svg';
// import BGNova from 'icons/bg-nova.svg';
// import Camptocamp from 'icons/camptocamp.svg';
// import Dynatrace from 'icons/dynatrace.svg';
// import Flow from 'icons/flow.svg';
// import Google from 'icons/google-cloud.svg';
// import Innoq from 'icons/innoq.svg';
// import Isovalent from 'icons/isovalent.svg';
// import Postfinance from 'icons/postfinance.svg';
// import Puzzle from 'icons/puzzle.svg';
// import RedHat from 'icons/red-hat.svg';
// import Swisscom from 'icons/swisscom.svg';
// import Vmware from 'icons/vmware.svg';
// import Vshn from 'icons/vshn.svg';

const TITLE = 'Sponsors';

const ITEMS = [
  {
    logos: [
      // { icon: Postfinance, url: 'https://www.postfinance.ch/' },
      // { icon: Camptocamp, url: 'https://www.camptocamp.com/' },
      // { icon: Puzzle, url: 'https://www.puzzle.ch/' },
      // { icon: Camptocamp, url: 'https://www.camptocamp.com/' },
      // { icon: BGNova, url: 'https://b-nova.com/' },
      // { icon: Camptocamp, url: 'https://www.camptocamp.com/' },
      // { icon: Acend, url: 'https://acend.ch/' },
    ],
    cardClassname:
      'min-w-[280px] min-h-[104px] sm:min-w-[250px] sm:w-fit sm:min-h-[94px] xs:min-w-fit xs:max-w-full',
  },
];

const Sponsors = () => (
  <section className="safe-paddings relative bg-white py-16 sm:py-16">
    <div className="container text-center">
      <h2 className="text-6xl font-bold leading-denser text-primary-1" id={LINKS.sponsors.id}>
        {TITLE}
      </h2>
      <p className="mx-auto mt-6 max-w-[800px] text-lg leading-normal text-primary-1">
        <strong>Kubernetes Community Days</strong> is more than an event; it's a community-driven
        movement, and we invite you to be a vital contributor to its success. Connect with us today
        to explore how you can make a lasting impact on the future of cloud-native computing. Please see our <a href="https://drive.google.com/file/d/1iXJpCmh2v_a0PviqjXg_H3NbBkv060q2/view?usp=sharing">sponsorship prospectus</a> for more information.
      </p>
      <Button className="mt-7" to="mailto:hello@kcdutrecht.nl" theme="primary" size="lg">
        Contact us
      </Button>

      <ul className="mt-2 flex flex-col">
        {ITEMS.map(({ logos, cardClassname, iconClassname }, index) => (
          <li className="" key={index}>
            <ul className="mt-2 mb-[70px] flex flex-wrap justify-center gap-x-8 xl:gap-y-6">
              {logos.map(({ icon, url }, index) => (
                <li className={clsx('flex items-center justify-center', cardClassname)} key={index}>
                  <Link
                    className="flex h-full w-fit items-center justify-center"
                    to={url}
                    target="_blank"
                  >
                    <img
                      className={clsx('h-auto w-auto xs:max-w-full', iconClassname)}
                      src={icon}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="sponsor-logo"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Sponsors;
