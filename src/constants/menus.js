import LINKS from 'constants/links.js';

const {
  schedule2024,
  speakers,
  sponsors,
  podcast,
  archive2023,
  archive2024,
  conduct,
  team,
  mission,
  privacy,
} = LINKS;

const MENUS = {
  header: [
    schedule2024,
    speakers,
    sponsors,
    { title: 'Archive', items: [archive2023, archive2024] },
  ],
  footer: [conduct, team, mission, privacy, schedule2024, speakers],
  mobile: [
    schedule2024,
    speakers,
    sponsors,
    podcast,
    { title: 'Archive', items: [archive2023, archive2024] },
  ],
};

export default MENUS;
