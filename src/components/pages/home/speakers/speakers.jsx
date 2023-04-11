import React, { useState } from 'react';

import Modal from 'components/shared/modal';
import LINKS from 'constants/links';

import AnnieTalvastoPhoto from './images/annie-talvasto-photo.jpg';
import CherylHungPhoto from './images/cheryl-hung-photo.jpg';
import JuliusVolzPhoto from './images/julius-volz-photo.jpg';
import KatieGamanjiPhoto from './images/katie-gamanji-photo.jpg';
import LisaFalcoPhoto from './images/lisa-falco-photo.jpg';
import LizRicePhoto from './images/liz-rice-photo.jpg';
import MaxKorbacherPhoto from './images/max-korbacher-photo.jpg';
import PriyaWadhwaPhoto from './images/priya-wadhwa-photo.jpg';
import RicardoRochaPhoto from './images/ricardo-rocha-photo.jpg';
import SebastianKisterPhoto from './images/sebastian-kister-photo.jpeg';
import ThomasGrafPhoto from './images/thomas-graf-photo.jpg';

const TITLE = 'Speakers';

const ITEMS = [
  {
    name: 'Thomas Graf',
    position: 'CTO & CO-Founder <br/> Isovalent',
    content:
      'Thomas is the Co-Founder and CTO of Isovalent, long-time eBPF developer, and one of the creators of the Cilium project. Before working on Cilium, and eBPF, Thomas was a Linux kernel developer for 15+ years focusing on networking, security, and eBPF. Thomas currently serves as the Co-Chair of the eBPF Foundation. When not working on open source software, Thomas is enjoying the Swiss mountains on bike and foot with his family.',
    photo: ThomasGrafPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
  },
  {
    name: 'Liz Rice',
    position: 'Chief Open Source Office <br/> Isovalent',
    content:
      "Liz Rice is Chief Open Source Officer with eBPF specialists Isovalent, creators of the Cilium cloud native networking, security and observability project. She was Chair of the CNCF's Technical Oversight Committee in 2019-2022, and Co-Chair of KubeCon + CloudNativeCon in 2018. She is also the author of Container Security, published by O'Reilly. She has a wealth of software development, team, and product management experience from working on network protocols and distributed systems, and in digital technology sectors such as VOD, music, and VoIP. When not writing code, or talking about it, Liz loves riding bikes in places with better weather than her native London, competing in virtual races on Zwift, and making music under the pseudonym Insider Nine.",
    photo: LizRicePhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
  },
  {
    name: 'Katie Gamanji',
    position: 'Senior Field Engineer at Apple <br/> TOC at CNCF',
    content:
      'Katie is a cloud native leader, practitioner, and contributor, currently in a Senior Kubernetes Field Engineer role at Apple and a TOC for CNCF (Cloud Native Computing Foundation).  As a cloud platform engineer, Katie has built the infrastructure for Conde Nast and American Express, gravitating towards cloud-native technologies, principles, and Kubernetes as the focal point. At CNCF (Cloud Native Computing Foundation), she was a Technical Oversight Committee member and led the CNCF End User Community.  At present, Katie advises the Keptn startup and is part of the OpenUK C-suite.',
    photo: KatieGamanjiPhoto,
    twitterUrl: 'https://twitter.com/k_gamanji',
    linkedInUrl: 'https://www.linkedin.com/in/katie-gamanji/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
  },
  {
    name: 'Julius Volz',
    position: 'Co-Founder of prometheus.io <br/> Founder at PromLabs',
    content:
      'Julius co-founded the Prometheus monitoring system and originally led the project to success at SoundCloud and beyond. He now focuses on growing the Prometheus community, started PromCon, the first conference around Prometheus, and helps companies use and adapt Prometheus through his company PromLabs. Before creating Prometheus at SoundCloud, Julius was a Site Reliability Engineer at Google.',
    photo: JuliusVolzPhoto,
    twitterUrl: 'https://twitter.com/juliusvolz',
    linkedInUrl: 'https://www.linkedin.com/in/julius-volz/',
    githubUrl: '',
    communityUrl: 'https://community.cncf.io/u/mvhzxh/',
    instagramUrl: '',
    websiteUrl: 'https://juliusv.com/',
  },
  {
    name: 'Annie Talvasto',
    position: 'CNCF Ambassador <br/> Azure MVP',
    content:
      'Annie Talvasto is an international technology speaker, CNCF Ambassador, Azure MVP and specialist in Kubernetes & open source. Annie hosts & produces the Cloud Gossip podcast and has been a co-organizer of Kubernetes & CNCF Finland meetup since 2017. She has worked at various tech companies from cloud start-ups to enterprises. Annie has spoken at tech conferences on multiple continents, including KubeCon + CloudNativeCon, Microsoft Build & Ignite, NDC, KCDC, Global Azure, Future Tech and more. During her career she has spoken to more than 30,000 developers at User Groups meetings & Conferences.',
    photo: AnnieTalvastoPhoto,
    twitterUrl: 'https://twitter.com/AnnieTalvasto',
    linkedInUrl: 'https://www.linkedin.com/in/talvasto/',
    githubUrl: '',
    communityUrl: 'https://community.cncf.io/u/mwwdtj/#/about',
    instagramUrl: '',
    websiteUrl: '',
  },
  {
    name: 'Ricardo Rocha',
    position: 'Computing Engineer CERN <br/> TOC CNCF',
    content:
      'Ricardo is a Computing Engineer in the CERN cloud team focusing on containerized deployments, networking and more recently machine learning platforms. He has led for several years the internal effort to transition services and workloads to use cloud native technologies, as well as dissemination and training efforts. Ricardo got CERN to join the CNCF and is currently in the TOC and a lead of the CNCF Research User Group. Prior to this work Ricardo helped develop the grid computing infrastructure serving the Large Hadron Collider (LHC).',
    photo: RicardoRochaPhoto,
    twitterUrl: 'https://twitter.com/ahcorporto',
    linkedInUrl: 'https://www.linkedin.com/in/ricardo-rocha-739aa718/',
    githubUrl: 'https://github.com/rochaporto',
    communityUrl: 'https://community.cncf.io/u/m46hr5/#/about',
    instagramUrl: '',
    websiteUrl: '',
  },
  {
    name: 'Max Körbächer',
    position: 'Co-Founder of Liquid Reply <br/> Co-Chair CNCF TAG Environmental Sustainability',
    content:
      'Max is Co-Founder and Cloud Native Advocate at Liquid Reply. He is Co-Chair of the CNCF Environmental Sustainability Technical Advisory Group and served 3 years at the Kubernetes release team. Besides, he is part of different OSS Advisory Boards. His focus is on designing and building cloud-native solutions on/with Kubernetes and platform engineering to simplify the current challenges of complex systems.',
    photo: MaxKorbacherPhoto,
    twitterUrl: 'https://twitter.com/mkoerbi',
    linkedInUrl: 'https://www.linkedin.com/in/maxkoerbaecher/',
    githubUrl: '',
    communityUrl: 'https://community.cncf.io/u/m76gha/#/about',
    instagramUrl: '',
    websiteUrl: '',
  },
  {
    name: 'Priya Wadhwa',
    position: 'Software Engineer <br/> Chainguard',
    content:
      'Priya Wadhwa is an engineering manager working on open source security at Chainguard. She serves on the Sigstore Technical Steering Committee and is a maintainer on many Sigstore projects and Tekton Chains. Priya is passionate about making security easy and available for everyone.',
    photo: PriyaWadhwaPhoto,
    twitterUrl: 'https://twitter.com/priyawadhwa16',
    linkedInUrl: '',
    githubUrl: 'https://github.com/priyawadhwa',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
  },
  {
    name: 'Cheryl Hung',
    position: 'Sr Director in Infrastructure <br/> Arm',
    content:
      'Cheryl brings engineers together to build the future of infrastructure, especially cloud native and open source.\n' +
      '\n' +
      'As Senior Director at Arm, Cheryl leads strategy across the cloud and infrastructure ecosystem to drive adoption of Arm. She founded Cloud Native London and runs monthly events for 7000 architects, SREs and DevOps engineers.\n' +
      '\n' +
      'Previously Cheryl was VP Ecosystem at the Cloud Native Computing Foundation / Linux Foundation, bringing Spotify, Apple and Airbnb into the End User Community. She was a C++ engineer on Google Maps and and engineering manager at Apple, and holds a Masters Computer Science from the University of Cambridge.',
    photo: CherylHungPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
  },
  {
    name: 'Lisa Falco',
    position: 'Consultant in Medical & Responsible AI <br/> Zühlke Group',
    content:
      'Lisa is a Lead Consultant in AI & Data with 15 years of industry experience in medical applications of Data Science and in bringing medical software products to market. She combines solid expertise in Machine Learning and AI with a passion for developing user-centric products, particularly in healthcare and medical technology. Among others she was previously Director of Data Science at Ava Women and Head of Product at Pipra. She has a PhD in Biomedical Imaging from EPFL, Switzerland.',
    photo: LisaFalcoPhoto,
    twitterUrl: 'https://twitter.com/lisafalco',
    linkedInUrl: 'https://www.linkedin.com/in/lisa-falco-jon',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: 'https://www.instagram.com/lisafalco_dsw/',
    websiteUrl: 'lisafalco.com',
  },
  {
    name: 'Sebastian Kister',
    position: 'Lead Kubernetes <br/> Competence Center Audi',
    content:
      'Sebastian is an awarded global thought leader for enterprise transformation and counts world wide as transformation evangelist. He is leading a competence center in IT infrastructure and aligning all brands in the VW Group with the mission to once again boldly go where no one has gone before. As an agile digital native with countless successfully implemented projects in 7 industries he can be described as well as a startup-professional who helped to shape products from genesis to market leader with bleeding-edge technology. Always striving to innovate and question the status quo, he helps to break dogmas, implement a new culture, and never settles while pursuing constant progress.',
    photo: SebastianKisterPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/sebastiankister/',
    githubUrl: '',
    communityUrl: 'https://community.cncf.io/u/mrku63/#/about',
    instagramUrl: '',
    websiteUrl: '',
  },
];

