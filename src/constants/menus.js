import LINKS from 'constants/links.js';

// { text: 'Home', ...LINKS.home },
// { text: 'Speakers', ...LINKS.speakers },
// { text: 'Schedule', ...LINKS.schedule },
// { text: 'Call for Proposal', ...LINKS.proposal },

const MENUS = {
  header: [
    { text: 'Workshops', ...LINKS.workshops },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Podcast', ...LINKS.podcast },
    { text: 'Archive', ...LINKS.archive },
  ],
  footer: [
    { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Team', ...LINKS.team },
    { text: 'Mission Statement', ...LINKS.mission },
    { text: 'Impressum & Data Privacy', ...LINKS.privacy },
  ],
  mobile: [
    { text: 'Workshops', ...LINKS.workshops },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Podcast', ...LINKS.podcast },
    { text: 'Archive', ...LINKS.archive },
  ],
};

export default MENUS;
