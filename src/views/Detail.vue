<template>
  <NavBar>
    <img
      v-if="this.selectedBanner && this.selectedBanner.format === 'gif'"
      :src="this.selectedBanner.content"
      :alt="this.selectedBanner.name"
      :class="this.selectedBanner.class"
    />
    <video
      v-else-if="this.selectedBanner && this.selectedBanner.format === 'mp4'"
      autoplay="autoplay"
      muted=""
      loop="infinite"
      :src="this.selectedBanner.content"
      :alt="this.selectedBanner.name"
      :class="this.selectedBanner.class"
    />
  </NavBar>

  <DetailDescription v-if="this.selectedDesc" :description="this.selectedDesc" />

  <DetailImage v-if="this.selectedImg" :image="this.selectedImg" :class="this.class"/>

  <MainFooter />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import DetailDescription from "@/components/DetailDescription.vue";
import DetailImage from "@/components/DetailImage.vue";
import MainFooter from "@/components/MainFooter.vue";

import {
  carte,
  flyer,
  instagram,
  logo2,
  laetitiaBanner,
  mockup,
  mockup2,
  bannière,
  blueBanner,
  triptique,
  paysage,
  les4sixfeet,
  gif,
  sixfeetBanner,
  perso1,
  perso2,
  perso3,
  perso4,
  perso5,
  perso6,
  perso7,
  numberBanner,
  actualités,
  collectivité,
  cyclistelaruche,
  hello,
  laruche,
  logo2laruche,
  pageerror,
  pyctogramme,
  siteinternet,
  veloBanner,
  behancemawen,
  dessinmawen,
  mockupmawen,
  propo1,
  vynilneu,
  neueAraBanner,
  squelette,
  basdepage,
  logonolex2,
  chartegraph,
  precomp,
  maquettenolex,
  vague,
  nolex,
  nolexBanner,
  illubox,
  mockupbox,
  illu2box,
  facebox,
  face2box,
  identity,
  logochaves,
  packaging,

} from "@/utils/media";

