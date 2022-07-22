<template>

<NavBar><video autoplay="autoplay" muted="" loop="infinite" src="@/assets/video/Mes-projets2.mp4"></video></NavBar>
<Grid :projectArray="this.projectArray" />
<MainFooter/>
    <!-- <div class="hp-container-2">
        <div class="hp-grid">
            <GridElement 
                v-for="project in projectArray" 
                :key="project.name"  
                :project="project"
                :filter='this.filter'
            />
        </div>
    </div> -->
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MainFooter from '@/components/MainFooter.vue'
import Grid from '@/components/Grid.vue'
import Footer from '@/components/Footer.vue'

import {
    cycliste,
    autoPortrait,
    boulangerieChaves,
    holistiqueCo02,
    logoCdfDepliantA4A,
    logoLaeticiaDepliantA4ACopie,
    logoNolex4,
    blue,
    lcj,
    sixFeet,
    societeInclusive,
    num5,
    fightCamp,
    vynil,
    liquidColors
} from '@/utils/media'

export default {
    name: 'Project',
    components: {
        'NavBar': NavBar,
        'MainFooter': MainFooter,
        'Grid' : Grid,
        'Footer':Footer
    },
    data: function() {
        return {
            filter:'test',
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
                    img: autoPortrait,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'BOULANGERIE CHAVES',
                    tag: ["branding", "édition", "graphisme", "illustration"],
                    img: boulangerieChaves,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'HOLISTIQUE & CO-02',
                    tag:['branding','édition', 'illustration'],
                    img: holistiqueCo02,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'LOGO CDF_Dépliant A4 A',
                    tag: ['branding','édition'],
                    img: logoCdfDepliantA4A,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'LOGO LAETICIA_Dépliant A4 A copie',
                    tag: ['branding','édition','motion','web'],
                    img:logoLaeticiaDepliantA4ACopie,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'LogoNolex.4',
                    tag: ['branding', 'motion', 'web'],
                    img: logoNolex4,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'BLUE',
                    tag: ['édition', 'graphisme'],
                    img: blue,
                    format: 'img',
                    class: ''
                },
                {
                    name: 'LCJ',
                    tag: ['édition', 'illustration'],
                    img: lcj,
                    format: 'img',
                    class:''
                },
                {
                    name: 'Sixfeet',
                    tag: ['édition', 'graphisme'],
                    img: sixFeet,
                    format: 'img',
                    class:''
                },
                {
                    name: 'Société inclusive',
                    tag: ['édition', 'illustration','test'],
                    img: societeInclusive,
                    format: 'img',
                    class: 'box-container4'
                },
                {
                    name: '5',
                    tag: ['graphisme'],
                    img: num5,
                    format: 'img',
                    class:''
                },
                {
                    name: 'Fight Camp',
                    tag: ['graphisme','illustration'],
                    img: fightCamp,
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
                    img: liquidColors,
                    format: 'video',
                    class:'box-container2'
                }    
            ],
        }
    },
}

</script>