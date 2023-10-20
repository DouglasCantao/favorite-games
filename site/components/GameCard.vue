<script setup>
  const props = defineProps({
    game: {
      type: Object,
      required: true,
    },
  })
  const cardShadowColor = ref('shadow-sky-500/40');
  const { thumbnail, title, genre, developer, platform, short_description } = props.game;

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
    return (id) => {
      if(favoritedGames.value.includes(id)) {
        cardShadowColor.value = 'shadow-rose-500/40';
        return '/heart-icon-filled.svg';
      } else {
        cardShadowColor.value = 'shadow-sky-500/40';
        return '/heart-icon.svg';
      }
    }
  })

  const truncate = (text, length, clamp) => {
    clamp = clamp || "...";
    return text && text.length > length
      ? text.slice(0, length) + clamp
      : text;
  }


</script>
<template>
  <div class="game-card flex flex-col shadow-md w-60 " :class="cardShadowColor">
    <figure>
      <img class="rounded shadow-2xl" :src="thumbnail" :alt="game.title" />
    </figure>
    <div class="flex flex-col items-center p-2 h-52 gap-2 justify-between">
      <div class=" text-sky-600 text-xl text-center">{{ title }}</div>
      <div class="text-base">{{ genre }} - {{ platform }}</div>
      <div class="text-base">{{ developer }}</div>
      <div class="text-center text-sm line-clamp-2">{{ short_description }}</div>
      <ClientOnly>
        <img @click="handleFavorites(game)" class="cursor-pointer w-8" :src="toggleFavorite(game.id)"/>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>

  @media (max-width: 62em) {
    .game-card {
      width: 90%;
    }
  }

</style>