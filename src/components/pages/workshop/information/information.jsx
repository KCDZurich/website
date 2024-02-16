import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import WorkshopCard from 'components/pages/workshops/list/card';
import separator from 'icons/sponsors/separator.svg';

const blocks = ['content', 'requirements', 'audience', 'conditions', 'trainers'];
const titles = {
  content: 'Content',
  requirements: 'Requirements',
  audience: 'Target audience',
  conditions: 'Conditions',
  trainers: 'trainer',
};

const Information = ({ data }) => {
  const { name, icon, date, time, price, seats, card, page } = data;
  const content = Object.keys(page).filter((key) => blocks.includes(key));

  return (
    <section className="safe-paddings pb-[152px] pt-[72px] lg:pt-16 md:pb-24 md:pt-14 sm:pb-16">
      <div className="container mt-[18px] grid grid-cols-12 gap-x-8 gap-y-8 md:flex md:flex-col md:gap-y-12">
        <ul className="col-span-7 flex flex-col gap-y-[28px]">
          {content.map((key, index) => (
            <li className="grid-gap grid grid-cols-7 md:grid-cols-12" key={index}>
              <div className="relative col-span-2 flex items-start justify-end before:absolute before:bottom-0 before:right-0 before:h-[calc(100%-27px)] before:w-[2px] before:bg-[#ADCFD3] md:col-span-3 sm:col-span-12 sm:justify-start sm:before:hidden">
                <div className="-mt-[18px] flex h-9 items-center gap-2.5 sm:mt-0">
                  <span className="text-right font-mono-cyber text-2xl font-bold uppercase leading-[1.125] tracking-[-0.03em]">
                    {titles[key]}
                  </span>
                  <img
                    className="rotate-180 md:max-w-[20px] sm:order-first sm:max-w-[23px] sm:rotate-0"
                    src={separator}
                    width={28}
                    height={19}
                    alt=""
                  />
                </div>
              </div>
              <div
                className={clsx(
                  'dash-border col-span-5 flex flex-col gap-y-3.5 pt-7 [border-image-width:5px_0_0_0] md:col-span-9 sm:col-span-12',
                  index < content.length - 1 ? 'pb-4' : 'pb-2'
                )}
              >
                {typeof page[key] === 'string' && (
                  <p className="text-lg leading-normal text-primary-1">{page[key]}</p>
                )}
                {key === 'content' && (
                  <>
                    <p className="text-lg leading-normal text-primary-1">{page[key].description}</p>
                    <div className="with-square-bullet flex gap-x-14 gap-y-3.5 xs:flex-col">
                      {page[key].features.map((item, index) => (
                        <ul className="flex w-[202px] list-none flex-col gap-y-3.5" key={index}>
                          {item.map((item, i) => (
                            <li className="text-base leading-normal text-primary-1" key={i}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </>
                )}
                {key === 'conditions' &&
                  page[key].map((item, index) => (
                    <p className="text-lg leading-normal text-primary-1" key={index}>
                      {item}
                    </p>
                  ))}
                {key === 'trainers' && (
                  <ul className="flex flex-row gap-10 sm:flex-col">
                    {page[key].map(({ name, photo, position }, index) => (
                      <li key={index}>
                        <figure className="flex flex-col">
                          <img
                            className="h-auto w-[192px]"
                            src={photo}
                            width={192}
                            height={259}
                            loading="lazy"
                            alt={name}
                          />
                          <figcaption className="mt-5">
                            <span className="text-base font-bold uppercase leading-normal text-primary-1">
                              {name}
                            </span>
                            <span className="mt-1.5 block text-sm leading-normal text-primary-1/60">
                              {position}
                            </span>
                          </figcaption>
                        </figure>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="col-span-4 col-end-13 -ml-16 -mt-[18px] flex justify-center xl:-ml-6 lg:-ml-4 md:ml-0 md:mt-0">
          <WorkshopCard
            title={card.title}
            description={card.description}
            url={`/workshop-${name}`}
            icon={icon}
            date={date}
            time={time}
            price={price}
            seats={seats}
            buttonTitle="Get your ticket"
            className="self-start"
          />
        </div>
      </div>
    </section>
  );
};

Information.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Information;
