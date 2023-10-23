<script setup>
  const props = defineProps({
    games: {
      type: Array,
      required: true,
    },
  })

</script>

<template>
  <div class="container mx-auto flex flex-wrap gap-x-14">
    <div v-for="game in props.games" :key="game.id" class="p-2">
      <game-card :game="game"/>
    </div>
  </div>

</template>

<style scoped>
</style>