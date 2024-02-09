import React from 'react';

import WorkshopCard from 'components/pages/workshops/list/card';
import LIST from 'constants/workshops';

const WorkshopList = () => (
  <section className="safe-paddings relative">
    <div className="container-xl bg-blue-light bg-opacity-90">
      <div className="container pb-[72px] pt-24 lg:py-14 md:py-14">
        <ul className="mx-auto grid w-[800px] grid-cols-2 gap-8 sm:flex sm:w-auto sm:flex-wrap sm:justify-center">
          {LIST.map(
            (
              { name, icon, iconClassname, date, time, price, seats, card: { title, description } },
              index
            ) => (
              <li key={index}>
                <WorkshopCard
                  title={title}
                  description={description}
                  url={`/workshop-${name}`}
                  icon={icon}
                  iconClassname={iconClassname}
                  date={date}
                  time={time}
                  price={price}
                  seats={seats}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
    <div className="container-xl h-[115px] bg-workshop-pattern bg-left-top bg-repeat" />
  </section>
);

export default WorkshopList;
