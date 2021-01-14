<template>
  <div class="partners-container">
    <div class="container lg:mx-auto ">
      <div class="w-full my-4 px-4 column h-full">
        <article class="bg-gray-50 rounded-xl text-gray text-black relative partner-grid grid grid-cols-2 shadow-md p-6 border-2">
          <header class="flex flex-col leading-tight">
              <h1 class="text-7xl font-extrabold">
                  {{ partner.name }}
              </h1>
              <h2 class="font-medium text-xl color-green font-sans">
                  {{ partner.subtitle }}
              </h2>
          </header>
          <div/>
          <div class="text-xl">
            {{ partner.description }}
          </div>
          <div class="-my-5 mx-auto">
            <h1 class="underline text-xl font-extrabold inline font-mono">Live-Daten aus Aachen</h1>
            <div class="livenow inline-block">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div v-for="(state, key) in liveState" :key="key">
              <span class="mdi text-lg" :class="state.icon"></span>
              <span class="font-semibold text-lg">{{ state.label }}</span> {{ state.value }} {{ state.unit }}</div>
          </div>
          <h1 class="text-4xl font-extrabold mt-5 full pt-5">
            Integrierte Produkte 
          </h1>
          <div class="hs-wrapper flex relative flex-row full mt-5">
            <div ref="products" class="hs-container overflow-hidden" id="products" >
              <div class="relative pb-5 bg-gray-100 shadow-inner shadow-xl flex flex-col overflow-hidden pt-2 justify-start align-top w-96" v-for="(product, index) in partner.products" :key="index">
                <h1 class="text-center font-bold text-3xl">{{ product.name }}</h1>    
                <img class="object-contain w-full px-5" :src="product.imageUrl" />
                <div class="font-normal px-5 pt-5 pb-8 text-center">{{ product.description }}</div>
                <div class="text-center w-full bg-blue-800 text-white text-2xl font-sans font-bold absolute bottom-0">
                  <span class="mdi mdi-search-web"></span> <a :href="product.moreInfoUrl" class="font-mono">Mehr Informationen 
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute right-2 top-0 -my-5 arrow" @click="scrollProducts('right')">
                <i></i>
                <svg>
                    <use xlink:href="#circle" />
                </svg>
            </div>
            <div class="hidden">{{ $refs.products }}</div>
            <div v-if="$refs.products ? $refs.products.scrollLeft > 0 : false " class="absolute top-0 -my-5 arrow left" @click="scrollProducts('left')">
                <i></i>
                <svg>
                    <use xlink:href="#circle" />
                </svg>
            </div>
          </div>
          <h1 class="text-4xl font-extrabold my-5 full">
            Weitere Impressionen 
          </h1>
          <div class="full" v-for="(image, index) in partner.moreImages" :key="index"> 
            <img class="object-cover mx-auto" :src="image"/>
          </div>
          <h1 class="text-4xl font-extrabold mt-5 full text-center">
            Kontakt
          </h1>
          <div/>
          <div class="full rounded-lg my-3">
            <div class="photo-wrapper p5-2">
                <img class="w-32 h-32 rounded-full object-cover mx-auto" :src="partner.contact.imageUrl" :alt="`Bild von ${partner.contact.name}`">
            </div>
            <div class="p-2">
                <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{{ partner.contact.name }}</h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>{{ partner.contact.position }}</p>
                </div>
                <div class="text-center text-gray-400 text-xs font-semibold">
                    <a :href="`mailto:${ partner.contact.email }`">{{ partner.contact.email }}</a>
                </div>
                
            </div>
          </div>

        </article>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";
import CardCollapsed from "./CardCollapsed.vue";
import CardExpanded from "./CardExpanded.vue";
import easyScroll from 'easy-scroll';
import axios from 'axios';

const lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const sort = a => a.sort((a, b) => a > b ? -1 : 1);

