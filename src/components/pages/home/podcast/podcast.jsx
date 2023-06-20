import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';

const TITLE = 'Podcast';
const DESCRIPTION =
  'Discover the Kubernetes Universe at Kubernetes Community Days Zurich 2023, powered by b-nova. Tune in to the podcast episode where industry leaders and developers shape the future of container orchestration.';

const Podcast = () => (
  <section className="safe-paddings pb-40 md:pb-20">
    <div className="container-md">
      <div className="flex items-center gap-x-[10%] md:flex-col md:gap-y-8 sm:items-center">
        <div className="w-[416px] max-w-full shrink-0">
          <StaticImage
            className="rounded-[4px] shadow-xl"
            imgClassName="rounded-[4px]"
            src="../../podcast/hero/img/podcast-cover.jpg"
            alt="Podcast cover"
          />
        </div>
        <div>
          <h2 className="text-6xl font-bold leading-tight text-primary-1">{TITLE}</h2>
          <p className="mt-5 text-lg">{DESCRIPTION}</p>
          <Button className="mt-7" to="/podcast" theme="primary" size="lg">
            Discover our podcast
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Podcast;
