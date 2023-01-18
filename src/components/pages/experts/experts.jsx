import React from 'react';

import AnnieTalvastoPhoto from './images/annie-talvasto-photo.jpg';
import JuliusVolzPhoto from './images/julius-volz-photo.jpg';
import KatieGamanjiPhoto from './images/katie-gamanji-photo.jpg';
import LizRicePhoto from './images/liz-rice-photo.jpg';
import MaxKorbacherPhoto from './images/max-korbacher-photo.jpg';
import PriyaWadhwaPhoto from './images/priya-wadhwa-photo.jpg';
import RicardoRochaPhoto from './images/ricardo-rocha-photo.jpg';
import ThomasGrafPhoto from './images/thomas-graf-photo.jpg';

const TITLE = 'Learn from our experts';

const ITEMS = [
  {
    name: 'Thomas Graf',
    position: 'CTO & CO-Founder of Isovalent',
    photo: ThomasGrafPhoto,
  },
  {
    name: 'Liz Rice',
    position: 'Chief Open Source Office at Isovalent',
    photo: LizRicePhoto,
  },
  {
    name: 'Katie Gamanji',
    position: 'Senior Field Engineer at Apple / TOC at CNCF',
    photo: KatieGamanjiPhoto,
  },
  {
    name: 'Julius Volz',
    position: 'Co-Founder of prometheus.io / Founder at PromLabs',
    photo: JuliusVolzPhoto,
  },
  {
    name: 'Annie Talvasto',
    position: 'CNCF Ambassador I Azure MVP',
    photo: AnnieTalvastoPhoto,
  },
  {
    name: 'Ricardo Rocha',
    position: 'Computing Engineer CERN / TOC CNCF',
    photo: RicardoRochaPhoto,
  },
  {
    name: 'Max Körbächer',
    position: 'Co-Founder of Liquid Reply / Co-Chair CNCF TAG Environmental Sustainability',
    photo: MaxKorbacherPhoto,
  },
  {
    name: 'Priya Wadhwa',
    position: 'Software Engineer at Chainguard',
    photo: PriyaWadhwaPhoto,
  },
];

const Experts = () => (
  <section className="safe-paddings relativept-28 pb-40">
    <div className="container">
      <h2 className="text-6xl font-bold leading-tight text-primary-1">{TITLE}</h2>
      <ul className="mt-14 grid grid-cols-4 gap-x-8 gap-y-8">
        {ITEMS.map(({ name, position, photo }, index) => (
          <li className="flex w-[240px] flex-col" key={index}>
            <img src={photo} width={240} height={284} loading="lazy" alt={name} />

            <p className="mt-2.5 text-2xl font-bold leading-normal text-primary-1">{name}</p>

            <span className="mt-1.5 text-primary-1">{position}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Experts;
