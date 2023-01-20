import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Tickets', ...LINKS.tickets },
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
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Tickets', ...LINKS.tickets },
  ],
};

export default MENUS;
