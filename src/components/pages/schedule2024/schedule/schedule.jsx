/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';
import useSessionize from 'hooks/use-sessionize';

const Schedule = ({ location }) => {
  const { sessions, acceptedSpeakers, error } = useSessionize({
    getSessions: true,
    getAcceptedSpeakers: true,
  });
  const [sessionList, setSessionList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalDataId, setModalDataId] = useState(0);

  const getStartTime = (value) => {
    const date = new Date(value);
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour}:${String(minute).length === 1 ? `0${minute}` : minute}`;
  };

  const getDiffTime = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diff = new Date(endDate - startDate);
    const minute = diff.getMinutes();
    return `${String(minute).length === 1 ? `0${minute}` : minute} min`;
  };

  const handleModalShow = (id) => {
    const index = sessions.findIndex((item) => item.id === id);
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setModalDataId(index);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setModalDataId(0);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { state = {} } = location;

      if (state?.modalId) {
        handleModalShow(Number(state.modalId));
      } else {
        handleModalHide();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    if (sessions.length && acceptedSpeakers.length) {
      const result = [];

      sessions.forEach((session) => {
        const { startsAt, endsAt, speakers } = session;
        const sessionTime = getStartTime(startsAt);
        const index = result.findIndex(({ time }) => time === sessionTime);
        const sessionResult = {
          ...session,
          time: sessionTime,
          duration: getDiffTime(startsAt, endsAt),
          speakers: acceptedSpeakers.filter(({ id }) => speakers.some((item) => item.id === id)),
        };

        if (index >= 0) {
          result[index].events.push(sessionResult);
          return;
        }

        result.push({ time: sessionTime, events: [sessionResult] });
      });

      setSessionList(result);
    }
  }, [sessions, acceptedSpeakers]);

  return (
    <section className="safe-paddings pb-48 pt-9 lg:px-8 lg:pb-44 md:px-5 md:pb-40 sm:pb-24 sm:pt-10 xs:px-0">
      <ul className="mx-auto w-[1072px] max-w-full rounded-[10px] border border-primary-2 shadow-lg">
        {!error && !sessions.length && (
          <li className="relative flex items-center justify-center px-7 py-6 text-base font-medium text-gray-7 sm:p-4">
            Loading...
          </li>
        )}
        {error && !sessions.length && (
          <li className="relative flex items-center justify-center px-7 py-6 text-base font-medium text-red sm:p-4">
            Loading error
          </li>
        )}
        {!error && sessions.length > 0 && (
          <>
            {sessionList.map(({ time, events }, index) => {
              const isEven = index % 2 === 1;

              return (
                <li
                  className={clsx(
                    'grid grid-cols-[114px_1fr] divide-x divide-primary-2 md:grid-cols-[106px_1fr] sm:grid-cols-1 sm:divide-x-0',
                    { 'bg-primary-4': isEven }
                  )}
                  key={index}
                >
                  <div className="flex items-center justify-center sm:justify-start sm:px-5 sm:pt-5">
                    <time className="mb-auto mt-7 text-[15px] font-semibold leading-none tracking-tight text-primary-1 opacity-60 md:mt-5 md:text-sm sm:my-0">
                      {time}
                    </time>
                  </div>
                  <div className="flex divide-x divide-primary-2 sm:flex-col sm:divide-x-0 sm:divide-y">
                    {events.map(({ id, title, duration, speakers }, index) => (
                      <div className="flex-1" key={index}>
                        <div className="flex flex-col gap-y-3 px-7 py-6 md:py-4 sm:gap-y-2 sm:px-5 sm:pb-4">
                          <h3 className="inline-flex items-center gap-x-3">
                            {id ? (
                              <Button
                                className="!whitespace-normal !text-left text-lg !font-semibold !leading-snug tracking-tight text-primary-1 transition-colors duration-200 hover:text-blue-1 md:text-base"
                                theme="link-primary"
                                onClick={() => handleModalShow(id)}
                              >
                                {title}
                              </Button>
                            ) : (
                              <span className="text-lg font-semibold leading-snug tracking-tight text-primary-1 md:text-base">
                                {title}
                              </span>
                            )}
                          </h3>
                          <div className="mt-auto flex items-center gap-x-8 sm:gap-x-7">
                            <span className="rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 md:text-xs">
                              {duration}
                            </span>
                            {speakers && speakers.length > 0 && (
                              <ul className="relative inline-flex gap-x-5 before:absolute before:-left-4 before:bottom-0 before:top-0 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 sm:gap-x-4">
                                {speakers.map(({ fullName, profilePicture }, index) => (
                                  <li className="" key={index}>
                                    <figure className="flex items-center gap-x-2">
                                      <img
                                        className="h-7 w-7 rounded-full"
                                        src={profilePicture}
                                        width={28}
                                        height={28}
                                        alt={fullName}
                                        loading="lazy"
                                      />
                                      <figcaption className="text-sm font-medium leading-none text-primary-5 md:text-[13px]">
                                        {fullName}
                                      </figcaption>
                                    </figure>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
              );
            })}
          </>
        )}
      </ul>
      {!error && sessions.length > 0 && (
        <Modal
          modalData={{
            ...sessions[modalDataId],
            presentation: sessions[modalDataId].description,
            time: getStartTime(sessions[modalDataId].startsAt),
            duration: getDiffTime(sessions[modalDataId].startsAt, sessions[modalDataId].endsAt),
            speakers: acceptedSpeakers
              .filter(({ id }) => sessions[modalDataId].speakers.some((item) => item.id === id))
              .map(({ fullName, profilePicture }) => ({ name: fullName, photo: profilePicture })),
          }}
          isVisible={isModalVisible}
          isPresentationShow
          onModalHide={handleModalHide}
        />
      )}
    </section>
  );
};

export default Schedule;
