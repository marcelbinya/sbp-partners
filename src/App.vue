<template>
  <main>
    <header class="bg-white shadow site-header" v-if="$route.meta.title">
      <div class="max-w-7xl mx-10 py-3">
        <h1 class="text-2xl font-bold leading-tight text-gray-900">Smart Building Platform</h1>
      </div>
    </header>

    <router-view class="router py-14" />
  </main>
</template>

<style scoped>
.site-header {
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 100
}

main {
  background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMDcpICI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0iIzJhNDM2NSI+PC9yZWN0PiA8cGF0aCBmaWxsPSIjMWEyMDJjIiBkPSJNMCA4IGEgMTIgMTIgMCAwIDEgMTIgMTIgYSA4IDggMCAwIDAgOCA4IHY0IGEgLTEyIC0xMiAwIDAgMSAtMTIgLTEyIGEgLTggLTggMCAwIDAgLTggLTh6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2VjYzk0YiIgZD0iTTIwIDI5IGEgOSAtOSAwIDAgMCA5IC05IGEgMTEgLTExIDAgMCAxIDExIC0xMSB2MiBhIC05IDkgMCAwIDAgLTkgOSBhIC0xMSAxMSAwIDAgMSAtMTEgMTF6CiAgICAgICAgICAgICAgICBNMjAgNjkgYSA5IC05IDAgMCAwIDkgLTkgYSAxMSAtMTEgMCAwIDEgMTEgLTExIHYyIGEgLTkgOSAwIDAgMCAtOSA5IGEgLTExIDExIDAgMCAxIC0xMSAxMXoiPjwvcGF0aD48L3BhdHRlcm4+ICA8L2RlZnM+IDxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiPjwvcmVjdD48L3N2Zz4=")}
</style>
