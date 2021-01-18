<template>
  <div>
    <div class="w-full border-white border-t-4">
      <h1 class="py-2 text-2xl lg:text-5xl text-white font-bold font-sans text-center main-title bg-gradient-to-tr to-gray-800 from-gray-700">
        Integrierte Unternehmen & Produkte 
      </h1>
    </div>
    <div class="partners-container bg-opacity-95">
      <div class="container mx-auto px-7">
        <!-- <div class="bg-white">
        <span class="text-3xl">
          Die Smart Building Platform ermöglicht Smart Building-Lösungen in einer gebäudeindividuellen Testumgebung temporär und dauerhaft zu erproben. Gebäudeentwickler und -betreiber können so den Nachweis oder Test von Interoperabilität einzelner Feldgeräte erbringen.
  Das Ziel ist die Integration von Hard- und Software der modernen Gebäudetechnik in einer digitalen Plattform real abzubilden, zu testen und weiterzuentwickeln. Die IoT-Bausteine sämtlicher Gewerke eines modernen kommerziell genutzten Gebäudes Werden dazu in einem kleinen Maßstab, identisch zu einem modernen realen Gebäudeprojekt, aufgebaut und vernetzt. Die Anzahl der digitalen Komponenten kann entsprechend der realen Nutzung hochskaliert werden.


        </span>
        </div> -->
        <div class="flex flex-wrap -mx-5 ">
          <template v-for="(partner) in $store.state.partners">
            <CardCollapsed
              v-if="expandedPartner == ''"
              :key="partner.name"
              :partner="partner"
              class="lg:w-1/3 md:w-1/2 cursor-pointer"
              @click="$router.push(
              {
                name: 'partner',
                params: {
                  name: partner.name.toLowerCase().replaceAll(' ', '-')
                }
              })"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";
import CardCollapsed from "./CardCollapsed.vue";

const lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

export default {
  components: {
    SvgIcon,
    CardCollapsed
  },
  data() {
    return {
      expandedPartner: "",
      defaultDescription: lorem,
      path: mdiAccount,
    };
  },
  methods: {
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

</style>
