const sort = a => a.sort((a, b) => a.name < b.name ? -1 : 1);

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default {
    state() {
        return {
            partners: shuffle([
                {
                  name: "Aedifion",
                  subtitle: "Die Zukunft der Gebäudeautomation",
                  categories: ["Gebäudeautomation", "Softwareplattform"],
                  description:
                    `Wir möchten das Energiesystem der Zukunft aktiv mitgestalten und entwickeln dafür Werkzeuge zur cloudbasierten Optimierung & Regelung von bestehender Gebäude- und Energiesystemtechnik. Unsere Werte liegen insbesondere in der ökologischen Nachhaltigkeit, einem vertrauenvollen Arbeitsumfeld sowie einer offenen, direkten und wertschätzenden Kommunikation untereinander. Wir arbeiten selbstständig & teamorientiert an unseren unterschiedlichen Herausforderungen. Ein soziales Miteinander ist dabei Schlüsselfaktor für unseren gemeinsamen Erfolg.`,
                  imageUrl: "https://fsa.zobj.net/crop.php?r=98yxZ74OIR-rPJXM4oIv3hj9eU34XnO-jp6Pyv3NOxBwELuTkDU2JEVG4e_BJaNeL-cyhVnM_5ldJRj2eWN90t4z5GiYF_xguMntXWPks1J_vZy7fNFSioe1TuZXDR-lG3l6cG5ppzvq93UZ",
                  products: [{
                    name: "Edge Device",
                    imageUrl: "https://docs.aedifion.io/products/io/images/edge-device.png",
                    description: "Das Edge-Device ist ein zertifizierter Industrie-PC, welcher sich mit sämtlichen Sensoren, Aktoren und Steuergeräten mittels der unterstützten Protokolle verbindet.",
                    moreInfoUrl: "https://docs.aedifion.io/products/io/edge-device/"
                  }, {
                    name: "aedifion.io Platform",
                    imageUrl: "https://www.aedifion.com/fileadmin/Compressed_Images/aed_mockup_io_optimized.png",
                    description: "aedifion.io ist die hochspezialisierte Cloud-Plattform für Monitoring und Optimierung von technischer Gebäudeausrüstung und Energiesystemen. Das Werkzeug, um Ihre Betriebskosten zu senken und Ihre Energieeffizienz zu steigern – für Bestand und Neubau gleichermaßen.",
                    moreInfoUrl: "https://docs.aedifion.io/products/io/edge-device/"
                  }],
                  tags: ["Cloud Plattform", "Gebäudeoptimierung"]
                },
                {
                  name: "Enlighted",
                  subtitle: "Beyond Smart Buildings. Brilliant Buildings",
                  imageUrl: "https://www.enlightedinc.com/wp-content/uploads/2016/06/iot-applications-space-info3.jpg",
                  tags: ["Licht", "Bewegung"]
                },
                {
                  name: "formitas",
                  subtitle: "Wir digitalisieren die Bauwelt",
                  tags: ["BIM", "AR"],
                  imageUrl: "https://www.schau-ins-rheinland.de/wp-content/uploads/2019/07/formitas-1.jpg", 
                },
                {
                  name: "Compleo",
                  subtitle: "plug in the future.",
                  imageUrl: "https://www.electrive.net/wp-content/uploads/2019/10/compleo-neue-ladestation-charging-station.png",
                  tags: ["E-Mobility"]
                },
                {
                  name: "Zumtobel",
                  subtitle: 'Innovative Lichtlösungen',
                  tags: ["Licht"],
                  imageUrl: "https://www.zumtobel.com/media/startpage/Kunst_2100x975_01.jpg",
                },
                // {
                //   name: "Landmarken AG",
                //   subtitle: "Wir entwickeln die Zukunft der Städte.",
                //   categories: ["Projektentwicklung"],
                //   imageUrl: "assets/img/csm_Moringa_HafenCity_vorne_bae70fe086.jpg",
                // },
                {
                  name: "Mennekes",
                  imageUrl: "https://www.chargeupyourday.de/fileadmin/_processed_/7/2/csm_content_installateur_dienstwagen_600x400_75a9955576.jpg",
                  tags: ["E-Mobility", "Ladesäulen"]
                },
                {
                  name: "MOON Power",
                  subtitle: "Elektromobilität Alltag werden lassen",
                  imageUrl: "https://autoundwirtschaft.at/NewsImages-870x580/pic31830_1-mooncity-in-der-sterneckstrasse.png",
                  tags: ["E-Mobility", "Ladesäulen"]
                },
                {
                  name: "Phoenix Contact",
                  subtitle: "Lösungen in der Elektrotechnik & Automation",
                  imageUrl: "https://www.electrive.net/wp-content/uploads/2020/06/phoenix-contact-polen-poland-2020-01-min.png",
                  tags: ["Elektronik"]
                },
                {
                  name: "American Tower",
                  subtitle: "Drahtlose Infrastruktur für eine vernetzte Welt",
                  imageUrl: "https://americantower.com.de//Assets/beta.americantower.com/uploads/images/heroes/us-tower.jpg",
                  tags: ["Konnektivität"]
                },
                {
                  name: "Essentry",
                  subtitle: "Automatisierte Zugangsverwaltung für Gebäude",
                  imageUrl: "https://pyramid.de/wp-content/uploads/2020/05/Essentry001_web.jpg",
                  tags: ["Cloud Plattform", "Zutrittskontrolle"]
                },
                {
                  name: "LUCEM Lichtbeton",
                  subtitle: "Einzigartiges Lichtdesign",
                  categories: ["Gebäudeautomation", "Softwareplattform"],
                  description:
                    "---",
                  imageUrl: "https://lucem.com/de/wp-content/uploads/sites/3/revslider/slider-2/Babor.jpeg",
                  tags: ["Licht"]
                },
                {
                  name: "Schneider Electric",
                  subtitle: "Digitale Energie- und Automatisierungslösungen",
                  categories: ["Leuchten", "Umweltsensorik"],
                  imageUrl: "https://www.se.com/de/de/assets/521/media/158817/1200/SE_Banner_Blog_Barbara_Frei_IC-2400x706.jpg",
                  tags: ["Elektronik"]
                },
                {
                  name: "Signify",
                  subtitle: "The meaning of light",
                  categories: ["Leuchten", "Umweltsensorik"],
                  imageUrl: "https://www.signify.com/b-dam/signify/de-de/about/news/2020/20201218-the-new-uv-c-table-lamp-from-philips/philips-uv-c-b2c-livingroom.jpg",
                  tags: ["Plattform", "Licht"]
                },
                {
                  name: "S O NAH",
                  subtitle: "Drive home, not circles",
                  categories: ["Gebäudeautomation", "Softwareplattform"],
                  description:
                    "S O NAH ist ein Aachener Unternehmen, welches die Parkplatzsuche und das Parkplatzmanagement mithilfe von Daten und der Entwicklung von Hard- und Softwarelösungen optimiert. Hierzu integriert S O NAH smarte Sensorik in die vorhandene Infrastruktur und nutzt einen Machine Learning Algorithmus. Mithilfe des S O NAH-Systems können gleichzeitig der Echtzeit-Belegungszustand von Einzelstellplätzen (Stellplatzdetektion) sowie die Anzahl der Durchfahrten ermittelt werden. Die generierten Informationen können online abgerufen und in jedes bestehende Parkleitsystem eingebunden werden.",
                  imageUrl: "assets/img/bkg_ws_3.jpg",
                  products: [{
                    name: "Parkplatzsensor",
                    imageUrl: "https://sonah.tech/images/long_term_asset_2x.jpg?crc=3891109166",
                    description: `Lorem Ipsum`,
                    moreInfoUrl: 'https://sonah.tech/technology.html'
                  }],
                  tags: ["Parkplatzsensorik"]
                },
                {
                  name: "Thing-it",
                  subtitle: "Buildings. People. Things. Connected.",
                  imageUrl: "https://www.homeandsmart.de/var/site/storage/images/_aliases/fixed_col_12/1/2/7/2/272721-1-ger-DE/thing-it-cloud-plattform-mit-app.jpg",
                  tags: ["Cloud Plattform", "App"]
                },
                {
                  name: "wtec",
                  categories: ["Leuchten"],
                  subtitle: "Wir verbinden Nutzer und Gebäude",
                  description:
                    `wtec entwickelt zukunftsweisende Produkte mit klarem Fokus auf Nachhaltigkeit. Entwickler in Frankfurt / Rhein-Main und im Silicon Valley arbeiten konsequent an innovativen Produkten und Lösungen, die weltweit erfolgreich für führende BlueChip-Unternehmen eingesetzt werden. Mit den Entwicklungsschwerpunkten auf Technologie, Nutzen und Wirkung trägt wtec zur Schaffung von echten Werten und wahrer Gebäudeintelligenz bei.`,
                  imageUrl: "https://wtec.io/wp-content/uploads/2020/10/sensornetzwerk_alone.png",
                  moreImages: [{
                    title: "Topologieübersicht",
                    url: "https://wtec.io/wp-content/uploads/2020/09/Topologie_neu.png"
                  }],
                  tags: ["Licht"],
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