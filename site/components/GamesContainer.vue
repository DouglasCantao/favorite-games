<script setup>
  useHead({
    title: 'Games',
    meta: [
      {
        name: 'description',
        content: 'A list of games that can be filtered by genre, platform and name.',
      },
    ],
  })
  const props = defineProps({
    games: {
      type: Array,
      required: true,
    },
  })

</script>

<template>
  <div class="game-container container mx-auto flex flex-wrap gap-x-14">
    <div v-for="game in props.games" :key="game.id" class="p-2">
      <game-card :game="game"/>
    </div>
  </div>

</template>

<style scoped>

  @media (max-width: 62em) {
    .game-container {
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
    }
  }
</style>