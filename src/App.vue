<template>
  <main>
    <header class="bg-white shadow site-header" v-if="$route.meta.title">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">Smart Building Platform - Center Smart Commercial Building</h1>
      </div>
    </header>

    <router-view class="router" />
  </main>
</template>

<style scoped>
.router {
  padding-top: 3rem;
}

.site-header {
  position: fixed;
  width: 100vw;
  top: 0;
}
</style>
