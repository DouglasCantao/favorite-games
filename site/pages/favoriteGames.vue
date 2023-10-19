<script setup>
  const { favoritesGames } = useFavoritedGames()

</script>

<template>
  <div class="container:xl mx-auto">
    <client-only>
      <table-of-games :games="favoritesGames" />
    </client-only>
  </div>
</template>