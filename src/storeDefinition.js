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
                  products: [{
                    name: "Edge Device",
                    imageUrl: "https://docs.aedifion.io/products/io/images/edge-device.png"
                  }],
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
                {
                  name: "wtec",
                  categories: ["Leuchten"],
                  description:
                    `wtec entwickelt zukunftsweisende Produkte mit klarem Fokus auf Nachhaltigkeit. Entwickler in Frankfurt / Rhein-Main und im Silicon Valley arbeiten konsequent an innovativen Produkten und Lösungen, die weltweit erfolgreich für führende BlueChip-Unternehmen eingesetzt werden. Mit den Entwicklungsschwerpunkten auf Technologie, Nutzen und Wirkung trägt wtec zur Schaffung von echten Werten und wahrer Gebäudeintelligenz bei.`,
                  imageUrl: "https://wtec.io/wp-content/uploads/2019/09/Gymshark.jpg",
                  moreImages: ["https://wtec.io/wp-content/uploads/2020/09/Topologie_neu.png"],
                  products: [{
                    name: "smartengine",
                    imageUrl: "https://wtec.io/wp-content/uploads/2019/07/smartengine-1-e1569848705959.png",
                    description: `Die smartengine-Technologie ist eine Infrastruktur für Gebäudeintelligenz und
                    Lichtsteuerung. Herstellerneutrale LED-Leuchten werden mittels herkömmlicher Datenkabel mit
                    Spannung versorgt und gleichzeitig multifunktionale Sensoren in diese Strom-Infrastruktur
                    eingebunden. Durch die Technologie werden zahlreiche Infrastrukturen ersetzt und vereinfacht
                    sowie hohe Einsparungen im Betrieb erzielt.`,
                    moreInfoUrl: 'https://wtec.io/de/smartengine/',
                  }, {
                    name: "smartdirector",
                    imageUrl: "https://wtec.io/wp-content/uploads/2019/07/director_frei-1024x274.png",
                    description: `Der smartdirector ist für die logische Verwaltung von bis zu 40 smartengines oder 2.000 Sensoren zuständig. Die gesammelten Sensordaten werden hier gespeichert. Weiterhin stehen eine integrierte, offene API und eine BACnet/IP Schnittstelle für Gebäudeleittechnik (GLT) bereit.`,
                    moreInfoUrl: 'https://wtec.io/de/smartdirector/'
                  }, {
                    name: "smartengine",
                    imageUrl: "https://wtec.io/wp-content/uploads/2019/07/smartengine-1-e1569848705959.png",
                    description: `Die smartengine-Technologie ist eine Infrastruktur für Gebäudeintelligenz und
                    Lichtsteuerung. Herstellerneutrale LED-Leuchten werden mittels herkömmlicher Datenkabel mit
                    Spannung versorgt und gleichzeitig multifunktionale Sensoren in diese Strom-Infrastruktur
                    eingebunden. Durch die Technologie werden zahlreiche Infrastrukturen ersetzt und vereinfacht
                    sowie hohe Einsparungen im Betrieb erzielt.`
                  }],
                  contact: {
                    name: "Henning von Gagern",
                    position: "",
                    imageUrl: "https://wtec.io/wp-content/uploads/2019/10/Henning_whiteBackground.png",
                    email: "HvonGagern@wtec.io"
                  },
                  liveData: {
                    url: "https://1src.tech/api/things/12845/state",
                    mapping: {
                      inputPower: {
                        unit: "mW",
                        label: "Eingehende Leistung",
                        icon: "mdi-lightning-bolt-outline"
                      },
                      outputPower: {
                        unit: "mW",
                        label: "Ausgehende Leistung",
                        icon: "mdi-lightning-bolt-outline"
                      },
                      enginesConnected: {
                        label: "Erreichbare Smartengines",
                        icon: "mdi-server",
                        convert: value => `${value} von 2`
                      },
                      ceilingTemperature: {
                        unit: "°C",
                        label: "Deckentemperatur",
                        icon: "mdi-temperature-celsius",
                      },
                      lastMotion: {
                        unit: "",
                        label: "Letzte Bewegung",
                        icon: "mdi-run",
                        convert(value) {
                          let secondsAgo = Math.floor(Date.now()/1000 - value);
                          let hours = Math.floor(secondsAgo / 60 / 60);
                          let minutes = Math.floor(secondsAgo / 60 % 60);
                          if(hours > 0)
                            return `vor ${hours} Stunde${hours > 1 ? 'n': ''}, ${minutes} Minute${minutes == 1 ? '' : 'n'}`;
                          else
                            return `vor ${minutes} Minute${minutes == 1 ? '' : 'n'}`;
                        }
                      }
                    }
                  }
                  
                },
              ]),
        }
    },
    getters: {
        byEscapedName: state => name => {
            return state.partners.find(partner => partner.name.toLowerCase().replaceAll(' ', '-') === name)
        }
    }
}