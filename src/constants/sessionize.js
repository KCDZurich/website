const TOKEN = process.env.GATSBY_SESSIONIZE_TOKEN;

const endpoints = {
  speakers: `https://sessionize.com/api/v2/${TOKEN}/view/Speakers`,
  sessions: `https://sessionize.com/api/v2/${TOKEN}/view/Sessions`,
  grid: `https://sessionize.com/api/v2/${TOKEN}/view/GridSmart`,
};

export default endpoints;
