import slugify from 'slugify';

const getAnchor = (str) => slugify(str).toLocaleLowerCase();

export default {
  // Pages and sections
  home: {
    to: '/',
  },
  schedule: {
    to: '/schedule',
    id: getAnchor('Schedule'),
    homeTo: '/schedule',
  },
  sponsors: {
    to: `/#${getAnchor('Sponsors')}`,
    id: getAnchor('Sponsors'),
    homeTo: null,
  },
  speakers: {
    to: `/#${getAnchor('Speakers')}`,
    id: getAnchor('Speakers'),
    homeTo: null,
  },
  workshops: {
    to: '/workshops',
    id: getAnchor('Workshops'),
    homeTo: '/workshops',
  },
  archive: {
    to: '/archive',
    homeTo: '/archive',
  },
  proposal: {
    to: `/#${getAnchor('Call for Proposal')}`,
    id: getAnchor('Call for Proposal'),
    homeTo: null,
  },
  team: {
    to: '/team',
  },
  tickets: {
    to: 'https://www.eventbrite.com/e/725590579957',
    target: '_blank',
  },
  cfp: {
    to: 'https://forms.gle/JyrTeEJuk2PVAT7d9',
    target: '_blank',
  },
  mission: {
    to: '/mission-statement',
    target: '_blank',
  },
  privacy: {
    to: '/data-privacy',
    target: '_blank',
  },
  conduct: {
    to: 'https://events.linuxfoundation.org/about/code-of-conduct/',
    target: '_blank',
  },
  podcast: {
    to: '/podcast',
    homeTo: '/podcast',
  },

  // Social-links
  linkedin: {
    to: 'https://www.linkedin.com/company/cloudnativeams/',
    target: '_blank',
  },
  twitter: {
    to: 'https://twitter.com/cloudnativeams',
    target: '_blank',
  },
  googlemaps: {
    to: 'https://maps.app.goo.gl/wfLb1JAmjq53pLZH6',
    target: '_blank',
  },
  youtube: {
    to: 'https://www.youtube.com/@cncf',
    target: '_blank',
  },
};
