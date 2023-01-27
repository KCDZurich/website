import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Call for Proposal', ...LINKS.proposal },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Workshops', ...LINKS.workshops },
  ],
  footer: [
    { text: 'Team', ...LINKS.team },
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Impressum & Data Privacy', ...LINKS.privacy },
    { text: 'Mission Statement', ...LINKS.mission },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Tickets', ...LINKS.tickets },
    { text: 'Code of Conduct', ...LINKS.conduct },
  ],
  mobile: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Call for Proposal', ...LINKS.proposal },
    { text: 'Workshops', ...LINKS.workshops },
    { text: 'Sponsors', ...LINKS.sponsors },
  ],
};

export default MENUS;
