<script setup>
  fetchFavoritedGames();
  const { favoritesGames } = useFavoritedGames()

</script>

<template>
  <div class="container:xl mx-auto">
    <client-only>
      <games-table :games="favoritesGames" />
    </client-only>
  </div>
</template>