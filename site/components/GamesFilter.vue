<script setup>
  const selectedPlatform = ref('pc')
  const selectedGenre = ref('')

  const emit = defineEmits(['filter'])
  const platforms = ref([
    { id: 'pc', name: 'PC (Windows)' },
    { id: 'browser', name: 'Web Browser' },
  ])
  const genres = ref([
    { id: 'mmorpg', name: 'MMORPG' },
    { id: 'shooter', name: 'Shooter' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'moba', name: 'MOBA' },
    { id: 'racing', name: 'Racing' },
    { id: 'sports', name: 'Sports' },
    { id: 'social', name: 'Social' },
    { id: 'sandbox', name: 'Sandbox' },
    { id: 'open-world', name: 'Open World' },
    { id: 'survival', name: 'Survival' },
    { id: 'pvp', name: 'PvP' },
    { id: 'pve', name: 'PvE' },
    { id: 'pixel', name: 'Pixel' },
    { id: 'voxel', name: 'Voxel' },
    { id: 'zombie', name: 'Zombie' },
    { id: 'turn-based', name: 'Turn Based' },
    { id: 'first-person', name: 'First Person' },
    { id: 'third-Person', name: 'Third Person' },
    { id: 'top-down', name: 'Top Down' },
    { id: 'tank', name: 'Tank' },
    { id: 'space', name: 'Space' },
    { id: 'sailing', name: 'Sailing' },
    { id: ' side-scroller', name: ' Side Scroller' },
    { id: 'superhero', name: 'Superhero' },
    { id: 'permadeath', name: 'Permadeath' },
    { id: 'card', name: 'Card' },
    { id: 'battle-royale', name: 'Battle Royale' },
    { id: 'mmo', name: 'MMO' },
    { id: 'mmofps', name: 'MMOFPS' },
    { id: 'mmotps', name: 'MMOTPS' },
    { id: '3d', name: '3D' },
    { id: '2d', name: '2D' },
    { id: 'anime', name: 'Anime' },
    { id: 'fantasy', name: 'Fantasy' },
    { id: 'sci-fi', name: 'Sci-Fi' },
    { id: 'fighting', name: 'Fighting' },
    { id: 'action-rpg', name: 'Action RPG' },
    { id: 'action', name: 'Action' },
    { id: 'military', name: 'Military' },
    { id: 'martial-arts', name: 'Martial Arts' },
    { id: 'flight', name: 'Flight' },
    { id: 'low-spec', name: 'Low Spec' },
    { id: 'tower-defense', name: 'Tower Defense' },
    { id: 'horror', name: 'Horror' },
    { id: 'mmorts', name: 'MMORTS' },
  ])

  const clearFilter = () => {
    selectedPlatform.value = 'pc'
    selectedGenre.value = ''
    emit('filter', {})
  }

</script>

<template>
  <div class="container mx-auto flex h-20 justify-start items-center shadow-2xl bg-slate-400 p-3">
    <div class="w-20">
      <h3>Filters:</h3>
    </div>

    <div class="w-64">
      <label for="platform-select" class="p-2">Platform: </label>
      <select @change="$emit('filter', {selectedPlatform, selectedGenre})" v-model="selectedPlatform" name="platform" id="platform-select" class="h-9 w-40 rounded-md text-center">
        <option v-for="item of platforms" :value="item.id">{{ item.name }}</option>
      </select>
    </div>

    <div class="w-64">
      <label for="genre-select" class="p-2">Genre: </label>
      <select @change="$emit('filter', {selectedPlatform, selectedGenre})" v-model="selectedGenre" name="genre" id="genre-select" class="h-9 w-40 rounded-md text-center">
        <option v-for="item of genres" :value="item.id">{{ item.name }}</option>
      </select>
    </div>

    <div class="w-64 pl-5">
      <button @click="clearFilter" class="transition ease-in-out delay-50 bg-blue-500 hover:scale-110 hover:bg-orange-500 h-9 w-24 rounded-md">clear</button>
    </div>
  </div>
</template>