export const getFavoritedGames = () => {
  if(process.client) {
    return JSON.parse(localStorage.getItem('favorites')) ?? [];
  }

  return [];
}

export const setFavorite = (game) => {
  const { setFavoriteGame } = useFavoritedGames();

  if(process.client) {
    let games = JSON.parse(localStorage.getItem('favorites')) ?? [];
    if(!games.includes(game.id)){
      games.push(game.id);
    }
    localStorage.setItem('favorites', JSON.stringify(games));

    setFavoriteGame(game);
  }
}

export const removeFavorite = (id) => {
  const { removeFavoriteGame } = useFavoritedGames();

  if(process.client) {
    let games = JSON.parse(localStorage.getItem('favorites'));
    if (games.includes(id)){
      games = games.filter(x => x !== id)
      localStorage.setItem('favorites', JSON.stringify(games));
      removeFavoriteGame(id);
    }
  }
}

export const fetchFavoritedGames = async () => {
  const { initFavoriteGameList } = useFavoritedGames();

  if(process.client) {
    const gamesId = JSON.parse(localStorage.getItem('favorites'));

    if (gamesId && gamesId.length) {
      const data = await $fetch(`/api/favoritegames/${ gamesId }`);
      initFavoriteGameList(data);

      return data
    }
    
    return [];
  }
 
}