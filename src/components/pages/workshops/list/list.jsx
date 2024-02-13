import React from 'react';

import WorkshopCard from 'components/pages/workshops/list/card';
import LIST from 'constants/workshops';

const WorkshopList = () => (
  <section className="safe-paddings relative">
    <div className="container-xl bg-blue-light bg-opacity-90">
      <div className="container pb-[72px] pt-24 lg:!px-4 lg:py-14 md:!px-2 md:py-14 xs:!px-0">
        <ul className="mx-auto grid grid-cols-2 justify-items-stretch gap-24 lg:gap-14 sm:grid-cols-1">
          {LIST.map(
            (
              { name, icon, iconClassname, date, time, price, seats, card: { title, description } },
              index
            ) => (
              <li
                className="odd:justify-self-end even:justify-self-start sm:!justify-self-center"
                key={index}
              >
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
                  buttonTitle="More info"
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
