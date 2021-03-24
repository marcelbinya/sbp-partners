const sort = (a) => a.sort((a, b) => (a.name < b.name ? -1 : 1));

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export default {
  state() {
    return {
      partners: shuffle([
        {
          name: "aedifion",
          subtitle: "Die Zukunft der Gebäudeautomation",
          categories: ["Gebäudeautomation", "Softwareplattform"],
          contact: {
            email: "sales@aedifion.com",
          },
          description:
            "Gebäude sind komplexe Ökosysteme mit viel Potenzial für mehr Effizienz und Nachhaltigkeit. Daran setzt aedifion als Unternehmen an und möchten mit seiner Cloud-Plattform dazu beitragen, dass Immobilien digitaler, nachhaltiger und transparenter werden. Deshalb vernetzt aedifion sämtliche Gewerke im Bestand und im Neubau, um Gebäude einfacher zu betreiben, datenbasiert zu optimieren und fortschrittlich zu regeln. Das Team arbeitet dafür mit modernsten Technologien, wie etwa künstlicher Intelligenz, und bündelt Expertise in den Bereichen IT und Ingenieurswissenschaften. Dadurch werden Wertsteigerung, Kostenreduktion und Zukunftsfähigkeit für Gebäude möglich. Für einen optimierten Gebäudebetrieb braucht man zunächst eine lückenlose und umfassende Datenverfügbarkeit. Das schafft aedifion Plug-and-Play durch die unkomplizierte installation eines Edge Device im Gebäude, der sämtliche technische Gebäudeausrüstung vernetzt und die jeweiligen Daten auf der Cloud-Plattform verfügbar macht. Dieser Data Lake ist die Grundlage für umfassende Betriebsoptimierung. Mit Hilfe von künstlicher Intelligenz werden die Daten strukturiert und ausgewertet. Das Betreiberteam erhält dadurch datenbasierte Handlungsempfehlungen für eine effiziente Optimierung. Durch das Add-on aedifion.controls können außerdem eigene Regelalgorithmen eingespielt und so ein effizienter Dauerbetrieb gewährleistet werden.  Durch diese cloudbasierte Art der Vernetzung werden Immobilien zum echten Smart Building.",
          imageUrl:
            "https://fsa.zobj.net/crop.php?r=98yxZ74OIR-rPJXM4oIv3hj9eU34XnO-jp6Pyv3NOxBwELuTkDU2JEVG4e_BJaNeL-cyhVnM_5ldJRj2eWN90t4z5GiYF_xguMntXWPks1J_vZy7fNFSioe1TuZXDR-lG3l6cG5ppzvq93UZ",
          products: [
            {
              name: "Edge Device",
              description: `Das Edge Device ist ein kleiner Industrie-PC der Plug-and-Play an die Technische Gebäudeausrüstung angeschlossen wird. Er verbindet sämtliche Sensoren, Aktoren und Steuerungsgeräte mittel der unterstützten Protokolle und ermöglicht die Datenverfügbarkeit auf der Cloud-Plattform.`,
              imageUrl:
                "https://docs.aedifion.io/products/io/images/edge-device.png",
            },
            {
              name: "aedifion.io",
              description:
                "aedifion.io ist die hochspezialisierte Cloud-Plattform für Datenerfassung und Datenbereitstellung im Gebäude. Dadurch werden Monitoring und Optimierung von technischer Gebäudeausrüstung und Energiesystemen möglich. Es ist das digitale Werkzeug, um Betriebskosten zu senken und die Energieeffizienz des Gebäudes zu steigern – für Bestand und Neubau gleichermaßen.",
              imageUrl:
                "https://docs.aedifion.io/products/io/images/edge-device.png",
            },
            {
              name: "aedifion.analytics",
              description:
                "Das Add-on zur Cloud-Plattform aedifion.analytics ermöglicht die cloudbasierte Betriebsoptimierung mit Hilfe von künstlicher Intelligenz. Das Tool ist der Performance Coach im Gebäude, der Optimierungsempfehlungen auf Grundlage der erhobenen Daten entwickelt und so die Betriebsmannschaft entlastet und unterstützt.",
              imageUrl:
                "https://docs.aedifion.io/products/io/images/edge-device.png",
            },
          ],
          links: [
            {
              label: "Dokumentation",
              url: "https://docs.aedifion.io/",
              icon: "mdi-api",
            },
            {
              label: "LinkedIn",
              url: "https://www.linkedin.com/company/aedifion/",
              icon: "mdi-linkedin",
            },
            {
              label: "Medium",
              url: "https://medium.com/@aedifion",
              icon: "mdi-web",
            },
          ],
          tags: ["Cloud Plattform", "Gebäudeoptimierung"],
          liveData: [
            {
              thingId: 12900,
              mapping: {
                value: {
                  to: "airQuality",
                  unit: "",
                  label: "Luftqualität",
                  convert: value => Math.floor(value*10)/10,
                  icon: "mdi-air-filter",
                },
              },
            }, {
              thingId: 12906,
              mapping: {
                value: {
                  to: "brightness",
                  unit: "lm",
                  label: "Helligkeit",
                  convert: value => Math.floor(value*10)/10,
                  icon: "mdi-brightness-7",
                },
              },
            }, {
              thingId: 12905,
              mapping: {
                value: {
                  to: "temperature",
                  unit: "°C",
                  label: "Temperatur 1",
                  convert: value => Math.floor(value*10)/10,
                  icon: "mdi-temperature-celsius",
                },
              },
            }, {
              thingId: 12904,
              mapping: {
                value: {
                  to: "humidity",
                  unit: "%rH",
                  label: "Feuchte 1",
                  convert: value => Math.floor(value*10)/10,
                  icon: "mdi-air-humidifier",
                },
              },
            }, {
              thingId: 12902,
              mapping: {
                value: {
                  to: "co2",
                  unit: "ppm",
                  label: "co2",
                  convert: value => Math.floor(value*10)/10,
                  icon: "mdi-molecule-co2",
                },
              },
            },
          ],
        },
        {
          name: "Enlighted",
          subtitle: "Beyond Smart Buildings. Brilliant Buildings",
          imageUrl:
            "https://www.enlightedinc.com/wp-content/uploads/2016/06/iot-applications-space-info3.jpg",
          contact: {
            email: "info@example.com",
          },
          tags: ["Licht", "Bewegung"],
        },
        {
          name: "formitas",
          subtitle: "Wir digitalisieren die Bauwelt",
          tags: ["BIM", "AR"],
          contact: {
            email: "info@example.com",
          },
          imageUrl:
            "https://www.schau-ins-rheinland.de/wp-content/uploads/2019/07/formitas-1.jpg",
        },
        {
          name: "Compleo",
          subtitle: "plug in the future.",
          contact: {
            email: "info@example.com",
          },
          imageUrl:
            "https://www.electrive.net/wp-content/uploads/2019/10/compleo-neue-ladestation-charging-station.png",
          tags: ["E-Mobility"],
        },
        {
          name: "Zumtobel",
          subtitle: "Innovative Lichtlösungen",
          contact: {
            email: "info@example.com",
          },
          tags: ["Licht"],
          imageUrl:
            "https://www.zumtobel.com/media/startpage/Kunst_2100x975_01.jpg",
        },
        // {
        //   name: "Landmarken AG",
        //   subtitle: "Wir entwickeln die Zukunft der Städte.",
        //   categories: ["Projektentwicklung"],
        //   imageUrl: "assets/img/csm_Moringa_HafenCity_vorne_bae70fe086.jpg",
        // },
        {
          name: "Mennekes",
          imageUrl:
            "https://www.chargeupyourday.de/fileadmin/_processed_/7/2/csm_content_installateur_dienstwagen_600x400_75a9955576.jpg",
          contact: {
            email: "info@example.com",
          },
          tags: ["E-Mobility", "Ladesäulen"],
        },
        {
          name: "MOON Power",
          subtitle: "Elektromobilität Alltag werden lassen",
          imageUrl:
            "https://autoundwirtschaft.at/NewsImages-870x580/pic31830_1-mooncity-in-der-sterneckstrasse.png",
          contact: {
            email: "info@example.com",
          },
          tags: ["E-Mobility", "Ladesäulen"],
        },
        {
          name: "Phoenix Contact",
          subtitle: "Lösungen in der Elektrotechnik & Automation",
          imageUrl:
            "https://www.electrive.net/wp-content/uploads/2020/06/phoenix-contact-polen-poland-2020-01-min.png",
          contact: {
            email: "info@example.com",
          },
          tags: ["Elektronik"],
        },
        {
          name: "American Tower",
          subtitle: "Drahtlose Infrastruktur für eine vernetzte Welt",
          description: `Founded in 1995, American Tower Corporation, one of the largest global Real Estate Investment Trusts (REITs), is a leading independent owner, operator and developer of wireless and broadcast communications real estate. Our global portfolio includes approximately 180,000 communications sites, including nearly 41,000 properties in the United States and approximately 139,000 properties internationally. In addition to leasing space on wireless and broadcast towers, we provide customized solutions through our in-building systems, outdoor distributed antenna systems and other right-of-way options, managed rooftops and services that speed network deployment.
                  Headquartered in Boston, Massachusetts, American Tower has offices across the United States and in Argentina, Brazil, Burkina Faso, Chile, Colombia, Costa Rica, France, Germany, Ghana, India, Kenya, Mexico, Niger, Nigeria, Paraguay, Peru, South Africa and Uganda.`,
          contact: {
            name: "Dr. Maike Meyer-Cutler",
            position: "Head of Strategy and Innovation",
            email: "Maike.Meyer-Cutler@americantower.com",
          },
          imageUrl:
            "https://americantower.com.de//Assets/beta.americantower.com/uploads/images/heroes/us-tower.jpg",
          tags: ["Konnektivität"],
        },
        {
          name: "Essentry",
          subtitle: "Automatisierte Zugangsverwaltung für Gebäude",
          imageUrl:
            "https://pyramid.de/wp-content/uploads/2020/05/Essentry001_web.jpg",
          contact: {
            email: "info@example.com",
          },
          tags: ["Cloud Plattform", "Zutrittskontrolle"],
        },
        {
          name: "LUCEM Lichtbeton",
          subtitle: "Einzigartiges Lichtdesign",
          categories: ["Gebäudeautomation", "Softwareplattform"],
          description: "---",
          imageUrl:
            "https://lucem.com/de/wp-content/uploads/sites/3/revslider/slider-2/Babor.jpeg",
          contact: {
            email: "info@example.com",
          },
          tags: ["Licht"],
        },
        {
          name: "Schneider Electric",
          subtitle: "Digitale Energie- und Automatisierungslösungen",
          categories: ["Leuchten", "Umweltsensorik"],
          imageUrl:
            "https://www.se.com/de/de/assets/521/media/158817/1200/SE_Banner_Blog_Barbara_Frei_IC-2400x706.jpg",
          contact: {
            email: "info@example.com",
          },
          tags: ["Elektronik"],
        },
        {
          name: "Signify",
          subtitle: "The meaning of light",
          categories: ["Leuchten", "Umweltsensorik"],
          imageUrl:
            "https://www.signify.com/b-dam/signify/de-de/about/news/2020/20201218-the-new-uv-c-table-lamp-from-philips/philips-uv-c-b2c-livingroom.jpg",
          contact: {
            email: "info@example.com",
          },
          tags: ["Plattform", "Licht"],
        },
        {
          name: "S O NAH",
          subtitle: "Drive home, not circles",
          categories: ["Gebäudeautomation", "Softwareplattform"],
          contact: {
            email: "info@example.com",
          },
          coverImageUrl: ["/assets/img/sonah-parking.png"],
          description:
            "S O NAH ist ein Aachener Unternehmen, welches die Parkplatzsuche und das Parkplatzmanagement mithilfe von Daten und der Entwicklung von Hard- und Softwarelösungen optimiert. Hierzu integriert S O NAH smarte Sensorik in die vorhandene Infrastruktur und nutzt einen Machine Learning Algorithmus. Mithilfe des S O NAH-Systems können gleichzeitig der Echtzeit-Belegungszustand von Einzelstellplätzen (Stellplatzdetektion) sowie die Anzahl der Durchfahrten ermittelt werden. Die generierten Informationen können online abgerufen und in jedes bestehende Parkleitsystem eingebunden werden.",
          imageUrl: "assets/img/bkg_ws_3.jpg",
          products: [
            {
              name: "Parkplatzsensor",
              imageUrl:
                "https://sonah.tech/images/long_term_asset_2x.jpg?crc=3891109166",
              description: `Lorem Ipsum`,
              moreInfoUrl: "https://sonah.tech/technology.html",
            },
          ],
          tags: ["Parkplatzsensorik"],
        },
        {
          name: "Thing-it",
          subtitle: "",
          imageUrl:
            "https://www.homeandsmart.de/var/site/storage/images/_aliases/fixed_col_12/1/2/7/2/272721-1-ger-DE/thing-it-cloud-plattform-mit-app.jpg",
          contact: {
            email: "info@example.com",
          },
          tags: ["Cloud Plattform", "App"],
        },
        {
          name: "wtec",
          categories: ["Leuchten"],
          subtitle: "Wir verbinden Nutzer und Gebäude",
          description: `wtec entwickelt zukunftsweisende Produkte mit klarem Fokus auf Nachhaltigkeit. Entwickler in Frankfurt / Rhein-Main und im Silicon Valley arbeiten konsequent an innovativen Produkten und Lösungen, die weltweit erfolgreich für führende BlueChip-Unternehmen eingesetzt werden. Mit den Entwicklungsschwerpunkten auf Technologie, Nutzen und Wirkung trägt wtec zur Schaffung von echten Werten und wahrer Gebäudeintelligenz bei.`,
          imageUrl:
            "https://wtec.io/wp-content/uploads/2020/10/sensornetzwerk_alone.png",
          moreImages: [
            {
              title: "Topologieübersicht",
              url:
                "https://wtec.io/wp-content/uploads/2020/09/Topologie_neu.png",
            },
          ],
          tags: ["Licht"],
          products: [
            {
              name: "smartengine",
              imageUrl:
                "https://wtec.io/wp-content/uploads/2019/07/smartengine-1-e1569848705959.png",
              description: `Versorgung und Steuerung von herstellerunabhängigen LED-Leuchten und smartsensoren. Als Zentraleinheit können bis zu 48 Sensoren angebunden werden.`,
              moreInfoUrl: "https://wtec.io/de/smartengine/",
            },
            {
              name: "smartdirector",
              imageUrl:
                "https://wtec.io/wp-content/uploads/2019/07/director_frei-1024x274.png",
              description: `Der smartdirector ist für die logische Verwaltung von bis zu 40 smartengines oder 2.000 Sensoren zuständig. Die gesammelten Sensordaten werden hier gespeichert. Eine offene API und BACnet/IP Schnittstelle binden das System in die Gebäudeleittechnik ein.`,
              moreInfoUrl: "https://wtec.io/de/smartdirector/",
            },
            {
              name: "smartsensors",
              imageUrl:
                "https://wtec.io/wp-content/uploads/2019/07/teaser_sensors_0-284x300.png",
              description: `Der Einsatz von Sensoren macht Gebäude intelligent und es entsteht ein feinmaschiges Sensornetz. Dies ermöglicht ein stets ausgewogenes Lichtbild und sorgt für maximale Energieeffizienz. Einzigartig ist die kontinuierliche Erfassung und Auswertung von Daten zu Helligkeit, Temperatur und Präsenz an jedem Sensor in Echtzeit.`,
              moreInfoUrl: "https://wtec.io/de/smartsensors/",
            },
          ],
          contact: {
            name: "Henning von Gagern",
            position: "Senior Vice President Sales & Marketing",
            imageUrl:
              "https://wtec.io/wp-content/uploads/2019/10/Henning_whiteBackground.png",
            email: "HvonGagern@wtec.io",
          },
          links: [
            {
              label: "wtec.io",
              url: "https://wtec.io",
            },
          ],
          liveData: {
            thingId: 12845,
            mapping: {
              inputPower: {
                unit: "mW",
                label: "Eingehende Leistung",
                icon: "mdi-lightning-bolt-outline",
              },
              outputPower: {
                unit: "mW",
                label: "Ausgehende Leistung",
                icon: "mdi-lightning-bolt-outline",
              },
              enginesConnected: {
                label: "Erreichbare Smartengines",
                icon: "mdi-server",
                convert: (value) => `${value} von 2`,
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
                  let secondsAgo = Math.floor(Date.now() / 1000 - value);
                  let hours = Math.floor(secondsAgo / 60 / 60);
                  let minutes = Math.floor((secondsAgo / 60) % 60);
                  if (hours > 0)
                    return `vor ${hours} Stunde${
                      hours > 1 ? "n" : ""
                    }, ${minutes} Minute${minutes == 1 ? "" : "n"}`;
                  else return `vor ${minutes} Minute${minutes == 1 ? "" : "n"}`;
                },
              },
            },
          },
        },
      ]),
    };
  },
  getters: {
    byEscapedName: (state) => (name) => {
      return state.partners.find(
        (partner) => partner.name.toLowerCase().replaceAll(" ", "-") === name
      );
    },
  },
};
