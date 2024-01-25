import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';

import Illustration from './images/bg.svg';

const TITLE = 'Call for Proposal';
const DESCRIPTION =
  "Whether you’re an expert or new to cloud native computing, we encourage you to share your knowledge by submitting a proposal. We welcome diverse topics and speakers, and we’re excited to see the community's contributions — looking forward to your submissions!";
const BTN_TITLE = 'Submit';

const Proposal = () => (
  <section className="safe-paddings relative pb-32 pt-[120px] lg:pt-16 md:pb-24 md:pt-10 sm:pb-16 sm:pt-8">
    <div className="container-md">
      <div className="container-md relative flex flex-col items-center py-24 text-center text-primary-1 lg:py-[4.5rem] md:border-[5px] md:border-b-[#FCC5B1] md:border-l-[#FEEBE4] md:border-r-[#FCC5B1] md:border-t-[#FEEBE4] md:bg-[#FFF4F0] md:py-16 sm:py-8">
        <h2
          className="font-sans-cyber text-[52px] font-bold lowercase leading-tight lg:text-[40px] md:text-[32px]"
          id={LINKS.proposal.id}
        >
          {TITLE}
        </h2>
        <p className="mt-5 max-w-[861px] text-2xl leading-normal md:text-lg">{DESCRIPTION}</p>
        <Button
          className="mt-11 min-w-[170px] flex-none hover:bg-[#FFE1D4] md:mt-8"
          to="https://sessionize.com/kcd-zurich-2024/"
          theme="primary"
          size="sm"
          target="_blank"
        >
          {BTN_TITLE}
        </Button>
        <img
          className="!absolute !inset-0 -z-10 m-auto h-[513px] w-[1008px] flex-none lg:scale-[0.9] md:!hidden"
          src={Illustration}
          width={1008}
          height={513}
          loading="eager"
          alt="Hero illustration"
        />
      </div>
    </div>
  </section>
);

export default Proposal;

// w-[861px]
