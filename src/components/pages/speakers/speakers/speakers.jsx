/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState, useCallback } from 'react';

import Modal from 'components/shared/modal';

const Speakers = ({ endpoint }) => {
  const [speakers, setSpeakers] = useState([]);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalDataId, setModalDataId] = useState(0);

  const handleModalShow = (id) => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setModalDataId(id);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setModalDataId(0);
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
    <section className="safe-paddings pb-48 pt-9 lg:px-8 lg:pb-44 md:px-5 md:pb-40 sm:pb-24 sm:pt-10 xs:px-0">
      <ul className="mx-auto w-[1072px] max-w-full rounded-[10px] border border-primary-2 shadow-lg">
        {!error && !speakers.length && (
          <li className="flex items-center justify-center px-7 py-6 text-base font-medium text-gray-7">
            Loading...
          </li>
        )}
        {error && !speakers.length && (
          <li className="flex items-center justify-center px-7 py-6 text-base font-medium text-red">
            Loading error
          </li>
        )}

        {!error && speakers.length > 0 && (
          <>
            {speakers.map(({ profilePicture, fullName, tagLine, id }, index) => {
              const isEven = index % 2 === 1;

              return (
                <li
                  className={clsx('flex flex-col items-start justify-start', {
                    'bg-primary-4': isEven,
                  })}
                  key={id}
                >
                  <button
                    className="group flex w-full cursor-pointer flex-row items-center justify-start gap-x-6 px-7 py-6"
                    type="button"
                    onClick={() => handleModalShow(index)}
                  >
                    <img
                      className="h-10 w-10 rounded-full"
                      src={profilePicture}
                      width={40}
                      height={40}
                      alt={fullName}
                      loading="lazy"
                    />
                    <div className="flex flex-col items-start justify-start gap-y-1.5">
                      <h3 className="text-lg font-semibold leading-snug tracking-tight text-primary-1 transition-colors duration-200 group-hover:text-blue-1 md:text-base">
                        {fullName}
                      </h3>
                      <p className="text-sm font-normal leading-none tracking-tighter text-gray-7 transition-colors duration-200 group-hover:text-primary-1">
                        {tagLine}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </>
        )}
      </ul>
      <Modal
        modalData={
          speakers.length > 0
            ? {
                id: String(modalDataId),
                presentation: speakers[modalDataId].bio,
                speakers: [
                  {
                    name: speakers[modalDataId].fullName,
                    photo: speakers[modalDataId].profilePicture,
                  },
                ],
              }
            : {}
        }
        isVisible={isModalVisible}
        isPresentationShow
        onModalHide={handleModalHide}
      />
    </section>
  );
};

export default Speakers;
