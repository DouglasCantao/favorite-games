export default defineEventHandler (async (event) => {
    
    const gameId = event.context.params.id;
    const favoritedGamesList = gameId.split(',');
    let games = [];

    for (let id of favoritedGamesList) {

      let API_URL = `${ process.env.BASE_API_URL_SINGLE_DATA }?id=${ id }`;
    
      const getData = async () => {
        const data = await $fetch(`${ API_URL }`);
        return data;
      }
      games.push(await getData());
    }
    
    return games
  })