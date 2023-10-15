export const fetchFilteredData = async (filterTerms) => {
  let data = [];
  const { selectedPlatform, selectedGenre } = filterTerms ? filterTerms.value : {};
  const filter = selectedPlatform ? selectedPlatform : undefined

  if(filter) {
    data = await useAsyncData('games', () => $fetch(`/api/games?platform=${ filter }`))
  } else {
    data = await useAsyncData('games', () => $fetch('/api/games/'))
  }
  return {
    ...data
  }
}