import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ModalWrapper from 'components/shared/modal-wrapper';

const Modal = ({ isVisible, modalData, onModalHide }) => {
  const { time = '', title = '', duration = '', description = '', speakers = [] } = modalData;

  return (
    <ModalWrapper isVisible={isVisible} onModalHide={onModalHide}>
      <div className="flex items-center">
        {time && (
          <time className="text-sm font-semibold leading-none tracking-tight text-primary-1 opacity-60">
            {time}
          </time>
        )}
        {duration && (
          <span className="relative ml-8 rounded-full bg-primary-1 bg-opacity-50 px-2 py-1.5 text-[13px] font-semibold leading-none tracking-tighter text-white before:absolute before:-left-4 before:bottom-0 before:top-0 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3">
            {duration}
          </span>
        )}
        {speakers.length > 0 &&
          speakers.map(({ name, photo }, index) => (
            <span
              className={clsx(
                'relative inline-flex items-center gap-x-2 text-left text-lg font-semibold leading-normal text-primary-5 transition-colors duration-200 hover:text-blue-1',
                {
                  'ml-8 before:absolute before:-left-4 before:bottom-0 before:top-0 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3':
                    time || duration,
                }
              )}
              key={index}
            >
              <img
                className="h-7 w-7 rounded-full"
                src={photo}
                width={28}
                alt={name}
                loading="lazy"
              />
              <p className="whitespace-nowrap text-sm font-medium leading-none sm:whitespace-normal">
                {name}
              </p>
            </span>
          ))}
      </div>
      <h2 className="mt-7 text-2xl font-semibold leading-tight tracking-[-0.01em] text-primary-1 sm:text-lg">
        {title}
      </h2>
      <p
        className="mt-3 text-lg leading-normal text-primary-1 sm:text-base"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </ModalWrapper>
  );
};

Modal.propTypes = {
  onModalHide: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  modalData: PropTypes.shape({
    time: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    speakers: PropTypes.array,
  }).isRequired,
};

export default Modal;
