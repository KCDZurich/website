import LINKS from 'constants/links.js';

const { speakers, sponsors, podcast, archive2023, archive2024, conduct, team, mission, privacy } =
  LINKS;

const MENUS = {
  header: [speakers, sponsors, podcast, { title: 'Archive', items: [archive2023, archive2024] }],
  footer: [conduct, team, mission, privacy],
};

export default MENUS;
