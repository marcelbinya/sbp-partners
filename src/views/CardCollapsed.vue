<template>
    <div class="w-full my-4 px-4 column h-full">
        <!-- Article -->
        <article class="grid-item bg-white rounded-xl text-black relative flex flex-nowrap flex-col h-80 overflow-hidden shadow-2xl hover:shadow-lg">
            <img alt="Placeholder" class="cover-image absolute lg:relative" :src="partner.imageUrl" />
            
            <header class="flex flex-col leading-tight pt-10 px-2 z-10">
                <h1 class="text-gray text-4xl font-extrabold text-center">
                    {{ partner.name }}
                </h1>
                <h2 class="text-lg font-medium color-green font-sans text-center">
                    {{ partner.subtitle }}
                </h2>
            </header>

            <!-- <div class="partner-description px-4 py-1 overflow-hidden">
                {{ partner.description || defaultDescription }}
                <p class="read-more"></p>
            </div> -->

            <!-- <div class="absolute bottom-0 right-0 lex justify-between h-8">
                <span class="relative p-4 text-lg">
                Mehr erfahren >
                </span>
            </div> -->
            
            <div class="absolute bottom-0 text-md hover:text-2xl rounded-tr-lg bg-red-800 text-white pt-1 pb-1 pl-1 pr-1" v-if="partner.tags">
            <span class="mdi mdi-tag pl-1 pr-1"></span>
            <span class="pr-1 text-white pl-0.5 z-30" v-for="(tag, index) in partner.tags ?? []" :key="index">
                {{ tag }}<template v-if="partner.tags?.length - 1 !== index">,</template>
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
@media (min-width: 1024px) {
.cover-image {
  object-fit: cover;
  min-height: 10rem;
  max-height: 10rem;
  height: 10rem;
}
}
.partner-description {
  position: relative; 
}
.grid-item {
    transition: box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1);
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