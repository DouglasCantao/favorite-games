<script setup>
  useHead({
    title: 'Favorite Games',
    meta: [
      {
        name: 'description',
        content: 'All games marked as favorite.',
      },
    ],
  })
  fetchFavoritedGames();
  const { favoritesGames } = useFavoritedGames()

</script>

<template>
  <div class="container:xl mx-auto">
    <client-only v-if="favoritesGames && favoritesGames.length">
      <games-container :games="favoritesGames" />
    </client-only>

    <div v-else>
      <h3>No Game setted as favorited yet!</h3>
    </div>

  </div>
</template>