import slugify from 'slugify';

const getAnchor = (str) => slugify(str).toLocaleLowerCase();

export default {
  // Pages
  home: {
    to: '/',
  },
  team: {
    title: 'Team',
    to: '/team',
  },
  podcast: {
    title: 'Podcast',
    to: '/podcast',
  },
  archive2023: {
    title: 'Archive 2023',
    to: '/archive',
  },
  archive2024: {
    title: 'Archive 2024',
    to: '/archive-2024',
  },
  schedule2023: {
    title: 'Schedule',
    to: '/schedule2023',
  },
  schedule2024: {
    title: 'Schedule',
    to: '/schedule',
  },
  rejects2024: {
    title: 'Rejects',
    to: '/rejects2024',
  },
  freebee: {
    title: 'Freebee',
    to: '/freebee',
  },
  speakers: {
    title: 'Speakers',
    to: '/speakers',
  },
  workshops: {
    title: 'Workshops',
    to: '/workshops',
  },
  workshopArgo: {
    title: 'GitOps with ArgoCD',
    to: '/workshop-argo',
  },
  workshopCilium: {
    title: 'Cilium Basics',
    to: '/workshop-cilium',
  },
  workshopGo: {
    title: 'Go Basics',
    to: '/workshop-go',
  },
  workshopKubernetes: {
    title: 'Kubernetes Basics',
    to: '/workshop-kubernetes',
  },
  mission: {
    title: 'Mission Statement',
    to: '/mission-statement',
    target: '_blank',
  },
  privacy: {
    title: 'Impressum & Data Privacy',
    to: '/data-privacy',
    target: '_blank',
  },
  whyRename: {
    title: 'Why rename?',
    to: '/why-rename',
  },

  // Sections
  sponsors: {
    title: 'Sponsors',
    to: `/#${getAnchor('Sponsors')}`,
  },
  proposal: {
    title: 'Call for Proposal',
    to: `/#${getAnchor('Call for Proposal')}`,
  },

  // Social Links
  linkedin: {
    to: 'https://www.linkedin.com/company/kubernetes-community-days-zurich/',
    target: '_blank',
  },
  twitter: {
    to: 'https://twitter.com/KcdZurich?s=20&t=2K7fxHFqThcgycuBzO_rSw',
    target: '_blank',
  },
  googlemaps: {
    to: 'https://goo.gl/maps/ooQufQWKzaRM286Z7',
    target: '_blank',
  },
  youtube: {
    to: 'https://www.youtube.com/@KCDZH',
    target: '_blank',
  },
  github: {
    to: 'https://github.com/KCDZurich',
    target: '_blank',
  },

  // External Links
  tickets: {
    title: 'Tickets',
    to: 'https://tickets.kcdzurich.ch/',
    target: '_blank',
  },
  conduct: {
    title: 'Code of Conduct',
    to: 'https://events.linuxfoundation.org/about/code-of-conduct/',
    target: '_blank',
  },
};
