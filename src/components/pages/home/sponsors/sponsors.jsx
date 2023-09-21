import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';

const TITLE = 'Sponsors';

const Sponsors = () => (
  <section className="safe-paddings relative bg-white pt-20 pb-16 md:py-14">
    <div className="container text-center">
      <h2 className="text-6xl font-bold leading-denser text-primary-1" id={LINKS.sponsors.id}>
        {TITLE}
      </h2>
      <p className="mx-auto mt-6 max-w-[800px] text-lg leading-normal text-primary-1">
        <strong>Kubernetes Community Days</strong> is more than an event; it's a community-driven
        movement, and we invite you to be a vital contributor to its success. Connect with us today
        to explore how you can make a lasting impact on the future of cloud-native computing.
      </p>
      <Button className="mt-7" to="mailto:info@cloudnative.amsterdam" theme="primary" size="lg">
        Contact us
      </Button>
    </div>
  </section>
);

export default Sponsors;
