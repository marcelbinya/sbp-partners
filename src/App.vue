<template>
  <main>
    <header class="bg-black shadow site-header">      
      <div class="max-w-7xl lg:mx-10 py-3">        
        <h1 class="text-2xl lg:text-3xl font-bold font-sans leading-tight text-gray-100 title text-center lg:text-left">
          <img src="/assets/img/center_weiss.png" class="logo hidden lg:inline"/>
          <span class = "hidden lg:inline">
          <a class="underline-dotted" href="https://smart-commercial-building.de/">CSCB</a> /
          </span>
          <router-link to="/">Smart Building Platform</router-link>
        </h1>
      </div>
    </header>

    <div class="max-w-7xl mx-auto sm:px-6 lg:p-8 main-title">
      <h1 class="text-2xl lg:text-5xl text-white font-bold font-sans text-center bg-black border shadow-2xl">
        Unternehmen & Produkte
      </h1>
    </div>

    <router-view class="router" />
  </main>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style>
.site-header {
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 100;
}

#app {
  min-height: 100%;
}

body {
  min-height: 100vh;
}

.logo {
  height: 2rem;
  margin-right: 0.6rem;
  margin-bottom: 0.3rem;
}

.title {
  height: 2rem;
  line-height: 2rem;
}

.main-title {
  margin-top: 3.5rem;
}

main {
  background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjMzIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxOTgpICI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0icmdiYSgyNDcsIDI1MCwgMjUyLDEpIj48L3JlY3Q+IDxwYXRoIGZpbGw9InJnYmEoMTc2LCAxOTIsIDIxNiwxKSIgZD0iTSAtMTAgMzAgaCA2MCB2MSBoLTYweiBNLTEwIC0xMCBoNjAgdjEgaC02MCI+PC9wYXRoPjxwYXRoIGZpbGw9InJnYmEoMCwgMTA1LCAxODAsMSkiIGQ9Im0gLTEwIDEzIGggNjAgdjEgaC02MHogTS0xMCAtMjcgaDYwIHYxIGgtNjB6Ij48L3BhdGg+PC9wYXR0ZXJuPiAgPC9kZWZzPiA8cmVjdCBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIj48L3JlY3Q+PC9zdmc+")
}
</style>
