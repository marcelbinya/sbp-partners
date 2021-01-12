<template>
    <div class="w-full my-4 px-4 column h-full">
        <!-- Article -->
        <article class="grid-item bg-gray-50 rounded-xl text-black relative flex flex-nowrap flex-col h-80 overflow-hidden shadow-blue hover:shadow-2xl">
            <img alt="Placeholder" class="h-auto w-full cover-image" :src="partner.imageUrl" />

            <header class="flex flex-col leading-tight py-2 px-2">
                <h1 class="text-gray text-4xl font-extrabold">
                    {{ partner.name }}
                </h1>
                <h2 class="text-md font-medium color-green font-sans">
                    {{ partner.subtitle }}
                </h2>
            </header>

            <!-- <a class="absolute bottom-0 left-0 flex items-center text-black space-x-3" href="#">
                <p class="text-sm" v-for="category in partner.categories" :key="category">
                    <span :class="categoryToTailwindClass(category)" class="py-2 px-2 text-white font-semibold">{{ category }}</span
                    >
                </p>
                </a> -->

            <!-- <div class="partner-description px-4 py-1 overflow-hidden">
                {{ partner.description || defaultDescription }}
                <p class="read-more"></p>
            </div> -->

            <div class="absolute bottom-0 right-0 lex justify-between h-8">
                <span class="relative p-4 text-lg">
                Mehr erfahren >
                </span>
            </div>
        </article>
        <!-- END Article -->
    </div>
</template>

<script>
export default {
    props: ["partner"]
}
</script>

<style>
.cover-image {
  object-fit: cover;
  height: 10rem;
}
.partner-description {
  position: relative; 
}
.partner-description .read-more { 
  position: absolute; 
  bottom: 0; 
  left: 0;
  width: 100%; 
  text-align: center; 
  margin: 0; padding: 30px 0; 
  color: red;

  margin-top: 2rem;
	
  /* "transparent" only works here because == rgba(0,0,0,0) */
  background-image: linear-gradient(to bottom, transparent,lightgrey);
}

</style>