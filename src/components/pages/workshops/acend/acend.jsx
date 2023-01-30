import React from 'react';

import AcendLogo from 'icons/acend-logo.inline.svg';

const DESCRIPTION =
  'As a knowledge platform, acend accompanies engineers and their businesses across new technological frontiers. We offer extraordinary, inspiring and practice-oriented teaching and learning experiences.';

const Acend = () => (
  <section className="safe-paddings bg-[#EDC3C7] bg-opacity-10 py-20">
    <div className="container relative flex justify-evenly">
      <AcendLogo className="h-[87px] w-[313px]" />
      <p className="max-w-[588px] text-lg leading-normal text-primary-1">{DESCRIPTION}</p>
    </div>
  </section>
);

export default Acend;