export default {
  name: "Detail",
  components: {
    NavBar: NavBar,
    MainFooter: MainFooter,
    DetailDescription: DetailDescription,
    DetailImage: DetailImage,
  },
  props: ["project"],
  data: function () {
    return {
      url_data: '',
      selectedBanner: [],
      selectedDesc: [],
      class: '',
      bannersArray: [
        {
          name: "Laëtitia",
          format: "gif",
          content: laetitiaBanner,
          class: "project-banner__img",
        },
        {
          name: "BLUE",
          format: "gif",
          content: blueBanner,
          class: "project-banner__img",
        },
        {
          name: "Sixfeet",
          format: "mp4",
          content: sixfeetBanner,
          class: "project-banner__video",
        },
        {
          name: "N°",
          format: "mp4",
          content: numberBanner,
          class: "project-banner__video",
        },
        {
          name: "Neue-Ära",
          format: "mp4",
          content: neueAraBanner,
          class: "project-banner__video",
        },
        {
          name: "La-ruche-à-velo",
          format: "mp4",
          content: veloBanner,
          class: "project-banner__video",
        },
        {
          name: "Nolex",
          format: "mp4",
          content: nolexBanner,
          class: "project-banner__video",
        }
      ],
      descriptionArray: [
        {
          name: "Laëtitia",
          nameOfProject: "Laëtitia Sophrologie",
          tag1: ["motion", "web", "branding", "édition"],
          mission: "Créer l'indentité de marque de Laëtitia Sophrologue à DINAN.",
          missionDesc: [
            "Concept visuel tout en poésie, symbolisé par une bulle de bien-être. Créer une identité à la fois élégante et légère qui symbolise l'ambiance apaisante de la sophrologie et de ses bienfaits.",
            "Un univers aux couleurs douces et réconfortantes, des éléments graphiques qui rappellent la nature, la mer, le vent et la terre",
          ],
          tag2: [
            "identité visuelle - logotype - carte de visite - flyer - motion design",
            "community management - after effect - adobe illustrator - photoshop - réseaux sociaux"
          ],
        },
        {
          name: "BLUE",
          nameOfProject: "BLUE",
          tag1: ["graphisme", "édition"],
          mission: "Création d'illustrations sous forme d'affiches pour le salon de coiffure \"Blue\" à Bordeaux.",
          missionDesc: [
            "La gérante souhaitait un visuel floral aux couleurs de son enseigne pour intégrer sur les murs de son salon et dans sa communication.",
          ],
          tag2: [
            "graphisme - affiche - illustration - aquarelle - dessin",
            "photoshop - édition - print"
           ],
        },
        {
          name: "Sixfeet",
          nameOfProject: "Six Feet Galerie",
          tag1: ["graphisme", "édition"],
          mission: "Projet de fin d'études (fictif) pour la marque Six feet Galerie.",
          missionDesc: [
            "Nouvel objectif pour la marque spécialisée dans la photographie sport de glisse qui souhaite atteindre une nouvelle cible d'amateurs d'Art et de photo grâce à des tirages en édition très limitée.",
            "Création d'une campagne d'affichage dans un style \"lifestyle\".",
          ],
          tag2: [
            "graphisme - photo - affiche - collage - illustrator",
            "photoshop - édition - print - mise en page"
           ],
        },
        {
          name: "N°",
          nameOfProject: "N°7",
          tag1: ["graphisme"],
          mission: "Concept de visuels et Packaging pour étiquette de bouteilles de vins fictifs.",
          missionDesc: [],
          tag2: [
            "graphisme - étiquettes - collage - peinture",
            "photoshop - packaging - illustrator"
           ],
        },
        {
          name: "Neue-Ära",
          nameOfProject: "Neue Ära",
          tag1: ["graphisme", "motion", "illustration"],
          mission: "Réalisation d'une pochette d'album pour l'artiste MAWEN.",
          missionDesc: [
            "Ce DJ aux influences électroniques / technos m'a demandé de réaliser un visuel pour illustrer son EP (extended play).",
            "Il souhaitait illustrer son projet par un homme et son squelette, dans un univers au couleur flash style affiche techno Berlinoise.",
          ],
          tag2: [
            "graphisme - illustration - motion design - pochette - dessin",
            "photoshop - after effect - procreate"],
        },
        {
          name: "La-ruche-à-velo",
          nameOfProject: "La ruche à velos",
          tag1: ["web", "branding", "illustration"],
          mission: "Refonte de l'identité de marque de La ruche à vélos",
          missionDesc: [
            "Refonte complète du logo ainsi que de la charte graphique",
            "Création de l'identité visuelle à travers des illustrations et des pictogrammes ainsi que le design du site internet.",
          ],
          tag2: [
            "identité visuelle - logotype - illustration - webdesign - maquettes",
            "illustrator - photoshop - adobe xd"
           ],
        },
        {
          name: "Nolex",
          nameOfProject: "Nolex",
          tag1: ["web", "branding", "motion"],
          mission: "Refont de l'identité de marque de Nolex",
          misionDesc: [
            "Créer une nouvelle identité graphique, avec une nouvelle charte pour un rendu plus design et professionel.",
            "Réalisation de visuels et motion pour les réseaux sociaux et la nouvelle maquette du site internet."
          ],
          tag2: [
            "logotype - identité de marque - branding - motion design - web - webdesign",
            "maquette - site internet - community management - photoshop - after effect - illustrator"
            ]
        }
      ],

            selectedImg:[],
            imageArray: [
                {
                    name:'Laëtitia',
                    nameOfImage:'Carte Laëtitia',
                    tag:["motion","web","branding",'édition'],
                    img: carte,
                    class: 'carteLAETITIA',
                    containerClass: 'containerProjectLAETITIA',
                    format: 'img',
                },
                {
                    name: 'Laëtitia',
                    nameOfImage:'Logo Laëtitia',
                    tag:["motion","web","branding",'édition'],
                    img: logo2,
                    class: 'logoLAETITIA',
                    containerClass: 'containerProjectLAETITIA',
                    format: 'img',
                },
                {
                    name: 'Laëtitia',
                    nameOfImage:'Flyer Laëtitia',
                    tag:["motion","web","branding",'édition'],
                    img: flyer,
                    class: 'flyerLAETITIA',
                    containerClass: 'containerProjectLAETITIA',
                    format: 'img',
                },
                {
                    name: 'Laëtitia',
                    nameOfImage:'Insta Laëtitia',
                    tag:["motion","web","branding",'édition'],
                    img: instagram,
                    class: 'instaLAETITIA',
                    containerClass: 'containerProjectLAETITIA',
                    format: 'img',
                },
                
                {
                    name:'BLUE',
                    nameOfImage:'Mockup Blue',
                    tag:['graphisme','édition'],
                    img: mockup,
                    class: 'mockupBLUE',
                    containerClass: 'containerProjectBLUE',
                    format: 'img',
                },
                {
                    name: 'BLUE',
                    nameOfImage:'Mockup2 Blue',
                    tag:['graphisme','édition'],
                    img: mockup2,
                    class: 'mockup2BLUE',
                    containerClass: 'containerProjectBLUE',
                    format: 'img',
                },
                {
                    name: 'BLUE',
                    nameOfImage:'Bannière Blue',
                    tag:['graphisme','édition'],
                    img: bannière,
                    class: 'bannièreBLUE',
                    containerClass: 'containerProjectBLUE',
                    format: 'img',
                },

                {
                    name: 'Sixfeet',
                    nameOfImage:'Triptique Sixfeet',
                    tag:['graphisme','édition'],
                    img: triptique,
                    class: 'triptiqueSIX',
                    containerClass: 'containerProjectSIXFEET',
                    format: 'img',
                },
                {
                    name:'Sixfeet',
                    nameOfImage:'Paysage Sixfeet',
                    tag:['graphisme','édition'],
                    img: paysage,
                    class: 'paysageSIX',
                    containerClass: 'containerProjectSIXFEET',
                    format: 'img',
                },
                {
                    name: 'Sixfeet',
                    nameOfImage:'Les4 Sixfeet',
                    tag:['graphisme','édition'],
                    img: les4sixfeet,
                    class: 'les4SIX',
                    containerClass: 'containerProjectSIXFEET',
                    format: 'img',
                },
                {
                    name: 'Sixfeet',
                    nameOfImage:'Gif Sixfeet',
                    tag:['graphisme','édition'],
                    img: gif,
                    class: 'gifSIX',
                    containerClass: 'containerProjectSIXFEET',
                    format: 'img',
                },

                {
                    name: 'N°',
                    nameOfImage:'n1',
                    tag:['graphisme'],
                    img: perso1,
                    class: 'N°1',
                    format: 'img',
                },
                {
                    name: 'N°',
                    nameOfImage:'n2',
                    tag:['graphisme'],
                    img: perso2,
                    class: 'N°2',
                    containerClass: 'containerProjectN°',
                    format: 'img',
                },
                {
                    name: 'N°',
                    nameOfImage:'n3',
                    tag:['graphisme'],
                    img: perso3,
                    class: 'N°3',
                    containerClass: 'containerProjectN°',
                    format: 'img',
                },
                {
                    name: 'N°',
                    nameOfImage:'n4',
                    tag:['graphisme'],
                    img: perso4,
                    class: 'N°4',
                    containerClass: 'containerProjectN°',
                    format: 'img',
                },
                {
                    name: 'N°',
                    nameOfImage:'n5',
                    tag:['graphisme'],
                    img: perso5,
                    class: 'N°5',
                    containerClass: 'containerProjectN°',
                    format: 'img',
                },
                {
                    name: 'N°',
                    nameOfImage:'n6',
                    tag:['graphisme'],
                    img: perso6,
                    class: 'N°6',
                    containerClass: 'containerProjectN°',
                    format: 'img',
                },
                {
                    name: 'N°',
                    nameOfImage:'n7',
                    tag:['graphisme'],
                    img: perso7,
                    class: 'N°7',
                    containerClass: 'containerProjectN°',
                    format: 'img',
                },

                {
                    name:'La-ruche-à-velo',
                    nameOfImage:'logo2laruche',
                    tag:['web', 'branding', 'illustration'],
                    img: logo2laruche,
                    class: 'logoLARUCHE',
                    containerClass: 'containerProjectLARUCHE',
                    format: 'img',
                },
                {
                    name:'La-ruche-à-velo',
                    nameOfImage:'cyclistelaruche',
                    tag:['web', 'branding', 'illustration'],
                    img: cyclistelaruche,
                    class: 'cyclisteLARUCHE',
                    containerClass: 'containerProjectLARUCHE',
                    format: 'img',
                },
                {
                    name:'La-ruche-à-velo',
                    nameOfImage:'pageerror',
                    tag:['web', 'branding', 'illustration'],
                    img: pageerror,
                    class: 'pageerrorLARUCHE',
                    containerClass: 'containerProjectLARUCHE',
                    format: 'img',
                },
                {
                    name:'La-ruche-à-velo',
                    nameOfImage:'laruche',
                    tag:['web', 'branding', 'illustration'],
                    img: laruche,
                    class: 'laruche',
                    containerClass: 'containerProjectLARUCHE',
                    format: 'img',
                }, 
                {
                    name:'La-ruche-à-velo',
                    nameOfImage:'pyctogramme',
                    tag:['web', 'branding', 'illustration'],
                    img: pyctogramme,
                    class: 'pyctoLARUCHE',
                    containerClass: 'containerProjectLARUCHE',
                    format: 'img',
                },
                {
                    name:'La-ruche-à-velo',
                    nameOfImage:'hello',
                    tag:['web', 'branding', 'illustration'],
                    img: hello,
                    class: 'helloLARUCHE',
                    containerClass: 'containerProjectLARUCHE',
                    format: 'img',
                },
                {
                    name:'La-ruche-à-velo',
                    nameOfImage:'collectivité',
                    tag:['web', 'branding', 'illustration'],
                    img: collectivité,
                    class: 'collectivitéLARUCHE',
                    containerClass: 'containerProjectLARUCHE',
                    format: 'img',
                },
                {
                    name:'La-ruche-à-velo',
                    nameOfImage:'siteinternet',
                    tag:['web', 'branding', 'illustration'],
                    img: siteinternet,
                    class: 'siteinternetLARUCHE',
                    containerClass: 'containerProjectLARUCHE',
                    format: 'img',
                },
                {
                    name:'La-ruche-à-velo',
                    nameOfImage:'actualités',
                    tag:['web', 'branding', 'illustration'],
                    img: actualités,
                    class: 'actualitésLARUCHE',
                    containerClass: 'containerProjectLARUCHE',
                    format: 'img',
                },
                
                {
                    name:'Neue-Ära',
                    nameOfImage:'propo1',
                    tag:['graphisme', 'motion', 'illustration'],
                    img: propo1,
                    class: 'propoNEUE',
                    containerClass: 'containerProjectNEUE',
                    format: 'img',
                },
                {
                    name:'Neue-Ära',
                    nameOfImage:'dessinmawen',
                    tag:['graphisme', 'motion', 'illustration'],
                    img: dessinmawen,
                    class: 'dessinNEUE',
                    containerClass: 'containerProjectNEUE',
                    format: 'img',
                },
                {
                    name:'Neue-Ära',
                    nameOfImage:'vynil',
                    tag:['graphisme', 'motion', 'illustration'],
                    img: vynilneu,
                    class: 'vynilNEUE',
                    containerClass: 'containerProjectNEUE',
                    format: 'img',
                },
                {
                    name:'Neue-Ära',
                    nameOfImage:'squelette',
                    tag:['graphisme', 'motion', 'illustration'],
                    img: squelette,
                    class: 'squeletteNEUE',
                    containerClass: 'containerProjectNEUE',
                    format: 'mp4',
                },
                {
                    name:'Neue-Ära',
                    nameOfImage:'mockupmawen',
                    tag:['graphisme', 'motion', 'illustration'],
                    img: mockupmawen,
                    class: 'mockupNEUE',
                    containerClass: 'containerProjectNEUE',
                    format: 'img',
                },
                {
                    name:'Neue-Ära',
                    nameOfImage:'behancemawen',
                    tag:['graphisme', 'motion', 'illustration'],
                    img: behancemawen,
                    class: 'behanceNEUE',
                    containerClass: 'containerProjectNEUE',
                    format: 'img',
                },
                // {
                //     name:'Neue-Ära',
                //     nameOfImage:'basdepage',
                //     tag:['graphisme', 'motion', 'illustration'],
                //     img: basdepage,
                //     class: 'videoNEUE',
                //     containerClass: 'containerProjectNEUE',
                //     format: 'mp4',
                // },
                {
                    name:'Nolex',
                    nameOfImage:'logonolex2',
                    tag:['web', 'branding', 'motion' ],
                    img: logonolex2,
                    class: 'logoNOLEX',
                    containerClass: 'containerProjectNOLEX',
                    format: 'img',
                },
                {
                    name:'Nolex',
                    nameOfImage:'chartegraph',
                    tag:['web', 'branding', 'motion' ],
                    img: chartegraph,
                    class: 'charteNOLEX',
                    containerClass: 'containerProjectNOLEX',
                    format: 'img',
                },
                {
                    name:'Nolex',
                    nameOfImage:'precomp',
                    tag:['web', 'branding', 'motion' ],
                    img: precomp,
                    class: 'precompNOLEX',
                    containerClass: 'containerProjectNOLEX',
                    format: 'mp4',
                },
                {
                    name:'Nolex',
                    nameOfImage:'maquettenolex',
                    tag:['web', 'branding', 'motion' ],
                    img: maquettenolex,
                    class: 'maquetteNOLEX',
                    containerClass: 'containerProjectNOLEX',
                    format: 'img',
                },
                {
                    name:'Nolex',
                    nameOfImage:'vague',
                    tag:['web', 'branding', 'motion' ],
                    img: vague,
                    class: 'vagueNOLEX',
                    containerClass: 'containerProjectNOLEX',
                    format: 'img',
                },
                {
                    name:'Nolex',
                    nameOfImage:'nolex',
                    tag:['web', 'branding', 'motion' ],
                    img: nolex,
                    class: 'nolexNOLEX',
                    containerClass: 'containerProjectNOLEX',
                    format: 'img',
                },

                // {
                //     name:'Boxing',
                //     nameOfImage:'illubox',
                //     tag:['illustration', 'graphisme'],
                //     img: illubox,
                //     class: 'illuBOXING',
                //     containerClass: 'containerProjectBOXING',
                //     format: 'img',
                // },
                // {
                //     name:'Boxing',
                //     nameOfImage:'mockupbox',
                //     tag:['illustration', 'graphisme'],
                //     img: mockupbox,
                //     class: 'mockupBOXING',
                //     containerClass: 'containerProjectBOXING',
                //     format: 'img',
                // },
                // {
                //     name:'Boxing',
                //     nameOfImage:'illu2box',
                //     tag:['illustration', 'graphisme'],
                //     img: illu2box,
                //     class: 'illu2BOXING',
                //     containerClass: 'containerProjectBOXING',
                //     format: 'img',
                // },
                // {
                //     name:'Boxing',
                //     nameOfImage:'facebox',
                //     tag:['illustration', 'graphisme'],
                //     img: facebox,
                //     class: 'faceBOXING',
                //     containerClass: 'containerProjectBOXING',
                //     format: 'img',
                // },
                // {
                //     name:'Boxing',
                //     nameOfImage:'face2box',
                //     tag:['illustration', 'graphisme'],
                //     img: face2box,
                //     class: 'face2BOXING',
                //     containerClass: 'containerProjectBOXING',
                //     format: 'img',
                // },

                {
                    name:'Chaves',
                    nameOfImage:'identity',
                    tag:['illustration', 'graphisme'],
                    img: identity,
                    class: 'idCHAVES',
                    containerClass: 'containerProjectCHAVES',
                    format: 'img',
                },
                {
                    name:'Chaves',
                    nameOfImage:'logochaves',
                    tag:['illustration', 'graphisme'],
                    img: logochaves,
                    class: 'logoCHAVES',
                    containerClass: 'containerProjectCHAVES',
                    format: 'img',
                },
                {
                    name:'Chaves',
                    nameOfImage:'packaging',
                    tag:['illustration', 'branding', 'graphisme', 'édition'],
                    img: packaging,
                    class: 'packCHAVES',
                    containerClass: 'containerProjectCHAVES',
                    format: 'img',
                },
                
            ],
        }
      },
    
    methods: {
        getSelectedDescArray: function() {
            this.descriptionArray.forEach(description => {
                if(this.url_data === description.name) {
                    this.selectedDesc = description
                }
            });
        },
        getSelectedBannArray: function() {
            this.bannersArray.forEach(banner => {
                if(this.url_data === banner.name) {
                    this.selectedBanner = banner
                }
            });
        },
        getSelectedImgArray: function() {
            this.imageArray.forEach(image => {
                if(this.url_data === image.name){
                    this.selectedImg.push(image)
                }
            });
        },
        getSelectedImgArrayClass: function() {
            this.imageArray.forEach(image => {
                if(this.url_data === image.name){
                    this.class = image.containerClass
                }
            });
        },
    },
  mounted() {
    this.url_data = this.$route.params.name;
    this.getSelectedBannArray();
    this.getSelectedDescArray();
    this.getSelectedImgArray();
    this.getSelectedImgArrayClass();
  }
}
</script>
