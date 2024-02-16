import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import dorPattern from 'icons/dot-pattern.svg';
import costsIcon from 'icons/workshops/costs.inline.svg';
import dateIcon from 'icons/workshops/date.inline.svg';
import seatsIcon from 'icons/workshops/seats.inline.svg';
import timeIcon from 'icons/workshops/time.inline.svg';

const options = ['date', 'time', 'costs', 'seats'];

const icons = {
  date: dateIcon,
  time: timeIcon,
  costs: costsIcon,
  seats: seatsIcon,
};

const patternPlaces = {
  'left-top': '-top-[33px] -left-[41px]',
  'right-bottom': 'bottom-[70px] -right-[49px]',
};

const WorkshopCard = ({
  icon,
  title,
  description,
  url,
  date,
  time,
  price,
  seats,
  buttonTitle,
  className,
  patternPlace,
}) => {
  const optionsData = {
    date,
    time,
    costs: price,
    seats,
  };

  return (
    <div
      className={clsx(
        'relative z-10 w-[384px] border border-primary-1 shadow-[20px_20px_0px_0px_rgba(161,203,211,0.3)] outline outline-4 outline-offset-0 outline-white',
        className
      )}
    >
      <div className="flex h-full flex-col bg-white p-8">
        <img src={icon.value} width={icon.width} height={icon.height} loading="lazy" alt="" />
        <h2 className="mt-8 text-xl font-bold leading-normal text-primary-1">{title}</h2>
        <p className="mt-1.5 flex-1 text-base leading-normal text-primary-1">{description}</p>
        <div className="mb-12 mt-7 flex flex-col gap-y-2.5">
          {options.map((item, index) => {
            const Icon = icons[item];
            return (
              <div className="flex w-fit items-center justify-center" key={index}>
                <Icon className="h-4 w-4" />
                <span className="ml-2.5 w-fit font-mono-cyber text-[25px] leading-none">
                  <span className="font-bold">{item}: </span>
                  {['date', 'time'].includes(item) ? (
                    <time>{optionsData[item]}</time>
                  ) : (
                    optionsData[item]
                  )}
                </span>
              </div>
            );
          })}
        </div>
        <Button className="mt-auto" size="sm" theme="primary" to={url}>
          {buttonTitle}
        </Button>
      </div>
      {patternPlace && (
        <img
          className={clsx(
            'absolute -z-10 h-[104px] w-[119px] sm:hidden',
            patternPlaces[patternPlace]
          )}
          src={dorPattern}
          width={119}
          height={104}
          loading="lazy"
          alt=""
        />
      )}
    </div>
  );
};

WorkshopCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  seats: PropTypes.number.isRequired,
  className: PropTypes.string,
  patternPlace: PropTypes.string,
};

WorkshopCard.defaultProps = {
  className: null,
  patternPlace: null,
};

export default WorkshopCard;
