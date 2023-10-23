<script setup>
  fetchFavoritedGames();
  const { favoritesGames } = useFavoritedGames()

</script>

<template>
  <div class="container:xl mx-auto">
    <client-only v-if="favoritesGames && favoritesGames.length">
      <games-container :games="favoritesGames" />
    </client-only>

    <div v-else>
      <h3>No Game setted as favorited yeat</h3>
    </div>


  </div>
</template>