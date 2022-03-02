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
          subtitle: "Wir bringen Gebäude in die Cloud",
          categories: ["Gebäudeautomation", "Softwareplattform"],
          contact: {
            email: "sales@aedifion.com",
          },
          description:
            "Gebäude sind komplexe Ökosysteme mit viel Potenzial für mehr Effizienz und Nachhaltigkeit. Daran setzt aedifion als Unternehmen an und möchten mit seiner Cloud-Plattform dazu beitragen, dass Immobilien digitaler, nachhaltiger und transparenter werden. Deshalb vernetzt aedifion sämtliche Gewerke im Bestand und im Neubau, um Gebäude einfacher zu betreiben, datenbasiert zu optimieren und fortschrittlich zu regeln. Das Team arbeitet dafür mit modernsten Technologien, wie etwa künstlicher Intelligenz, und bündelt Expertise in den Bereichen IT und Ingenieurswissenschaften. Dadurch werden Wertsteigerung, Kostenreduktion und Zukunftsfähigkeit für Gebäude möglich. Für einen optimierten Gebäudebetrieb braucht man zunächst eine lückenlose und umfassende Datenverfügbarkeit. Das schafft aedifion Plug-and-Play durch die unkomplizierte installation eines Edge Device im Gebäude, der sämtliche technische Gebäudeausrüstung vernetzt und die jeweiligen Daten auf der Cloud-Plattform verfügbar macht. Dieser Data Lake ist die Grundlage für umfassende Betriebsoptimierung. Mit Hilfe von künstlicher Intelligenz werden die Daten strukturiert und ausgewertet. Das Betreiberteam erhält dadurch datenbasierte Handlungsempfehlungen für eine effiziente Optimierung. Durch das Add-on aedifion.controls können außerdem eigene Regelalgorithmen eingespielt und so ein effizienter Dauerbetrieb gewährleistet werden.  Durch diese cloudbasierte Art der Vernetzung werden Immobilien zum echten Smart Building.",
          imageUrl:
            "https://www.aedifion.com/fileadmin/_processed_/9/7/csm_aedifion-mockup-data-inspector_cb6169e4fb.png",
          products: [
            {
              name: "Edge Device",
              description: `Das Edge Device ist ein kleiner Industrie-PC der Plug-and-Play an die Technische Gebäudeausrüstung angeschlossen wird. Er verbindet sämtliche Sensoren, Aktoren und Steuerungsgeräte mittel der unterstützten Protokolle und ermöglicht die Datenverfügbarkeit auf der Cloud-Plattform.`,
              imageUrl:
                "https://docs.aedifion.io/en/products/edge-device/images/edge-device.png",
            },
            {
              name: "aedifion.io",
              description:
                "aedifion.io ist die hochspezialisierte Cloud-Plattform für Datenerfassung und Datenbereitstellung im Gebäude. Dadurch werden Monitoring und Optimierung von technischer Gebäudeausrüstung und Energiesystemen möglich. Es ist das digitale Werkzeug, um Betriebskosten zu senken und die Energieeffizienz des Gebäudes zu steigern – für Bestand und Neubau gleichermaßen.",
              imageUrl:
                "https://docs.aedifion.io/en/products/io/images/integrations/dashboard.png",
            },
            {
              name: "aedifion.analytics",
              description:
                "Das Add-on zur Cloud-Plattform aedifion.analytics ermöglicht die cloudbasierte Betriebsoptimierung mit Hilfe von künstlicher Intelligenz. Das Tool ist der Performance Coach im Gebäude, der Optimierungsempfehlungen auf Grundlage der erhobenen Daten entwickelt und so die Betriebsmannschaft entlastet und unterstützt.",
              imageUrl:
                "https://docs.aedifion.io/en/products/analytics/images/aedifion_analytics-overview.png",
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
              thingId: 12944,
              mapping: {
                value: {
                  to: "airQuality",
                  unit: "ppm CO2",
                  label: "Luftqualität",
                  convert: value => Math.floor(value*10)/10,
                  icon: "mdi-air-filter",
                },
              },
            }, {
              thingId: 12950,
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
              thingId: 12957,
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
              thingId: 12948,
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
              thingId: 12958,
              mapping: {
                value: {
                  to: "valve",
                  unit: "%",
                  label: "Ventilstellung",
                  convert: value => Math.floor(value*10)/10,
                  icon: "mdi-valve",
                },
              },
            },
          ],
        },
        {
          name: "Schindler",
          subtitle: "We Elevate",
          imageUrl:
            "https://www.schindler.de/content/dam/website/global/homepage-hero/buildings/schindler-omnitower-frankfurt.jpg/_jcr_content/renditions/original.image_file.1920.1080.file/schindler-omnitower-frankfurt.jpg",
          contact: {
            email: "info@example.com",
          },
          description: "Der 1874 gegründete Schindler Konzern ist einer der weltweit führenden Anbieter von Aufzügen und Fahrtreppen und damit einhergehenden Dienstleistungen. Seine innovativen und umweltfreundlichen Zutritts- und Beförderungssysteme prägen maßgeblich die Mobilität einer urbanen Gesellschaft. Täglich bewegt Schindler mit seinen Mobilitätslösungen 1,5 Milliarden Menschen auf der ganzen Welt. Hinter diesem Erfolg stehen mehr als 65.000 Mitarbeitende in über 100 Ländern. Schindler Deutschland wurde 1906 als erste Auslandstochter gegründet und ist heute mit mehr als 4.000 Mitarbeitenden an 70 Standorten präsent. ",
          products: [
            {
              name:"PORT 4D",
              description: "Ist die neuste Generation des effizienten Verkehrsmanagementsystems von Schindler, welches umfassende Zutritts-, Kommunikations-, Sicherheits- und Energiesparmöglichkeiten schafft. PORT hat die Art und Weise wie sich Personen reibungslos und effizient in Gebäuden horizontal durch Türen und vertikal durch den Aufzug bewegen, revolutioniert. ",
              imageUrl:
              "",
            },
            {
              name:"PORT Elevator",
              description: "PORT Elevator ist die intelligente, als Zielrufsteuerung ausgelegte Aufzugssteuerung im Rahmen von PORT 4D. Es verbessert die Effizienz Ihrer Anlagen durch eine intelligente Fahrtensteuerung und erweitert die Möglichkeiten von Aufzügen. Diese können Teil eines Zutrittssystems sein und eine Vielzahl von Sonderfunktionen ermöglichen. ",
              imageUrl:
              "",
            },
            {
              name:"PORT 1 / PORT 4 Terminals",
              description: "Das PORT Aufzugsterminal ist als Kontrollterminal auf den Etagen ein moderner „Schindler Lift-Boy“ (Aufzugszielruf; Orientierungshilfen; Zutrittskontrolle) ",
              imageUrl:
              "",
            },
            {
              name:"PORT Access",
              description: "PORT Access ist das Zutrittskontrollsystem, mit umfassender Video-Gegensprechfunktionalität von PORT 4D. Durch die vollständige Integration mit PORT Elevator, wird die Steuerung des vertikalen und horizontalen Verkehrs im Gebäude möglich. ",
              imageUrl:
              "",
            },
            {
              name:"PORT 1Mini Terminal",
              description: "Das PORT 1 mini ist ein Zutrittskartenleser mit digitalem Klingelschild. \n (Entriegelung der Tür über ein digitales Zutrittsmedium [Smartphone mit myPORT-App, RFID Chip]; Klingelfunktion) ",
              imageUrl:
              "",
            },
            {
              name:"PORT 4Home Terminal",
              description: "PORT 4Home Terminal Das PORT 4 Home in Wohnungen /Büros ist ein persönliches Aufzugskontrollterminal mit integrierter Videogegensprechanlage.\n(Bereitstellung von Aufzügen für Gäste; Aufzugsruf aus der Wohnung; Videogegensprechverbindung zu Hauptzugängen; Klingelaufschaltung) ",
              imageUrl:
              "",
            },
            {
              name:"PORT 4Visitor Terminal",
              description: "Das PORT 4 Visitor ist ein modernes Multifunktionsterminal für Hauptzugänge. (Sprach- und Videoanruf; Digitales Verzeichnis von Bewohner:innen; Entriegelung der Tür und automatischer Aufzugsruf über Ihr digitales Zutrittsmedium [Smartphone mit myPORT-App, RFID Chip]; Gästezutritt[CCC / QR-Leser]) ",
              imageUrl:
              "",
            },
            {
              name:"myPORT",
              description: "Mit myPORT können autorisierte App-Nutzer*innen, Ihr Smartphone als Schlüssel zum Gebäude und als Gegensprechanlage verwenden. (Türen entriegeln, manuell aus der Ferne oder bei Annäherung; Aufzugszielruf, bei Annäherung; Videogegensprechen, von Überall; Gästesteuerung, von Überall) ",
              imageUrl: "https://us.schindler.com/content/dam/website/us/images/media/myport-mobile-app-turnstile.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg./cq5dam.web.1280.1280.jpeg",
            },
            {
              name:"CoLab",
              description: "Schindler CoLab ist eine offene, sichere und modulare Toolbox zur Gebäudeintegration. Sie ermöglicht,  Schindlerprodukte nahtlos in Gebäudeleittechnik zu integrieren und mit anderen Produkten zu verknüpfen. Dazu werden umfangreiche APIs und Tools, in Form von Softwareschnittstellen, Softwaredevelopment Kits und Hardwaremodulen bereitgestellt. Mit Hilfe von CoLab kann beispielsweise eine individuelle Gebäude App entwickelt werden, durch die PORT Access und PORT Elevator Systeme gesteuert werden können. ",
              imageUrl:
              "",
            },



          ],
          links:[
            {
              label: "Schindler",
              url: ": https://www.schindler.com/at/internet/de/aufzuege-und-fahrtreppen/produkte-und-dienstleistungen/transit-management/verkehrsmanagement.html ",
              icon: "mdi-web",
            },
          ],
          tags: ["Aufzüge"],
        },
        {
          name: "Schulte-Schlagbaum",
          subtitle: "NEXT LEVEL ACCESS SINCE 1833",
          imageUrl:
            "https://www.sag-schlagbaum.com/data/images/sot-hero1.jpg",
          contact: {
            email: "info@example.com",
          },
          tags: ["Zutrittssysteme"],
        },
        /*{
          name: "formitas",
          subtitle: "Wir digitalisieren die Bauwelt",
          tags: ["BIM", "AR"],
          contact: {
            email: "info@example.com",
          },
          imageUrl:
            "https://www.schau-ins-rheinland.de/wp-content/uploads/2019/07/formitas-1.jpg",
        },*/
        {
          name: "Zumtobel",
          subtitle: "Innovative Lichtlösungen",
          contact: {
            email: "info@example.com",
          },
          description: "Zumtobel, international führender Anbieter ganzheitlicher Lichtlösungen, macht das Zusammenspiel von Licht und Architektur erlebbar. Als Innovationsführer bietet Zumtobel ein umfassendes Portfolio an hochwertigen LED-Leuchten und Lichtmanagementsystemen für die professionelle Gebäudebeleuchtung in den Bereichen Büro, Bildung, Verkauf, Handel, Hotel und Wellness, Gesundheit, Kunst und Kultur sowie Industrie an. Die Marke Zumtobel steht seit über 60 Jahren für Innovation, einzigartige Produkt- und Servicequalität sowie für ausgezeichnetes Design und Nachhaltigkeit. Zumtobel bringt Lichtqualität und Energieeffizienz in Einklang und entwickelt maßgeschneiderte Lichtlösungen für messbaren Mehrwert.",
          products: [
            {
              name:"Stehleuchte Epuria",
              description:"Stehleuchte mit klassisch schlichtem und geradlinigem Design. Mit integriertem Sensor für Bewegungsdetektion, Helligkeitsmessung und Kommunikationsknoten der Konnektivitäts-Infrastruktur Wireless IoT Mesh. Manuell Bedienung erfolgt mittels EnOcean BLE Taster. ",
              imageUrl: 
                "https://www.zumtobel.com/PDB/resources/Photo/2011_products_584_L4/ZS_EPU_F_EPURIA_WH.jpg",
            }
          ],
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
//         {
//           name: "Mennekes",
//           imageUrl:
//             "https://www.chargeupyourday.de/fileadmin/_processed_/7/2/csm_content_installateur_dienstwagen_600x400_75a9955576.jpg",
//           contact: {
//             email: "info@example.com",
//           },
//           tags: ["E-Mobility", "Ladesäulen"],
//         },
//         {
//           name: "MOON Power",
//           subtitle: "Elektromobilität Alltag werden lassen",
//           imageUrl:
//             "https://autoundwirtschaft.at/NewsImages-870x580/pic31830_1-mooncity-in-der-sterneckstrasse.png",
//           contact: {
//             email: "info@example.com",
//           },
//           tags: ["E-Mobility", "Ladesäulen"],
//         },
        {
          name: "Phoenix Contact",
          subtitle: "Lösungen in der Elektrotechnik & Automation",
          imageUrl:
            "https://www.electrive.net/wp-content/uploads/2020/06/phoenix-contact-polen-poland-2020-01-min.png",
          contact:
            /*{
              email: "info@example.com",
            },*/
            {
              name:"Frank Knafia",
              position:"...",
              email:"...",
            },
          
          description: "Phoenix Contact ist ein unabhängiger Global Player. Kreative Lösungen aus Verbindungstechnik, Elektronik und Automation werden weltweit von über 17.100 begeisterten Menschen entwickelt, produziert und vertrieben. Ihre Arbeit verstehen sie als Beitrag zur Gestaltung einer smarten Welt. Als unabhängiges Familienunternehmen mit fast 100-jähriger Historie und einem Jahresumsatz von 2,4 Mrd. Euro entwickeln sie zukunftsweisende Produkte, Systeme und Lösungen. Lösungen für Elektrifizierung, Vernetzung und Automatisierung sind ihr Beitrag für eine Welt, in der regenerative Energie zum Nutzen aller zur Verfügung steht. Durch die Erfahrungen im hauseigenen Maschinen­bau ist Phoenix Contact mit den Anforderungen der Digitalisierung und des durchgängigen Datenflusses, vom Engineering durch die Fertigung und darüber hinaus, entlang des gesamten Produkt­lebenszyklus, vertraut. ",
          links:[
            {
              label: "Smart Building Local",
              url:"https://www.phoenixcontact.com/online/portal/de?1dmy&urile=wcm%3apath%3a/dede/web/main/solutions/subcategory_pages/Building_Our_Smart_Building_local/2e08c710-a6a2-4da8-ab17-fd6e527e4843 ",
              icon:"mdi-web",
            },
            {  
              label: "Gebauede Tour",
              url:"https://vtc.view3.com/de/vt/PhoenixContact_Gebaeude_Tour/d/49840/siv/1 ",
              icon:"mdi-web",
            },
          ],
          tags: ["Elektronik"],
        },
        {
          name: "American Tower", // Fehler,wenn ich "Corporation" hinzufüge 
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
//         {
//           name: "Essentry",
//           subtitle: "Automatisierte Zugangsverwaltung für Gebäude",
//           imageUrl:
//             "https://pyramid.de/wp-content/uploads/2020/05/Essentry001_web.jpg",
//           contact: {
//             email: "info@example.com",
//           },
//           tags: ["Cloud Plattform", "Zutrittskontrolle"],
//         },
        {
          name: "pinestack",
          subtitle: "Die Plattform für effizientes Property Management",
          categories: ["Softwareplattform", "App"],
          description: "Die Pinestack GmbH bietet eine Plattform für effizientes Property Management. Das integrative Smart Building-Betriebssystem ist darauf ausgelegt, Anwender:innen so viele Informationen wie möglich über Ihre Immobilie zu liefern und ist sofort einsatzbereit. Herausragende Schnittstellen-Architektur stellt sicher, dass sich Lösungen reibungslos in aktuelle Infrastrukturen integrieren. Pinestack führt Gebäude ins Internet der Dinge. So können Nutzer*innen ihren Gebäudebetrieb verwalten sowie die Performance des Gebäudes analysieren und benchmarken. Durch hohe Konnektivität können valide Live-Einblicke in den Betrieb von Immobilien, bis in die Feldebene, geliefert werden. So werden durch modulare Kommunikationslösungen Büros zu Smart Offices und Gebäude zu Smart Buildings.",
          imageUrl:
            "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1200/https://pinestack.io/wp-content/uploads/2019/02/ps_hero_image.png",
          contact: {
            email: "info@example.com",
          },
          links:[
            {
              label: "pinestack",
              url: "https://pinestack.io/smartoffice/ ",
              icon: "mdi-web",
            },
          ], 
          tags: ["Softwareplattform", "App"],
        },
        {
          name: "LUCEM Lichtbeton",
          subtitle: "Einzigartiges Lichtdesign",
          categories: ["Gebäudeautomation", "Softwareplattform"],
          description: "---",
          imageUrl:
            "https://www.beton.org/fileadmin/beton-org/media/Inspiration/Material/610x340/fassade_lichtbeton_01_610x340.jpg",
          contact: {
            email: "info@example.com",
          },
          tags: ["Licht"],
        },
//         {
//           name: "Schneider Electric",
//           subtitle: "Digitale Energie- und Automatisierungslösungen",
//           categories: ["Leuchten", "Umweltsensorik"],
//           imageUrl:
//             "https://www.se.com/de/de/assets/521/media/158817/1200/SE_Banner_Blog_Barbara_Frei_IC-2400x706.jpg",
//           contact: {
//             email: "info@example.com",
//           },
//           tags: ["Elektronik"],
//         },
//         {
//           name: "Signify",
//           subtitle: "The meaning of light",
//           categories: ["Leuchten", "Umweltsensorik"],
//           imageUrl:
//             "https://www.signify.com/b-dam/signify/de-de/about/news/2020/20201218-the-new-uv-c-table-lamp-from-philips/philips-uv-c-b2c-livingroom.jpg",
//           contact: {
//             email: "info@example.com",
//           },
//           tags: ["Plattform", "Licht"],
//         },
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
//         {
//           name: "thing-it",
//           subtitle: "BRAIN AND SOUL FOR YOUR BUILDINGS",
//           imageUrl:
//             "https://myopus.eu/media/image/41/90/c7/Vorschau_Thing-IT_Video.jpg",
//           contact: {
//             email: "info@example.com",
//           },
//           tags: ["Cloud Plattform", "App"],
//         },
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
        //Coming Soon
        // {
        //   name:"dormakaba",
        //   subtitle:"",
        //   imageUrl:"",
        //   contact:"",
        //   links:"",
        // },
        {
          name:"IEE",
          categories: ["Sensorik"],
          subtitle:"Intelligente Sensorlösungen",
          imageUrl:"https://iee-sensing.com/app/uploads/2021/10/smartbuildings-accesscontrol-tdexpress-keyvis.jpg",
          contact:"",
          links:"",
          tags:["Sensorik"],
        },
        {
          name:"essentry",
          categories: [""],
          subtitle:"Für eine komprpmisslose Sicherheit",
          imageUrl:"https://essentry.com/wp-content/uploads/2021/11/Besuchermanagement_Kiosk_de-768x1229.png",
          contact:"",
          links:"",
          tags:[""],
        },
        {
          name:"Disruptive Technologies",
          categories: [""],
          subtitle:"IoT Sensoren für Smart Building",
          imageUrl:"https://www.disruptive-technologies.com/hs-fs/hubfs/Screenshot%202021-08-25%20at%2013.27.05.jpg?width=780&name=Screenshot%202021-08-25%20at%2013.27.05.jpg",
          contact:"",
          links:"",
          tags:[""],
        },
        {
          name:"Scasa",
          categories: [""],
          subtitle:"Komplette 3D-Rekonstruktion von Gebaueden",
          imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD1sgCl3j9QKNpNLoHEZJvyodM5dVTw_u20A&usqp=CAU",
          contact:"",
          links:"",
          tags:[""],
        },
        {
          name:"thing-it",
          categories: [""],
          subtitle:"Für eine efiziente Gebauededigitalizierung",
          imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoqU32DyU7VJTvK4aGRIDQiF-8gnGOrdqVA&usqp=CAU",
          contact:"",
          links:"",
          tags:[""],
        },
        {
          name:"waldmann",
          categories: ["Licht"],
          subtitle:"Engineers of light",
          imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVT_tOH_DMj36w1WeJcx_h1ZmcWUuaEBaIgg&usqp=CAU",
          contact:"",
          links:"",
          tags:[""],
        },
        {
          name:"dormakaba",
          categories: [""],
          subtitle:"Sichere und innnovative Schließ- und Türsysteme",
          imageUrl:"https://www.dormakaba.com/resource/image/500678/teaser_ratio4x3/520/390/df38ee5cca893115dabea275cc6fc0fa/0BBCB761AA0E8249B266DA5FC5CDDDEB/pic-loesungen-produkte.jpg",
          contact:"",
          links:"",
          tags:[""],
        },
        {
          name:"Enerthing",
          categories: [""],
          subtitle:"Globale IoT-Loesungen",
          imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cT_JpOscXvbg25FZmPz4J4WIxB1ZHQ0fog&usqp=CAU",
          contact:"",
          links:"",
          tags:[""],
        },
        {
          name:"Hailo",
          categories: [""],
          subtitle:"Innovative Abfallsammmeloesungen und Steigeraete",
          imageUrl:"https://www.hailo.de/fileadmin/home/teaser/teaser-hailo-einbautechnik-abfalltrennsysteme.jpg",
          contact:"",
          links:"",
          tags:[""],
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
