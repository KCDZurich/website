import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
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

const WorkshopCard = ({
  icon,
  iconClassname,
  title,
  description,
  url,
  date,
  time,
  price,
  seats,
  buttonTitle,
}) => {
  const optionsData = {
    date,
    time,
    costs: price,
    seats,
  };

  return (
    <div className="flex h-full max-w-[384px] flex-col border border-primary-1 bg-white p-8 shadow-[20px_20px_0px_0px_rgba(217,217,217,0.3)] outline outline-4 outline-offset-0 outline-white">
      <img className={iconClassname} src={icon} width="auto" height="auto" loading="lazy" alt="" />
      <h4 className="mt-8 text-xl font-bold leading-normal text-primary-1">{title}</h4>
      <p className="mt-1.5 flex-1 text-base leading-normal text-primary-1">{description}</p>
      <div className="mb-12 mt-7 flex flex-col gap-y-2.5">
        {options.map((item, index) => {
          const Icon = icons[item];
          return (
            <div className="flex w-fit items-center justify-center" key={index}>
              <Icon className="h-4 w-4" />
              <span className="ml-2.5 w-fit font-mono-cyber text-[25px] leading-none">
                <span className="font-bold">{item}:</span>
                {optionsData[item]}
              </span>
            </div>
          );
        })}
      </div>
      <Button className="mt-auto" size="sm" theme="primary" to={url}>
        {buttonTitle}
      </Button>
    </div>
  );
};

WorkshopCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconClassname: PropTypes.string,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  seats: PropTypes.number.isRequired,
};

WorkshopCard.defaultProps = {
  iconClassname: null,
};

export default WorkshopCard;
