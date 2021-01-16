<template>
  <div class="partners-container bg-opacity-95">
    <div class="container mx-auto px-7">
      <div class="flex flex-wrap -mx-5 ">
        <template v-for="(partner) in $store.state.partners" :key="partner.name">
          <CardCollapsed
            v-if="expandedPartner == ''"
            :partner="partner"
            class="lg:w-1/3 md:w-1/2 cursor-pointer"
            @click="$router.push({ name: 'partner', params: { name: partner.name.toLowerCase().replaceAll(' ', '-'), }})"
          />
        </template>
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
