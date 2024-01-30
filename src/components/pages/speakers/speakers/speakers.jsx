/* eslint-disable react/prop-types */
import React, { useEffect, useState, useCallback } from 'react';

import Button from 'components/shared/button';

import iconCross from './images/cross.svg';
import Modal from './modal';

const Speakers = ({ endpoint }) => {
  const [speakers, setSpeakers] = useState([]);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalDataIndex, setModalDataIndex] = useState(null);

  const handleModalShow = (index) => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setModalDataIndex(index);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setModalDataIndex(null);
  };

  const fetchSpeakers = useCallback(async () => {
    try {
      const response = await fetch(endpoint);

      if (response.ok) {
        const data = await response.json();
        setSpeakers(data);
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

  return (
    <section className="safe-paddings mt-20 pb-48 lg:pb-44 md:mt-14 md:pb-40 sm:pb-24">
      <div className="container">
        <ul className="relative before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-vertical-dashed-line after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-vertical-dashed-line">
          <li className="relative flex items-stretch before:absolute before:top-0 before:h-[1px] before:w-full before:bg-horizontal-dashed-line before:bg-auto before:bg-center after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-horizontal-dashed-line after:bg-auto after:bg-center sm:after:hidden">
            <div className="relative w-full flex-1 px-8 py-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-vertical-dashed-line sm:py-0">
              <img
                className="absolute -left-2 -top-2 h-[17px] w-[17px]"
                src={iconCross}
                width={17}
                height={17}
                loading="eager"
                alt=""
              />
              <h3 className="text-base font-semibold leading-normal text-primary-1/60 sm:hidden">
                Speaker
              </h3>
            </div>
            <div className="relative w-full flex-1 px-8 py-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-vertical-dashed-line sm:py-0">
              <img
                className="absolute -left-2 -top-2 h-[17px] w-[17px] sm:hidden"
                src={iconCross}
                width={17}
                height={17}
                loading="eager"
                alt=""
              />
              <h3 className="text-base font-semibold leading-normal text-primary-1/60 sm:hidden">
                Talk
              </h3>
            </div>
            <div className="relative w-full flex-1 px-8 py-4 sm:py-0">
              <img
                className="absolute -left-2 -top-2 h-[17px] w-[17px] sm:hidden"
                src={iconCross}
                width={17}
                height={17}
                loading="eager"
                alt=""
              />
              <img
                className="absolute -right-2 -top-2 h-[17px] w-[17px]"
                src={iconCross}
                width={17}
                height={17}
                loading="eager"
                alt=""
              />
              <h3 className="text-base font-semibold leading-normal text-primary-1/60 sm:hidden">
                Info
              </h3>
            </div>
          </li>
          {!error && !speakers.length && (
            <li className="relative flex items-center justify-center px-7 py-6 text-base font-medium text-gray-7 after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-horizontal-dashed-line after:bg-auto after:bg-center">
              Loading...
            </li>
          )}
          {error && !speakers.length && (
            <li className="relative flex items-center justify-center px-7 py-6 text-base font-medium text-red after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-horizontal-dashed-line after:bg-auto after:bg-center">
              Loading error
            </li>
          )}
          {!error && speakers.length > 0 && (
            <>
              {speakers.map(({ profilePicture, fullName, tagLine, bio, sessions }, index) => {
                const last = speakers.length - 1 === index;
                return (
                  <li
                    className="relative flex items-stretch after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-horizontal-dashed-line after:bg-auto after:bg-center sm:flex-col"
                    key={index}
                  >
                    <div className="relative w-full flex-1 px-8 py-6 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-vertical-dashed-line sm:px-6 sm:after:hidden">
                      {last && (
                        <img
                          className="absolute -bottom-2 -left-2 h-[17px] w-[17px] sm:hidden"
                          src={iconCross}
                          width={17}
                          height={17}
                          loading="lazy"
                          alt=""
                        />
                      )}
                      <div className="flex w-full flex-1 flex-row gap-x-5">
                        <div className="relative h-[52px] w-[52px]">
                          <div className="absolute inset-0 z-10 h-full w-full bg-primary-1 opacity-50 mix-blend-color" />
                          <img
                            className="h-[52px] w-[52px] brightness-110 saturate-0"
                            src={profilePicture}
                            width={52}
                            height={52}
                            alt={fullName}
                            loading={index <= 5 ? 'eager' : 'lazy'}
                          />
                        </div>
                        <div className="flex flex-col gap-y-2">
                          <h3 className="text-lg font-bold uppercase leading-snug text-primary-1 transition-colors duration-200 md:text-base">
                            {fullName}
                          </h3>
                          <p className="text-sm font-normal leading-none text-primary-1/60 transition-colors duration-200">
                            {tagLine}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex w-full flex-1 flex-col px-8 py-6 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-vertical-dashed-line sm:px-6 sm:py-0 sm:after:hidden">
                      {last && (
                        <img
                          className="absolute -bottom-2 -left-2 h-[17px] w-[17px] sm:hidden"
                          src={iconCross}
                          width={17}
                          height={17}
                          loading="lazy"
                          alt=""
                        />
                      )}
                      <p className="text-xl font-bold leading-snug text-primary-1 transition-colors duration-200 md:text-base">
                        {sessions[0].name}
                      </p>
                    </div>
                    <div className="relative flex w-full flex-1 flex-col gap-y-2 px-8 py-6 sm:px-6 sm:pb-4 sm:pt-3">
                      {last && (
                        <>
                          <img
                            className="absolute -bottom-2 -left-2 h-[17px] w-[17px]"
                            src={iconCross}
                            width={17}
                            height={17}
                            loading="lazy"
                            alt=""
                          />
                          <img
                            className="absolute -bottom-2 -right-2 h-[17px] w-[17px]"
                            src={iconCross}
                            width={17}
                            height={17}
                            loading="lazy"
                            alt=""
                          />
                        </>
                      )}
                      <p className="line-clamp-2 text-lg font-normal leading-normal text-primary-1 transition-colors duration-200 sm:line-clamp-3">
                        {bio}
                      </p>
                      <Button
                        className="-ml-2 max-w-max flex-none justify-start !text-xl -tracking-[.05em]"
                        theme="link-red"
                        size="lg"
                        type="button"
                        onClick={() => handleModalShow(index)}
                      >
                        Learn more
                      </Button>
                    </div>
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
      <Modal
        modalData={modalDataIndex !== null ? speakers[modalDataIndex] : {}}
        isVisible={isModalVisible}
        isPresentationShow
        onModalHide={handleModalHide}
      />
    </section>
  );
};

export default Speakers;
