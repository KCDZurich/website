import React from 'react';

const TITLE = 'GitOps with ArgoCD';

const DESCRIPTION = [
  'GitOps is a natural extension of the Infrastructure-as-Code and Continuous Delivery principles with a focus on using Git as the single source of truth for your system. Changes to infrastructure and applications are made declaratively via a Git repository, with an automated process ensuring that the current state of your system reflects the state of the repository.',

  'This one-day training in German or English offers a practical and clearly understandable introduction to GitOps using Argo CD on Kubernetes.',
];

const Hero = () => (
  <section className="safe-paddings relative bg-[#EDC3C7] bg-opacity-10 pt-24 pb-20">
    <div className="absolute -top-[17%] left-[10%] h-[514px] w-[514px] translate-x-1/2 bg-white blur-[100px]" />
    <div className="container text-bg-primary-1 relative mx-auto mt-4 max-w-[1008px] text-left">
      <h1 className="text-6xl font-bold leading-denser">{TITLE}</h1>
      <ul className="mt-8 text-lg leading-normal">
        {DESCRIPTION.map((item, index) => (
          <li key={index}>
            <p className="mt-5">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
