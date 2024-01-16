const TOKEN = process.env.GATSBY_SESSIONIZE_TOKEN;

const endpoints = {
  speakers: `https://sessionize.com/api/v2/${TOKEN}/view/Speakers`,
};

export default endpoints;
