<template>

    <NavBar/><br><br><br><br><br><br>
    <h1>{{url_data}}</h1>
    <DetailElement v-if="this.description" :description="this.description"/>
    Page de detail projet
    Pour chaque lien sur les image utiliser le code suivant 
    <pre>
        &lt;router-link :to="{ name: 'detail', params: { name: 'nameOfProject' } }">Votre asset ici&lt;/router-link>
    </pre>
    <MainFooter/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import DetailElement from '@/components/DetailElement.vue'
import MainFooter from '@/components/MainFooter.vue'

import {
    carte,
    flyer,
    insta,
    logo2,
    mockup,
    insta,
    bannière,
    triptique,
    paysage,
    les4sixfeet,
    gif,
    perso1,
    perso2,
    perso3,
    perso4,
    perso5,
    perso6,
    perso7,
} from '@/utils/media'

export default {
    name: 'Detail',
    components: {
        'NavBar': NavBar,
        'MainFooter': MainFooter,

    props:['home'],
    data: function() {
        return {
            projectArray: [
                {
                    name:'Carte',
                    tag:["motion","web","branding",'édition'],
                    img: carte,
                    format: 'img',
                },
                {
                    name: 'Flyer',
                    tag:["motion","web","branding",'édition'],
                    img: flyer,
                    format: 'img',
                },
                {
                    name: 'Insta',
                    tag:["motion","web","branding",'édition'],
                    img: insta,
                    format: 'img',
                },
                {
                    name: 'Logo',
                    tag:["motion","web","branding",'édition'],
                    img: logo2,
                    format: 'img',
                },

                {
                    name:'Mockup Blue',
                    tag:['graphisme','édition'],
                    img: mockup,
                    format: 'img',
                },
                {
                    name: 'Mockup2 Blue',
                    tag:['graphisme','édition'],
                    img: mockup2,
                    format: 'img',
                },
                {
                    name: 'Logo Blue',
                    tag:['graphisme','édition'],
                    img: bannière,
                    format: 'img',
                },

                {
                    name: 'Triptique sixfeet',
                    tag:['graphisme','édition'],
                    img: triptique,
                    format: 'img',
                },
                {
                    name:'Paysage sixfeet',
                    tag:['graphisme','édition'],
                    img: paysage,
                    format: 'img',
                },
                {
                    name: '4sixfeet',
                    tag:['graphisme','édition'],
                    img: les4sixfeet,
                    format: 'img',
                },
                {
                    name: 'Gif sixfeet',
                    tag:['graphisme','édition'],
                    img: gif,
                    format: 'gif',
                },

                {
                    name: 'Perso1 N°',
                    tag:['graphisme'],
                    img: perso1,
                    format: 'img',
                },
                {
                    name: 'Perso2 N°',
                    tag:['graphisme'],
                    img: perso2,
                    format: 'img',
                },
                {
                    name: 'Perso3 N°',
                    tag:['graphisme'],
                    img: perso3,
                    format: 'img',
                },
                {
                    name: 'Perso4 N°',
                    tag:['graphisme'],
                    img: perso4,
                    format: 'img',
                },
                {
                    name: 'Perso5 N°',
                    tag:['graphisme'],
                    img: perso5,
                    format: 'img',
                },
                {
                    name: 'Perso6 N°',
                    tag:['graphisme'],
                    img: perso6,
                    format: 'img',
                },
                {
                    name: 'Perso7 N°',
                    tag:['graphisme'],
                    img: perso7,
                    format: 'img',
                },
                
            ],
        }
    }
    },
        'DetailElement': DetailElement
    }
    mounted(); {
        this.url_data=this.$route.params.name
        this.getDescProjectArray()
    }
    data();{
        return {
            url_data: null,
            projectName: null,
            description: null,
            descriptionArray: [
                {
                    nameOfProject: 'Laëtitia Sophrologie',
                    tag1: ['branding','édition','motion','web'],
                    mission: 'Créer l\'indentité de marque de Laëtitia Sophrologue à DINAN.',
                    missionDesc: 'Concept visuel tout en poésie, symbolisé par une bulle de bien-être. Créer une identité à la fois élégante et légère qui symbolise l\'ambiance apaisante de la sophrologie et de ses bienfaits. Un univers aux couleurs douces et réconfortantes, des éléments graphiques qui rappellent la nature, la mer, le vent et la terre',
                    tag2:['identité visuelle', 'logotype', 'carte de visite', 'flyer', 'motion-design', 'community-management', 'after effect', 'adobe illustrator', 'photoshop', 'réseaux sociaux'], 
                },
                {
                    nameOfProject: 'BLUE',
                    tag1: ['graphisme', 'édition'],
                    mission: 'Création d\'illustrations sous forme d\'affiches pour lle salon de coiffure "Blue" à Bordeaux.',
                    missionDesc: 'La gérante souhaitait un visuel floral aux couleurs de son enseigne pour intégrer sur les murs de son salon et dans sa communication.',
                    tag2: ['graphisme','affiche', 'illustration', 'aquarelle', 'dessin', 'photoshop', 'édition', 'print']
                },
                {
                    nameOfProject: 'Six Feet Galerie',
                    tag1: ['graphisme', 'édition'],
                    mission: 'Projet de fin d\'études (fictif) pour la marque Six feet Galerie.',
                    missionDesc: 'Nouvel objectif pour la marque spécialisée dans la photographie sport de glisse qui souhaite atteindre une nouvelle cible d\'amateurs d\'Art et de photo grâce à des tirages en édition très limitée. Création d\'une campagne d\'affichage dans un style "lifestyle".',
                    tag2: ['graphisme' , 'photo' , 'affiche' , 'collage' , 'illustrator' , 'photoshop' , 'édition' , 'print' , 'mise en page'] 
                },
                {
                    nameOfProject: 'N°7',
                    tag1: ['graphisme'],
                    mission: 'Concept de visuels et Packaging pour étiquette de bouteilles de vins fictif.',
                    missionDesc: '',
                    tag2: ['graphisme','étiquettes','collage','peinture', 'photoshop', 'packaging', 'illustrator']
                }
            ]
        }
    }
    methods: {
        getDescProjectArray: function() {
            // for(description in this.descriptionArray) {
            //     if(this.url_data === description.nameOfProject) {
            //         this.description = description
            //     }
            //     console.log(this.description)
            // }
            this.descriptionArray.forEach(description => {
                if(this.url_data === description.nameOfProject) {
                    this.description = description
                console.log(this.description)
                }
            });
        }
    }


</script>