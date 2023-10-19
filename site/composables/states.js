export const useFavoritedGames = () => {
    const favoritesGames = useState('favorites', () => []);

    const initFavoriteGameList = (gamesList) => {
        favoritesGames.value = [...gamesList];
    };

    const setFavoriteGame = (game) => {
        favoritesGames.value.push(game);
    };

    const removeFavoriteGame = (gameId) => {
        // favoritesGames.value = favoritesGames.value.filter(x => x.id !== gameId);
        favoritesGames.value.splice(favoritesGames.value.findIndex(x => x.id === gameId), 1);
    };

    return {
        favoritesGames,
        initFavoriteGameList,
        setFavoriteGame,
        removeFavoriteGame
    }
}