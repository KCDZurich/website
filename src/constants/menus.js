import LINKS from 'constants/links.js';

const {
  schedule2024,
  speakers,
  workshops,
  sponsors,
  podcast,
  archive,
  conduct,
  team,
  mission,
  privacy,
} = LINKS;

const MENUS = {
  header: [schedule2024, speakers, workshops, sponsors, archive],
  footer: [conduct, team, mission, privacy, schedule2024, speakers],
  mobile: [schedule2024, speakers, workshops, sponsors, podcast, archive],
};

export default MENUS;
