export default defineEventHandler (async (event) => {
  let API_URL = `${ process.env.BASE_API_URL }?platform=`;
  const defaultPlatform = 'pc';
  const { platform, category } = getQuery(event);
  let filter = undefined;

  if(platform && category) {
    filter = `${ platform }&category=${ category }`
  
  } else if (platform && !category) {
    filter = platform

  } 
  
  API_URL = `${ API_URL }${ filter ? filter : defaultPlatform }`;

  const getData = async () => {
    const response = await fetch(`${ API_URL }`);
    const data = response.json();
    return data;
  }
  let games = await getData();

  return {
    games: games
  }
})