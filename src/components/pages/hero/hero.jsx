import React from 'react';

import Button from 'components/shared/button';

import ButtonLogo from './images/button-icon.inline.svg';

const DESCRIPTION =
  'Lorem ipsum dolor sit amet consectetur. Lectus tortor proin tristique et. Sem tincidunt libero sed neque.';

const Hero = () => (
  <section className="safe-paddings relative bg-black pt-28 pb-[328px]">
    <div className="container-lg pl-2">
      <h1 className="leading-denser mt-2 max-w-[800px] text-[64px] font-medium text-white">
        Notification <span className="text-purple">inspirations</span> for your App made <br />
        with ChatGPT
      </h1>
      <p className="mt-5 max-w-[488px] text-lg leading-normal text-gray-11">{DESCRIPTION}</p>
      <div className="mt-11 flex">
        <Button className="mr-6" to="/" theme="purple-filled" size="sm">
          <ButtonLogo className="mr-2.5 h-5 w-5" />
          Show me
        </Button>
        <Button theme="gray-filled" to="/" size="sm">
          Discover Novu
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
