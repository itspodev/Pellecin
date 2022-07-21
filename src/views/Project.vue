<template>

<NavBar/>
<h1>Mes Projets</h1>
<MainFooter/>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
    name: 'Project',
    components: {
        'NavBar': NavBar,
        'MainFooter': MainFooter
    },
    data: function() {
        return {
            projectArray: [
                {
                    name:'cycliste',
                    tag:["branding","illustration","web"],
                    img:'cycliste.jpg',
                    class: ''
                },
                {
                    name: 'Autoportrait',
                    tag:["branding","graphisme","illustration","motion"],
                    img: "Autoportrait.gif",
                    class: ''
                },
                {
                    name: 'BOULANGERIE CHAVES',
                    tag: ["branding", "édition", "graphisme", "illustration"],
                    img: 'BOULANGERIE CHAVES.jpg',
                    class: ''
                },
                {
                    name: 'HOLISTIQUE & CO-02',
                    tag:['branding','édition', 'illustration'],
                    img: 'HOLISTIQUE & CO-02.png',
                    class: ''
                },
                {
                    name: 'LOGO CDF_Dépliant A4 A',
                    tag: ['branding','édition'],
                    img: 'LOGO CDF_Dépliant A4 A.png',
                    class: ''
                },
                {
                    name: 'LOGO LAETICIA_Dépliant A4 A copie',
                    tag: ['branding','édition','motion','web'],
                    img:'LOGO LAETICIA_Dépliant A4 A copie.png',
                    class: ''
                },
                {
                    name: 'LogoNolex.4',
                    tag: ['branding', 'motion', 'web'],
                    img: 'LogoNolex.4.png',
                    class: ''
                },
                {
                    name: 'BLUE',
                    tag: ['édition', 'graphisme'],
                    img: 'BLUE.jpg',
                    class: ''
                },
                {
                    name: 'LCJ',
                    tag: ['édition', 'illustration'],
                    img: 'LCJ.png',
                    class:''
                },
                {
                    name: 'Sixfeet',
                    tag: ['édition', 'graphisme'],
                    img: 'Sixfeet.jpg',
                    class:''
                },
                {
                    name: 'Société inclusive',
                    tag: ['édition', 'illustration'],
                    img: 'Société inclusive.gif',
                    class: ''
                },
                {
                    name: '5',
                    tag: ['graphisme'],
                    img: '5.jpg',
                    class:''
                },
                {
                    name: 'Fight Camp',
                    tag: ['graphisme','illustration'],
                    img: 'Fight Camp.png',
                    class: ''
                },
                {
                    name: 'vynil',
                    tag: ['graphisme', 'illustration','motion'],
                    img: 'vynil.jpg',
                    class: ''
                },
                {
                    name: 'Liquid Colors',
                    tag: ['motion', 'web'],
                    img: 'Introduction-Vidéo1.mp4',
                    class:''
                }    
            ]
        }
    }
}

</script>