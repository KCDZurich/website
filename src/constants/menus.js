import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Call for Proposal', ...LINKS.proposal },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Tickets', ...LINKS.tickets },
    { text: 'Workshops', ...LINKS.workshops },
  ],
  footer: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Tickets', ...LINKS.tickets },
  ],
  mobile: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Call for Proposal', ...LINKS.proposal },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Workshops', ...LINKS.workshops },
  ],
};

export default MENUS;
