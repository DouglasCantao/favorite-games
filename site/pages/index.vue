<script setup>
  const filterParams = ref({})
  // const { data: games } = await useAsyncData('games', () => $fetch('/api/games/'))
  let { data: games } = await fetchFilteredData()
  let gamesList = ref(games.value)

  watch(filterParams, async () => {
    let { data: games } = await fetchFilteredData(filterParams.value)
    gamesList.value = games.value
  },{ deep: true })

</script>

<template>
  <div class="container:xl mx-auto">
    <games-filter @filter="(pay) => { filterParams.value = pay }"/>
    <games-container v-if="gamesList.length" :games="gamesList"/>
    <div v-else>
      <h3>No Game found! Try another filter.</h3>
    </div>
  </div>
  
</template>
  