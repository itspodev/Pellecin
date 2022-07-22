<template>

<NavBar/>
<h1>Mes Projets</h1>
<Grid :projectArray=this.projectArray />
<MainFooter/>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import MainFooter from '../components/MainFooter.vue'
import Grid from '../components/Grid.vue'

import cycliste from '@/assets/img/cycliste.jpg'
import Autoportrait from '@/assets/img/Autoportrait.gif'
import BOULANGERIECHAVES from '@/assets/img/BOULANGERIE-CHAVES.jpg'
import HOLISTIQUECO02 from '@/assets/img/HOLISTIQUE&CO.png'
import LOGOCDF_DépliantA4A from '@/assets/img/LOGO-CDF_Dépliant-A4-A.png'
import LOGOLAETICIA_DépliantA4Acopie from '@/assets/img/LOGO-LAETITIA_Dépliant-A4-A-copie.png'
import LogoNolex4 from '@/assets/img/LogoNolex.4.png'
import BLUE from '@/assets/img/BLUE.jpg'
import LCJ from '@/assets/img/LCJ.png'
import Sixfeet from '@/assets/img/Sixfeet.jpg'
import Sociétéinclusive from '@/assets/img/Société-inclusive.gif'
import a5 from '@/assets/img/5.jpg'
import FightCamp from '@/assets/img/Fight-Camp.png'
import vynil from '@/assets/img/vynil.jpg'
import LiquidColors from '@/assets/video/Introduction-Vidéo1.mp4'




export default {
    name: 'Project',
    components: {
        'NavBar': NavBar,
        'MainFooter': MainFooter,
        'Grid' : Grid
    },
    data: function() {
        return {
            projectArray: [
                {
                    name:'cycliste',
                    tag:["branding","illustration","web",'test'],
                    img: cycliste,
                    format: 'img',
                    class: 'box-container1'
                },
                {
                    name: 'Autoportrait',
                    tag:["branding","graphisme","illustration","motion"],
                    img: Autoportrait,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'BOULANGERIE CHAVES',
                    tag: ["branding", "édition", "graphisme", "illustration"],
                    img: BOULANGERIECHAVES,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'HOLISTIQUE & CO-02',
                    tag:['branding','édition', 'illustration'],
                    img: HOLISTIQUECO02,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'LOGO CDF_Dépliant A4 A',
                    tag: ['branding','édition'],
                    img: LOGOCDF_DépliantA4A,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'LOGO LAETICIA_Dépliant A4 A copie',
                    tag: ['branding','édition','motion','web'],
                    img:LOGOLAETICIA_DépliantA4Acopie,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'LogoNolex.4',
                    tag: ['branding', 'motion', 'web'],
                    img: LogoNolex4,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'BLUE',
                    tag: ['édition', 'graphisme'],
                    img: BLUE,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'LCJ',
                    tag: ['édition', 'illustration'],
                    img: LCJ,
                    format: 'img',
                    class:''
                },
                {
                    name: 'Sixfeet',
                    tag: ['édition', 'graphisme'],
                    img: Sixfeet,
                    format: 'img',
                    class:''
                },
                {
                    name: 'Société inclusive',
                    tag: ['édition', 'illustration','test'],
                    img: Sociétéinclusive,
                    format: 'img',
                    class: 'box-container4'
                },
                {
                    name: '5',
                    tag: ['graphisme'],
                    img: a5,
                    format: 'img',
                    class:''
                },
                {
                    name: 'Fight Camp',
                    tag: ['graphisme','illustration'],
                    img: FightCamp,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'vynil',
                    tag: ['graphisme', 'illustration','motion','test'],
                    img: vynil,
                    format: 'img',
                    class: 'box-container3'
                },
                {
                    name: 'Liquid Colors',
                    tag: ['motion', 'web','test'],
                    img: LiquidColors,
                    format: 'video',
                    class:'box-container2'
                }    
            ],
        }
    },
}

</script>