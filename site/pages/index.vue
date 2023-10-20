<script setup>
const filterParams = ref({})
// const { data: games } = await useAsyncData('games', () => $fetch('/api/games/'))
let { data: games } = await fetchFilteredData()
let gamesList = ref(games._rawValue.games)


watch(filterParams, async () => {
  let { data: games } = await fetchFilteredData(filterParams.value)
  gamesList.value = games._rawValue.games
},{ deep: true })



</script>

<template>
  <div class="container:xl mx-auto">
    <games-filter @filter="(pay) => { filterParams.value = pay }"/>
    <games-container :games="gamesList"/>
  </div>
</template>
  