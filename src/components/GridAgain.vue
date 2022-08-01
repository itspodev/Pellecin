<template>
    <div class="main-hp-container">
        <div class="hp-container">
            <div class="hp-head">
                <p>PEPENOME</p>
                <br>
                <router-link to="/projets" @click.native="scrollToTop"><h2>MES PROJETS</h2></router-link>
                <br>
            </div>
            <div class="hp-navbar">
                <h3 :class="filter === 'motion' ? 'nav-hp opacity' : 'nav-hp'" @click="filterArray('motion')">MOTION DESIGN</h3>
                <h3 :class="filter === 'illustration' ? 'nav-hp opacity' : 'nav-hp'" @click="filterArray('illustration')">ILLUSTRATION</h3>
                <h3 :class="filter === 'branding' ? 'nav-hp opacity' : 'nav-hp'" @click="filterArray('branding')">BRANDING</h3>
                <h3 :class="filter === 'graphisme' ? 'nav-hp opacity' : 'nav-hp'" @click="filterArray('graphisme')">GRAPHISME</h3>
                <h3 :class="filter === 'édition' ? 'nav-hp opacity' : 'nav-hp'" @click="filterArray('édition')">ÉDITION</h3>
                <h3 :class="filter === 'web' ? 'nav-hp opacity' : 'nav-hp'" @click="filterArray('web')">WEB</h3>
            </div>
        </div>
        <div class="hp-navbar-mobile">
            <button @click="prevArrow()"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
            <p>{{this.filter || 'Projets'}}</p>
            <button @click="nextArrow()"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
        </div>
        <div class="hp-container-2">

            <div :class="this.class">
                <GridElement
                    v-for="project in projectArray" 
                    :key="project.name"  
                    :project="project"
                    :filter='this.filter'
                />
            </div>
        </div>
        <div class="btn-voirplus" v-if="home">
            <p class="voirplus"><router-link to="/projets" class="shwMoreTransition" @mouseover="mouseOverLink()" @mouseleave="mouseLeaveLink()" @click.native="scrollToTop"><span :class="{ 'knwMoreAnimation-1': isTextAnimActive }">VOIR</span> <span :class="{ 'knwMoreAnimation-2': isTextAnimActive }">PLUS</span></router-link></p>
        </div>
    </div>

</template>

