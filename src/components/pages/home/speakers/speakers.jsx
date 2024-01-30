/* eslint-disable react/prop-types */
import React, { useEffect, useState, useCallback } from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';

const TITLE = 'Speakers';
const DESCRIPTION =
  'Explore cloud native excellence at <b>KCDs 2024</b>! Join expert speakers for talks, networking, and a vibrant celebration of innovation.';
const BTN_TITLE = 'Learn more';

const Speakers = ({ endpoint }) => {
  const [speakers, setSpeakers] = useState([]);
  const [error, setError] = useState(null);

  const fetchSpeakers = useCallback(async () => {
    try {
      const response = await fetch(endpoint);

      if (response.ok) {
        const data = await response.json();
        setSpeakers([data[0], data[0], data[0], data[0], data[0], data[0], data[0], data[0]]);
        // setSpeakers(data);
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      setError(error.toString());
    }
  }, [endpoint]);

  useEffect(() => {
    fetchSpeakers();
  }, [fetchSpeakers]);

  // eslint-disable-next-line no-console
  console.log('speakers: ', speakers);

  // eslint-disable-next-line no-console
  console.log('error: ', error);

  return (
    <section className="safe-paddings relative pt-[120px] lg:pt-16 md:pt-10 sm:pt-8">
      <div className="container flex flex-col items-center">
        <h2
          className="font-sans-cyber text-[52px] font-bold lowercase leading-tight lg:text-[40px] md:text-[32px]"
          id={LINKS.speakers.id}
        >
          {TITLE}
        </h2>
        <p
          className="mt-5 max-w-[644px] text-center text-xl leading-normal md:text-lg"
          dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
        />
        <ul className="mt-14 grid w-full grid-cols-4 gap-8 lg:gap-6 md:grid-cols-3 md:justify-items-center md:gap-4 xs:flex xs:flex-wrap xs:justify-evenly [@media(max-width:620px)]:grid-cols-2">
          {speakers.map(({ profilePicture, fullName, tagLine }, index) => (
            <li
              className="flex w-[240px] flex-col items-center lg:w-52 md:w-48 sm:w-auto sm:max-w-[200px]"
              key={index}
            >
              <div className="relative h-[280px] w-[240px] overflow-hidden">
                <div className="absolute inset-0 z-10 h-full w-full bg-primary-1 opacity-50 mix-blend-color" />
                <img
                  className="h-full min-w-fit brightness-110 saturate-0"
                  src={profilePicture}
                  width={240}
                  height={280}
                  loading="lazy"
                  alt={fullName}
                />
              </div>
              <h3 className="mt-5 text-lg font-bold uppercase leading-tight text-primary-1">
                {fullName}
              </h3>
              <p className="mt-2 text-sm leading-tight text-primary-1/60">{tagLine}</p>
            </li>
          ))}
        </ul>
        <Button
          className="mt-12 min-w-[170px] flex-none md:mt-8 xs:mt-8"
          to="/speakers"
          theme="primary"
          size="sm"
          target="_blank"
        >
          {BTN_TITLE}
        </Button>
      </div>
    </section>
  );
};

export default Speakers;