export default {
  components: {
    SvgIcon,
    CardCollapsed,
    CardExpanded
  },
  data() {
    return {
      expandedPartner: "",
      defaultDescription: lorem,
      path: mdiAccount,
      intervalId: null,
      liveState: {}
    };
  },
  computed: {
    partner() {
      return this.$store.getters.byEscapedName(this.$route.params.name);
    }
  },
  mounted() {
    if(!this.partner)
      return this.$router.replace({ name: 'partners' });

    if(this.partner.liveData.url)
    {
      this.intervalId = setInterval(this.refreshLiveData, 1000);
      this.refreshLiveData();
    }
  },
  unmounted() {
    if(this.intervalId !== null)
      clearInterval(this.intervalId)
  },
  methods: {
    async refreshLiveData() {
        let response = (await axios.get(this.partner.liveData.url)).data;
        console.log(response.result)
        if(response.result !== "success") return;

        Object
          .entries(response.data)
          .filter(([property]) => (property in this.partner.liveData.mapping))
          .forEach(([property, state]) => {
            let value = state.value;
            if('convert' in this.partner.liveData.mapping[property])
              value = this.partner.liveData.mapping[property].convert(value);
            this.liveState[property] = {value, ...this.partner.liveData.mapping[property]};
        })
    },
    scrollProducts(direction) {
      easyScroll({
        'scrollableDomEle': document.getElementById("products"),
        'direction': direction,
        'duration': 400,
        'easingPreset': 'easeOutCubic',
        'scrollAmount': 250
      });
    },
    expand(partner) {
      partner.expanded = !partner.expanded;
      this.expandedPartner = this.expandedPartner.length === 0 ? partner.name : "";
    },
    categoryToTailwindClass(category) {
      const classes = {
          "bg-red-500 text-md text-white-900": true,
        };

      // switch (category) {
  
      //   case "Gebäudeautomation":
      //     classes["mdi mdi-home-analytics"] = true;
      //     break;
      //   case "Umweltsensorik":
      //     classes["mdi mdi-lightbulb-on"] = true;
      //     break;
      //   case "Projektentwicklung":
      //     classes["mdi mdi-lightbulb-on"] = true;
      //     break;
      //   case "Softwareplattform":
      //     classes["mdi mdi-lightbulb-on"] = true;
      //     break;
      //   case "Leuchten":
      //     classes["mdi mdi-lightbulb-on"] = true;
      //     break;
      // }
      return classes;
    },
  },
};
</script>

<style scoped lang="scss">
.mdi::before {
  padding-right: 0.2rem;
}
.grid-item {
  --tw-shadow: 2px 5px 15px 0 rgba(10, 12, 43, 0.8);
}

.partner-grid > .full {
  grid-column: 1 / -1;
}

.hs-container {
  --gutter: 20px;
  display: grid;
  grid-gap: 10px;
  // grid-template-columns: repeat(6, calc(40% - 40px));
  grid-template-rows: minmax(150px, 1fr);
  grid-auto-flow: column;
  padding-bottom: calc(-.25 * 3px);
}

.hs::before,
.hs::after {
  content: ‘’;
}

.arrow {
    --active: rgb(0, 0, 0);
    --border: rgb(255, 255, 255);
    width: 44px;
    height: 44px;
    background-color: white;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    cursor: pointer;
    transition: border-color 0.2s;
    &:hover {
      --border: rgba(255, 255, 255, .5);
    }
    &.left {
        transform: scaleX(-1);
    }
    i {
        display: block;
        position: absolute;
        margin: -10px 0 0 -10px;
        width: 20px;
        height: 20px;
        left: 50%;
        top: 50%;
        &:before,
        &:after {
            content: '';
            width: 10px;
            height: 2px;
            border-radius: 100px;
            position: absolute;
            left: 50%;
            top: 50%;
            background: var(--active);
            margin: -1px 0 0 -5px;
            display: block;
            transform-origin: 9px 50%;
        }
        &:before {
            transform: rotate(-40deg);
        }
        &:after {
            transform: rotate(40deg);
        }
    }
    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        left: 1px;
        right: 1px;
        top: 1px;
        bottom: 1px;
        border-radius: 50%;
        border: 2px solid var(--border);
    }
    svg {
        width: 44px;
        height: 44px;
        display: block;
        position: relative;
        z-index: 1;
        color: var(--active);
        stroke-width: 2px;
        stroke-dashoffset: 126;
        stroke-dasharray: 126 126 0;
        transform: rotate(0deg);
    }
    &.animate {
        svg {
            animation: stroke 1s ease forwards .3s;
        }
        i {
            animation: arrow 1.6s ease forwards;
            &:before {
                animation: arrowUp 1.6s ease forwards;
            }
            &:after {
                animation: arrowDown 1.6s ease forwards;
            }
        }
    }
}

.livenow {
  width: 25px;
  height: 25px;
  margin: 0 auto;
  display: inline-block;
  position: relative;
}
.livenow > div {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  position: absolute;
  margin: 0 auto;
  border:3px solid rgba(255,255,255,1);
  background-color: red;
  -webkit-animation: live 3s infinite ease-in-out;
  animation: live 3s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  &:nth-child(1) {
    background-color:rgba(255,255,255,0.3);
    background-color:rgba(255,255,255,1);
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }
  &:nth-child(2) {
    -webkit-animation-delay: 0.16s;
    animation-delay: 0.5s;
  }
  &:nth-child(3) {
    -webkit-animation-delay: 0.42s;
    animation-delay: 0.42s;
    border: 5px solid rgba(255,255,255, .95);
  }
  &:nth-child(4) {
    border:3px solid rgba(255,255,255,1);
    -webkit-animation-delay: -0.42s;
    animation-delay: -0.42s;
  }
}

@keyframes live {
  0%, 66% { 
    transform: scale(1);
    -webkit-transform: scale(1);
  } 33%, 100% { 
    transform: scale(0.6);
    -webkit-transform: scale(0.6);
  }
}

</style>
