<template>
  <main>
    <div class="bg-gray-50">
      <div class="bg-gray-200 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extralight view-header">
          Integrierte Unternehmen, Komponenten und Produkte
        </h1>
      </div>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4 ">
          <!-- Column -->
          <div
            class="my-1 px-1 w-full lg:my-4 lg:px-4 column"
            :class="{
              'lg:w-1/3 md:w-1/2': expandedPartner !== partner.name,
              'hide': expandedPartner !== '' && expandedPartner !== partner.name
            }"
            v-for="partner in partners"
            :key="partner.name"
          >
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  :src="partner.imageUrl"
                />
              </a>

              <header
                class="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 class="text-lg font-black">
                  <a
                    class="no-underline hover:underline text-black text-3xl font-mono"
                    href="#"
                  >
                    {{ partner.name }}
                  </a>
                </h1>
                <p class="text-grey-darker text-sm" @click="expand(partner)">Mehr anzeigen</p>
              </header>

              <div
                class="flex items-center justify-between leading-none p-2 bg-gray-100"
              >
                <a class="flex items-center text-black space-x-1" href="#">
                  <p
                    class="text-sm"
                    v-for="category in partner.categories"
                    :key="category"
                  >
                    <span
                      :class="categoryToTailwindClass(category)"
                      class="rounded py-2 px-2 text-white font-semibold"
                      >{{ category }}</span
                    >
                  </p>
                </a>
              </div>

              <div class="p-2">
                {{ partner.description }}
              </div>
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
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";

export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      expandedPartner: "",
      partners: [
        {
          name: "Aedifion",
          categories: ["Gebäudeautomation", "Softwareplattform"],
          description:
            "aedifion.io ist die hochspezialisierte Cloud-Plattform für Monitoring und Optimierung von technischer Gebäudeausrüstung und Energiesystemen. Das Werkzeug, um Ihre Betriebskosten zu senken und Ihre Energieeffizienz zu steigern – für Bestand und Neubau gleichermaßen.",
          imageUrl: "https://picsum.photos/600/100/?random",
        },
        {
          name: "w-tec",
          categories: ["Licht"],
          description:
            "Die smartengine-Technologie ist eine Infrastruktur für Gebäudeintelligenz und Lichtsteuerung. Herstellerneutrale LED-Leuchten werden mittels herkömmlicher Datenkabel mit Spannung versorgt und gleichzeitig multifunktionale Sensoren in diese Strom-Infrastruktur eingebunden. Die Sensordaten werden u.a. zur optimierten Steuerung von Licht, Heizung, Kühlung sowie Lüftung verwendet und liefern wertvolle Einblicke in die Gebäudenutzung.",
          imageUrl: "https://picsum.photos/600/300/?random",
        },
        {
          name: "Zumtobel",
          categories: ["Licht"],
          imageUrl: "https://picsum.photos/600/300/?random",
        },
        {
          name: "Landmarken AG",
          categories: ["Projektentwicklung"],
          imageUrl: "https://picsum.photos/600/300/?random",
        },
        {
          name: "w-tec",
          categories: ["Leuchten", "Umweltsensorik"],
          imageUrl: "https://picsum.photos/600/300/?random",
        },
        {
          name: "Zumtobel",
          categories: ["Leuchten", "Umweltsensorik"],
          imageUrl: "https://picsum.photos/600/300/?random",
        },
      ],
      path: mdiAccount,
    };
  },
  methods: {
    expand(partner) {
      partner.expanded = !partner.expanded;
      this.expandedPartner = this.expandedPartner.length === 0 ? partner.name : "";
    },
    categoryToTailwindClass(category) {
      switch (category) {
        case "Gebäudeautomation":
          return {
            "bg-gray-700": true,
            "mdi mdi-home-assistant": true,
          };
        case "Projektentwicklung":
          return {
            "bg-gray-300": true,
            "text-gray-800": true,
            "mdi mdi-home-city-outline": true,
          };
        case "Softwareplattform":
          return {
            "bg-gray-700": true,
            "mdi mdi-application-cog": true,
          };
        case "Licht":
          return {
            "bg-gray-300": true,
            "text-gray-800": true,
            "mdi mdi-lightbulb-on": true,
          };
      }
      return {};
    },
  },
};
</script>

<style scoped>
.mdi::before {
  padding-right: 0.2rem;
}

.view-header {
  position: fixed;
  width: 100vw;
  height: 2.5rem;
}

.hide {
  transform: translateY(100vw);
}

.column {
  padding-top: 2rem;
  transition: width 0.5s, height 0.2s, transform 1s, flex-grow 1s;
}


</style>
