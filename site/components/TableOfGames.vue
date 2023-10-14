<script setup>
  let favorited = ref(false)
  const { data: games } = await useAsyncData('games', () => $fetch('/api/games/'))

  const addToFavorites = () => {
    favorited.value = !favorited.value
  }
</script>

<template>
  <h2>table here</h2>
  <div class="container mx-auto">
    <table class="table-auto">
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
        <tr v-for="game in games.games" :key="game.id" class="border border-sky-500">
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
            <img @click="addToFavorites" class="cursor-pointer" :src="favorited ? '/heart-icon-filled.svg' : '/heart-icon.svg'"/>
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