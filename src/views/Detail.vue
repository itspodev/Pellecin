<template>

<NavBar/><br><br><br><br><br><br>
Page de detail projet
Pour chaque lien sur les image utiliser le code suivant 
<pre>
    &lt;router-link :to="{ name: 'detail', params: { name: 'nameOfProject' } }">Votre asset ici&lt;/router-link>
</pre>
<MainFooter/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MainFooter from '@/components/MainFooter.vue'
import GridElement from './GridElement.vue';

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
} from '@utils/media'

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
            isTextAnimActive: false
        }
    }
    }
    
}

</script>