<script>
import GridElement from './GridElement.vue';

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
  components: { GridElement },
    name: 'GridAgain',
    props:['home'],
    data: function() {
        return {
            filter: 'home',
            class:'containerGridHome',
            projectArray: [
                {
                    name:'La ruche à velo',
                    tag:["branding","illustration","web",'home'],
                    img: cycliste,
                    format: 'img',
                    class: 'LaRucheAVelo'
                },
                {
                    name: 'Le bleu & jaune',
                    tag:["branding","graphisme","illustration","motion"],
                    img: autoPortrait,
                    format: 'img',
                    class: 'LeBleuEtLeJaune'
                },
                {
                    name: 'Chaves',
                    tag: ["branding", "édition", "graphisme", "illustration"],
                    img: boulangerieChaves,
                    format: 'img',
                    class: 'chaves'
                },
                {
                    name: 'Holistique & co',
                    tag:['branding','édition', 'illustration'],
                    img: holistiqueCo02,
                    format: 'img',
                    class: 'HolistiqueCo'
                },
                {
                    name: 'La colline',
                    tag: ['branding','édition'],
                    img: logoCdfDepliantA4A,
                    format: 'img',
                    class: 'LaColine'
                },
                {
                    name: 'Laëtitia',
                    tag: ['branding','édition','motion','web'],
                    img:logoLaeticiaDepliantA4ACopie,
                    format: 'img',
                    class: 'Laetitia'
                },
                {
                    name: 'Nolex',
                    tag: ['branding', 'motion', 'web'],
                    img: logoNolex4,
                    format: 'img',
                    class: 'Nolex'
                },
                {
                    name: 'BLUE',
                    tag: ['édition', 'graphisme'],
                    img: blue,
                    format: 'img',
                    class: 'Blue'
                },
                {
                    name: 'LCJ',
                    tag: ['édition', 'illustration'],
                    img: lcj,
                    format: 'img',
                    class:'LCJ'
                },
                {
                    name: 'Sixfeet',
                    tag: ['édition', 'graphisme'],
                    img: sixFeet,
                    format: 'img',
                    class:'Sixfeet'
                },
                {
                    name: 'AlianceC',
                    tag: ['édition', 'illustration','home'],
                    img: societeInclusive,
                    format: 'img',
                    class: 'AlianceC'
                },
                {
                    name: 'N°',
                    tag: ['graphisme'],
                    img: num5,
                    format: 'img',
                    class:'N'
                },
                {
                    name: 'Fight Camp',
                    tag: ['graphisme','illustration'],
                    img: fightCamp,
                    format: 'img',
                    class: 'FightCamp'
                },
                {
                    name: 'Neue Ära',
                    tag: ['graphisme', 'illustration','motion','home'],
                    img: vynil,
                    format: 'img',
                    class: 'NeueAra'
                },
                {
                    name: 'Liquid Colors',
                    tag: ['motion', 'web','home'],
                    img: liquidColors,
                    format: 'video',
                    class:'LiquideColor'
                },   
            ],
            isTextAnimActive: false
        }
    },
    methods: {
        filterArray: function(filter) {
            this.filter = filter;
            this.classChange(filter)
        },
        classChange: function(filter) {
            switch (filter) {
                case 'motion':
                    this.class = 'containerGridMotion'
                    break;
                case 'illustration':
                    this.class = 'containerGridIllustration'
                    break;
                case 'branding':
                    this.class = 'containerGridBranding'
                    break;
                case 'graphisme':
                    this.class = 'containerGridGraphisme'
                    break;
                case 'édition':
                    this.class = 'containerGridEdition'
                    break;
                case 'web':
                    this.class = 'containerGridWeb'
                    break;
                case 'home':
                    this.class = 'containerGridHome'
                    break;
            
                default:
                    this.class = 'containerGridProjet'
                    break;
            }
        },
        defaultClass: function(){
            this.class = this.home ? 'containerGridHome' : 'containerGridProjet'
            this.filter = this.home ? 'home' : ''
        },
        prevArrow: function() {
            switch(this.filter) {
                case 'motion' :
                    this.filter = 'web';
                    break;
                case 'illustration' :
                    this.filter = 'motion';
                    break;
                case 'branding' :
                    this.filter = 'illustration';
                    break;
                case 'graphisme' :
                    this.filter = 'branding';
                    break;
                case 'édition' :
                    this.filter = 'graphisme';
                    break;
                case 'web' :
                    this.filter = 'édition';
                    break;
                default : 
                    this.filter = 'web';
                    break;
            }
            this.classChange(this.filter);
        },
        nextArrow: function() {
            switch(this.filter) {
                case 'motion' :
                    this.filter = 'illustration';
                    break;
                case 'illustration' :
                    this.filter = 'branding';
                    break;
                case 'branding' :
                    this.filter = 'graphisme';
                    break;
                case 'graphisme' :
                    this.filter = 'édition';
                    break;
                case 'édition' :
                    this.filter = 'web';
                    break;
                case 'web' :
                    this.filter = 'motion';
                    break;
                default : 
                    this.filter = 'motion';
                    break;
            }
            this.classChange(this.filter);
        },
        mouseOverLink: function() {
            this.isTextAnimActive = true;
        },
        mouseLeaveLink: function() {
            this.isTextAnimActive = false;
        },
        scrollToTop: function() {
            window.scrollTo(0,0);
        }
    },
    created(){
        this.defaultClass()
    }

}

</script>
