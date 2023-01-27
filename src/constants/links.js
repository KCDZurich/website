import slugify from 'slugify';

const getAnchor = (str) => slugify(str).toLocaleLowerCase();

export default {
  // Pages and sections
  home: {
    to: '/',
  },
  schedule: {
    to: '',
    id: getAnchor('Schedule'),
  },
  sponsors: {
    to: '',
    id: getAnchor('Sponsors'),
  },
  speakers: {
    to: '',
    id: getAnchor('Speakers'),
  },
  tickets: {
    to: 'https://tickets.kcdzurich.ch/',
    target: '_blank',
  },
  proposal: {
    to: '',
    id: getAnchor('Call for Proposal'),
  },
  workshops: {
    to: '',
    id: getAnchor('Workshops'),
  },
  mission: {
    to: 'https://kcdzurich.ch/missionstatement/',
    target: '_blank',
  },
  privacy: {
    to: '',
    target: '_blank',
  },
  conduct: {
    to: 'https://events.linuxfoundation.org/about/code-of-conduct/',
    target: '_blank',
  },

  // Social
  discord: {
    to: '',
    target: '_blank',
  },
  twitter: {
    to: '',
    target: '_blank',
  },
  github: {
    to: '',
    target: '_blank',
  },
};
