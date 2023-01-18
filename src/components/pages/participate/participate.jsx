import React from 'react';

const TITLE = 'Participate';
const DESCRIPTION1 =
  "We are excited to announce that we will soon be opening the call for papers. If you are an expert or newcomer in the cloud native computing world and would like to share your knowledge and experience with the community, we encourage you to submit a proposal. Our committee is looking for diverse topics and speakers, so don't hesitate to submit your ideas. We can't wait to see what the community offers, and we look forward to receiving your submissions.";

const DESCRIPTION2 =
  'Stay tuned for more information on the call for papers, and we hope to see you at the event!';

const Participate = () => (
  <section className="safe-paddings bg-[#EDC3C7] bg-opacity-10 py-20">
    <div className="container-md">
      <h2 className="text-center text-6xl font-bold leading-tight text-primary-1">{TITLE}</h2>
      <div className="mt-8 text-2xl leading-normal">
        <p>{DESCRIPTION1}</p>
        <p className="mt-7 font-bold">{DESCRIPTION2}</p>
      </div>
    </div>
  </section>
);

export default Participate;
