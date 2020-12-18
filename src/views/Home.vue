<template>
  <main>
    <div class="bg-gray-50">
<div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <!-- Column -->
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-for="partner in partners" :key="partner.name">

            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" :src="partner.imageUrl">
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg underline">
                        <a class="no-underline hover:underline text-black text-3xl " href="#">
                            {{ partner.name }}
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline text-black space-x-1" href="#">
                        <!-- <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"> -->
                        <p class="text-sm" v-for="category in partner.categories" :key="category">
                            <span :class="categoryToTailwindClass(category)" class="rounded py-2 px-4 text-white">{{ category }}</span>
                        </p>
                    </a>
                    <!-- <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a> -->
                </footer>

            </article>
            <!-- END Article -->

        </div>
        <!-- END Column -->
    </div>
</div>
    </div>
  </main>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'
 
export default {
    components: {
        SvgIcon
    },
  data() {
    return {
      partners: [
        { name: "Aedifion", categories: ["Software", "Hardware", "Gebäudeautomation", "Dashboards", "Platform"], imageUrl: 'https://picsum.photos/600/400/?random' },
        { name: "w-tec", categories: ["Hardware", "Licht"], imageUrl: 'https://picsum.photos/600/400/?random' },
        { name: "Zumtobel", categories: ["Hardware", "Licht"], imageUrl: 'https://picsum.photos/600/400/?random' }
      ],
      path: mdiAccount,
    }
  },
  methods: {
    categoryToTailwindClass(category) {
      switch(category) {
        case "Software": return {
          'bg-red-800': true
        }
        case "Hardware": return {
          'bg-gray-700': true
        }
      }
      return {};
    }
  }
}
</script>
