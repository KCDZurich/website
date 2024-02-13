import PropTypes from 'prop-types';
import React from 'react';

import WorkshopCard from 'components/pages/workshops/list/card';

// import ChristianHaller from './images/christian-haller-photo.jpg';
// import ChristianSchlatter from './images/christian-schlatter-photo.jpg';
// import DanielStrohecker from './images/daniel-strohecker-photo.jpg';
// import DavidSchneider from './images/david-schneider-photo.jpg';
// import GabrielGraf from './images/gabriel-graf-photo.jpg';
// import LorenzBischof from './images/lorenz-bischof-photo.jpg';
// import RaffaelHertle from './images/raffael-hertle-photo.jpg';
// import SebastianPlattner from './images/sebastian-plattner-photo.jpg';

const Information = ({ data }) => {
  const { name, icon, iconClassname, date, time, price, seats, card } = data;

  return (
    <section className="safe-paddings pb-48 pt-20">
      <div className="container grid grid-cols-12 md:flex md:flex-col">
        <div className="content col-start-2 col-end-7 xl:col-start-1 lg:col-end-8">
          <ul className="ml-3">
            {/* {Content.filter((item) => item.name === itemName).map(
              ({ description, features, requirements, audience, conditions, trainers }, index) => (
                <li className="text-primary-1" key={index}>
                  <div className="flex items-center justify-center w-fit">
                    <ContentIcon className="mr-3 h-[23px] w-4" />
                    <span className="text-2xl font-bold leading-normal text-primary-1">Content</span>
                  </div>
                  <p className="mt-6 text-lg leading-normal text-primary-1">{description}</p>
  
                  <ul className="pb-4 pl-4 mt-5 space-y-2 border-b border-gray-10">
                    {features.map((item, index) => (
                      <li
                        className="relative before:absolute before:-left-4 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-blue-1 before:content-['']"
                        key={index}
                      >
                        <p
                          className="text-lg leading-normal"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </li>
                    ))}
                  </ul>
  
                  <div className="mt-3.5 flex w-fit items-center justify-center">
                    <ListIcon className="mr-3 h-[23px] w-[19px]" />
                    <span className="text-2xl font-bold leading-normal text-primary-1">
                      Requirements
                    </span>
                  </div>
                  <p className="pb-3 mt-4 text-lg leading-normal border-b border-gray-10">
                    {requirements}
                  </p>
  
                  <div className="mt-3.5 flex w-fit items-center justify-center">
                    <Audience className="mr-3 h-[23px] w-[22px]" />
                    <span className="text-2xl font-bold leading-normal text-primary-1">
                      Target audience
                    </span>
                  </div>
                  <p className="pb-3 mt-5 text-lg leading-normal border-b border-gray-10">
                    {audience}
                  </p>
  
                  <div className="mt-3.5 flex w-fit items-center justify-center">
                    <Conditions className="mr-3 h-[23px] w-[19px]" />
                    <span className="text-2xl font-bold leading-normal text-primary-1">
                      Conditions
                    </span>
                  </div>
                  <div className="text-lg leading-normal">
                    <p className="mt-5">{conditions.description}</p>
                    <p className="mt-1">
                      <span className="font-bold">Seats: </span>
                      {conditions.seats}
                    </p>
                    <p>
                      <span className="font-bold">Costs: </span>
                      {conditions.costs}
                    </p>
                    <p className="pb-3 border-b border-gray-10">{conditions.description1}</p>
                  </div>
  
                  <div className="mt-3.5 flex w-fit items-center justify-center">
                    <Trainer className="mr-3 h-[22px] w-[18px]" />
                    <span className="text-2xl font-bold leading-normal text-primary-1">Trainer</span>
                  </div>
                  <ul className="flex mt-5 space-x-8 sm:flex-wrap sm:space-x-0 sm:space-y-4">
                    {trainers.map(({ name, photo, position }, index) => (
                      <li
                        className="mt-0 leading-normal text-primary-1 sm:w-auto sm:max-w-[200px] sm:first:mb-6 sm:first:mr-8"
                        key={index}
                      >
                        <img
                          className="h-[237px] w-[176px]"
                          src={photo}
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt={name}
                        />
                        <p className="mt-2.5 text-lg font-bold">{name}</p>
                        <span className="mt-1.5 block">{position}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            )} */}
          </ul>
        </div>

        <div className="col-span-4 col-start-8 ml-6 xl:col-end-13 md:row-start-2 md:mt-8 md:max-w-[384px] md:self-center">
          <WorkshopCard
            title={card.title}
            description={card.description}
            url={`/workshop-${name}`}
            icon={icon}
            iconClassname={iconClassname}
            date={date}
            time={time}
            price={price}
            seats={seats}
            buttonTitle="Get your ticket"
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
