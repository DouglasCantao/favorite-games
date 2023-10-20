<script setup>
  const props = defineProps({
    games: {
      type: Array,
      required: true,
    },
  })

  const favoritedGames = ref(getFavoritedGames());
  
  const handleFavorites = (game) => {
    if(!favoritedGames.value.includes(game.id)) {
      setFavorite(game);
      favoritedGames.value.push(game.id);
    } else {
      removeFavorite(game.id);
      favoritedGames.value = favoritedGames.value.filter(x => x !== game.id);
    }
  }
  
  const toggleFavorite = computed(() => {
    return (id) => favoritedGames.value.includes(id) ? '/heart-icon-filled.svg' : '/heart-icon.svg';
  })


</script>

<template>
  <div class="container mx-auto flex">
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th></th>
          <th class="text-left">Title</th>
          <th class="text-left">Genre</th>
          <th class="text-left">Developer</th>
          <th class="text-left">Platform</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in props.games" :key="game.id" class="border border-sky-500">
          <td>
            <figure class="game__picture">
              <img class="rounded shadow-2xl" :src="game.thumbnail" :alt="game.title" />
            </figure>
          </td>
          <td class="text-left">{{ game.title }}</td>
          <td class="text-left">{{ game.genre }}</td>
          <td class="text-left">{{ game.developer }}</td>
          <td class="text-left">{{ game.platform }}</td>
          <td class="text-center">
            <ClientOnly>
              <img @click="handleFavorites(game)" class="cursor-pointer" :src="toggleFavorite(game.id)"/>
            </ClientOnly>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<style>
.game__picture {
  max-width: 50%;
}
</style>