const Speakers = () => {
  // State used to control the modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalDataId, setModalDataId] = useState(0);

  const handleModalShow = (id) => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setModalDataId(id);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setModalDataId(0);
  };

  return (
    <section className="safe-paddings relative bg-white pb-40 lg:pb-32 md:py-24 sm:py-16">
      <div className="container flex flex-col sm:items-center">
        <h2
          className="text-6xl font-bold leading-tight text-primary-1 md:text-center"
          id={LINKS.speakers.id}
        >
          {TITLE}
        </h2>
        <ul className="mt-14 grid w-full grid-cols-4 gap-8 lg:gap-6 md:grid-cols-3 md:justify-items-center md:gap-4 xs:flex xs:flex-wrap xs:justify-evenly [@media(max-width:620px)]:grid-cols-2">
          {ITEMS.map(({ name, position, photo }, index) => (
            <li
              className="group flex w-[240px] cursor-pointer flex-col lg:w-52 md:w-48 sm:w-auto sm:max-w-[200px]"
              key={index}
              onClick={() => handleModalShow(index)}
            >
              <img
                className="w-full"
                src={photo}
                width={240}
                height={284}
                loading="lazy"
                alt={name}
              />
              <p className="mt-2.5 text-2xl font-bold leading-normal text-primary-1 transition-colors duration-200 group-hover:text-blue-1 sm:text-left">
                {name}
              </p>
              <span
                className="mt-1.5 text-primary-1"
                dangerouslySetInnerHTML={{ __html: position }}
              />
            </li>
          ))}
        </ul>
        <Modal
          modalData={ITEMS[modalDataId]}
          isVisible={isModalVisible}
          onModalHide={handleModalHide}
        />
        <p className="mt-14 text-center text-[22px] font-semibold leading-normal text-primary-1">
          More to come...
        </p>
      </div>
    </section>
  );
};

export default Speakers;
