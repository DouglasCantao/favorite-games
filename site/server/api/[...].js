export default defineEventHandler (async (event) => {
  const getData = async () => {
    const response = await fetch(`${ process.env.BASE_API_URL }`);
    const data = response.json();
    return data;
  }
  let games = await getData();

  return {
    games: games
  }
})