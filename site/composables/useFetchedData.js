export const fetchFilteredData = async (filterTerms) => {
  let data = [];
  const { selectedPlatform, selectedGenre } = filterTerms ? filterTerms.value : {};
  let filter = undefined;

  if(selectedPlatform && selectedGenre) {
    filter = `${ selectedPlatform }&category=${ selectedGenre }`
  
  } else if (selectedPlatform && !selectedGenre) {
    filter = selectedPlatform

  } 

  if(filter) {
    data = await useAsyncData('games', () => $fetch(`/api/games/?platform=${ filter }`))
  } else {
    data = await useAsyncData('games', () => $fetch('/api/games/'))
  }
  return data
}