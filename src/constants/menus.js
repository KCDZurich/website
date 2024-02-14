import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    // { text: 'Home', ...LINKS.home },
    // { text: 'Schedule', ...LINKS.schedule },
    // { text: 'Workshops', ...LINKS.workshops },
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Podcast', ...LINKS.podcast },
    { text: 'Archive', ...LINKS.archive },
  ],
  footer: [
    { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Team', ...LINKS.team },
    { text: 'Mission Statement', ...LINKS.mission },
    { text: 'Impressum & Data Privacy', ...LINKS.privacy },
    { text: 'Speakers', ...LINKS.speakers },
  ],
  mobile: [
    // { text: 'Home', ...LINKS.home },
    // { text: 'Schedule', ...LINKS.schedule },
    // { text: 'Call for Proposal', ...LINKS.proposal },
    // { text: 'Workshops', ...LINKS.workshops },
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Podcast', ...LINKS.podcast },
    { text: 'Archive', ...LINKS.archive },
  ],
};

export default MENUS;
