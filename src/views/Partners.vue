<template>
  <div class="partners-container bg-opacity-105">
    <div class="container lg:mx-auto ">
      <div class="flex flex-wrap -mx-1 lg:-mx-5 ">
        <template v-for="(partner) in partners" :key="partner.name">
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
import CardExpanded from "./CardExpanded.vue";

const lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
const shuffle = (shouldShuffle, a) => {
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
      partners: sort([
        {
          name: "Aedifion",
          subtitle: "Die Zukunft der Gebäudeautomation",
          categories: ["Gebäudeautomation", "Softwareplattform"],
          description:
            "aedifion.io ist die hochspezialisierte Cloud-Plattform für Monitoring und Optimierung von technischer Gebäudeausrüstung und Energiesystemen. Das Werkzeug, um Ihre Betriebskosten zu senken und Ihre Energieeffizienz zu steigern – für Bestand und Neubau gleichermaßen.",
          imageUrl: "https://fsa.zobj.net/crop.php?r=98yxZ74OIR-rPJXM4oIv3hj9eU34XnO-jp6Pyv3NOxBwELuTkDU2JEVG4e_BJaNeL-cyhVnM_5ldJRj2eWN90t4z5GiYF_xguMntXWPks1J_vZy7fNFSioe1TuZXDR-lG3l6cG5ppzvq93UZ",
        },
        {
          name: "Zumtobel",
          subtitle: 'Innovative LED-Lichtlösungen und Lichtmanagement',
          categories: ["Leuchten"],
          imageUrl: "https://www.zumtobel.com/media/startpage/Kunst_2100x975_01.jpg",
        },
        // {
        //   name: "Landmarken AG",
        //   subtitle: "Wir entwickeln die Zukunft der Städte.",
        //   categories: ["Projektentwicklung"],
        //   imageUrl: "assets/img/csm_Moringa_HafenCity_vorne_bae70fe086.jpg",
        // },
        // {
        //   name: "Mennekes",
        //   imageUrl: "https://www.heisler-elektro.de/media/de/marke_hersteller_produkte/mennekes/cuyd.jpg"
        // },
        // {
        //   name: "MOON Power",
        //   subtitle: "Elektromobilität Alltag werden lassen",
        //   imageUrl: "https://autoundwirtschaft.at/NewsImages-870x580/pic31830_1-mooncity-in-der-sterneckstrasse.png"
        // },
        {
          name: "Essentry",
          subtitle: "Automatisierte Zugangsverwaltung für Gebäude",
          imageUrl: "https://images.channelpartner.de/bdb/3300312/765x431.jpg"
        },
        {
          name: "LUCEM Lichtbeton",
          subtitle: "Lorem Ipsum",
          categories: ["Gebäudeautomation", "Softwareplattform"],
          description:
            "---",
          imageUrl: "https://lucem.com/de/wp-content/uploads/sites/3/2020/08/LUCEM-Stairs-Bielefeld-Germany-25.jpeg",
        },
        {
          name: "Schneider Electric",
          subtitle: "Digitale Energie- und Automatisierungslösungen",
          categories: ["Leuchten", "Umweltsensorik"],
          imageUrl: "https://www.se.com/de/de/assets/521/media/158817/1200/SE_Banner_Blog_Barbara_Frei_IC-2400x706.jpg",
        },
        {
          name: "Signify",
          subtitle: "Das Potential von Licht entfesseln",
          categories: ["Leuchten", "Umweltsensorik"],
          imageUrl: "https://www.signify.com/content/dam/signify/en-aa/about/news/2020/20200908-signify-achieves-carbon-neutrality-and-sets-course-to-double-its-positive-impact-on-the-environment-and-society/blbw-2025-header-l.jpg",
        },
        {
          name: "S O NAH",
          subtitle: "Drive home, not circles",
          categories: ["Gebäudeautomation", "Softwareplattform"],
          description:
            "aedifion.io ist die hochspezialisierte Cloud-Plattform für Monitoring und Optimierung von technischer Gebäudeausrüstung und Energiesystemen. Das Werkzeug, um Ihre Betriebskosten zu senken und Ihre Energieeffizienz zu steigern – für Bestand und Neubau gleichermaßen.",
          imageUrl: "assets/img/bkg_ws_3.jpg",
        },
        // {
        //   name: "w-tec",
        //   categories: ["Leuchten"],
        //   description:
        //     "Die smartengine-Technologie ist eine Infrastruktur für Gebäudeintelligenz und Lichtsteuerung. Herstellerneutrale LED-Leuchten werden mittels herkömmlicher Datenkabel mit Spannung versorgt und gleichzeitig multifunktionale Sensoren in diese Strom-Infrastruktur eingebunden. Die Sensordaten werden u.a. zur optimierten Steuerung von Licht, Heizung, Kühlung sowie Lüftung verwendet und liefern wertvolle Einblicke in die Gebäudenutzung.",
        //   imageUrl: "https://wtec.io/wp-content/uploads/2019/09/Gymshark.jpg",
        // },
      ]),
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
