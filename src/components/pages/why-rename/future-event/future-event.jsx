import React from 'react';

import bg from './images/bg.svg';
import calendar from './images/calendar.svg';
import event from './images/event.svg';
import pin from './images/pin.svg';

const eventInfo = [
  {
    title: 'event:',
    value: 'Cloud Native Zürich 2025',
    icon: event,
  },
  {
    title: 'date:',
    value: <time dateTime="2025-06-12">Thursday, 12th of June 2025</time>,
    icon: calendar,
  },
  {
    title: 'location:',
    value: <address className="not-italic">Zürich, Switzerland</address>,
    icon: pin,
  },
];

const FutureEvent = () => (
  <section className="future-event safe-paddings my-24 lg:my-16 md:my-10">
    <div className="container-md relative text-center sm:px-0">
      <div className="relative z-10 py-[120px] md:border-[5px] md:border-b-[#FCC5B1] md:border-l-[#FEEBE4] md:border-r-[#FCC5B1] md:border-t-[#FEEBE4] md:bg-[#FFF4F0] md:py-16 sm:border-none sm:px-4 sm:py-8">
        <h2 className="font-sans-cyber text-[52px] font-bold lowercase leading-tight lg:text-[40px] md:text-[36px] xs:text-[32px]">
          Save the Date!
        </h2>
        <p className="mx-auto mt-5 max-w-[597px] text-2xl leading-normal lg:max-w-[490px] lg:text-xl md:max-w-[440px] md:text-lg sm:mt-2.5">
          Stay tuned for more updates, and we hope to see you at Cloud Native Zürich 2025
        </p>
        <dl className="mt-5 flex flex-col gap-y-2.5 font-mono-cyber text-[25px] leading-none sm:mt-2.5 sm:gap-1 sm:text-lg">
          {eventInfo.map(({ title, value, icon }) => (
            <div
              className="mx-auto flex w-[360px] -translate-x-3 items-center gap-x-1 md:translate-x-0 sm:w-[280px]"
              key={title}
            >
              <img className="mr-1.5" src={icon} alt="" width={16} height={25} />
              <dt className="font-bold">{title}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <img
        className="absolute left-1/2 top-0 h-auto w-full max-w-[1008px] -translate-x-1/2 md:hidden"
        src={bg}
        alt=""
      />
    </div>
  </section>
);

export default FutureEvent;
