const sort = a => a.sort((a, b) => a > b ? -1 : 1);

const shuffle = (shouldShuffle, a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default {
    state() {
        return {
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
                  imageUrl: "https://architektenwelt.com/wp-content/uploads/2015/07/architektenwelt_LUCEM_lichtbeontfassade_6.jpg",
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
        }
    },
    getters: {
        byEscapedName: state => name => {
            return state.partners.find(partner => partner.name.toLowerCase().replaceAll(' ', '-') === name)
        }
    }
}