<script>
</script>
<template>
  <header class="shadow-sm bg-slate-700">
    <nav class="container mx-auto p-4 flex">
      <ul class="flex gap-4">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/favorite-games">Favorites</nuxt-link></li>
      </ul>
    </nav>
  </header>
  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #e5e7eb;
  }
</style>