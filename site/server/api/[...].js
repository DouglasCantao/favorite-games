export default defineEventHandler (async (event) => {
  let API_URL = `${ process.env.BASE_API_URL }?platform=`;
  const defaultPlatform = 'pc';
  const filteredValue = getQuery(event)['platform'] ? getQuery(event)['platform'] : defaultPlatform;
  // api/games?platform=browser&category=mmorpg
  
  API_URL = `${ API_URL }${ filteredValue }`;

  const getData = async () => {
    const response = await fetch(`${ API_URL }`);
    const data = response.json();
    return data;
  }
  let games = await getData();

  const LIMIT = 10;
  games = games.slice(0, LIMIT);



  return {
    games: games
  }
})