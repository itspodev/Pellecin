<template>
    <div class="main-hp-container">
    <div class="hp-container">
        <div class="hp-head">
            <p>PEPENOME</p>
            <br>
            <h1>MES PROJETS</h1>
            <br>
        </div>
        <div class="hp-navbar">
            <h3 class="nav-hp" @click="filterArray('motion')">MOTION DESIGN</h3>
            <h3 class="nav-hp" @click="filterArray('illustration')">ILLUSTRATION</h3>
            <h3 class="nav-hp" @click="filterArray('branding')">BRANDING</h3>
            <h3 class="nav-hp" @click="filterArray('graphisme')">GRAPHISME</h3>
            <h3 class="nav-hp" @click="filterArray('édition')">EDITION</h3>
            <h3 class="nav-hp" @click="filterArray('web')">WEB</h3>
        </div>
    </div>

    <div class="hp-container-2">
        <!----------------------------------------- PAGE D'ACCUEIL ---------------------------------------->
        
        <div class="test__main-container" v-if="filter === 'none'">
            <div class="test__container1">
                <img src="@/assets/img/cycliste.jpg"/>
            </div>
            <div class="test__container2">
                <video src="@/assets/video/Introduction-Vidéo1.mp4" loop="infinite" autoplay="autoplay" muted=''/>
            </div>
            <div class="test__container3">
                <img src="@/assets/img/vynil.jpg"/>
            </div>
            <div class="test__container4">
                <img src="@/assets/img/Société-inclusive.gif"/>
            </div>
        </div>

        <!---------------------------------------- MOTION DESIGN ------------------------------------------>

        <div class="test__main-container" v-if="filter === 'motion'">
            <div class="test__container5">
                <img src="@/assets/img/LOGO-LAETITIA_Dépliant-A4-A-copie.png"/>
            </div>
            <div class="test__container2">
                <video src="@/assets/video/Introduction-Vidéo1.mp4" loop="infinite" autoplay="autoplay" muted=''/>
            </div>
            <div class="test__container3">
                <img src="@/assets/img/vynil.jpg"/>
            </div>
            <div class="test__container6">
                <img src="@/assets/img/Autoportrait.gif"/>
            </div>
            <div class="test__container7">
                <img src="@/assets/img/LogoNolex.4.png"/>
            </div>
        </div>

        <!------------------------------------------- ILLUSTRATION  --------------------------------------->

        <div class="test__main-container" v-if="filter === 'illustration'">
            <div class="test__container1">
                <img src="@/assets/img/cycliste.jpg"/>
            </div>
            <div class="test__container3_2">
                <img src="@/assets/img/vynil.jpg"/>
            </div>
            <div class="test__container8">
                <img src="@/assets/img/HOLISTIQUE&CO.png"/>
            </div>
            <div class="test__container4_2"> 
                <img src="@/assets/img/Société-inclusive.gif"/>
            </div>
            <div class="test__container9">
                <img src="@/assets/img/BOULANGERIE-CHAVES.jpg"/>
            </div>
            <div class="test__container10">
                <img src="@/assets/img/LCJ.png"/>
            </div>
            <div class="test__container11">
                <img src="@/assets/img/Fight-Camp.png"/>
            </div>
            <div class="test__container6_2">
                <img src="@/assets/img/Autoportrait.gif"/>
            </div>
        </div>

        <!---------------------------- BRANDING ---------------------------->


        <div class="test__main-container" v-if="filter === 'branding'">
            <div class="test__container1_2">
                <img src="@/assets/img/cycliste.jpg"/>
            </div>
            <div class="test__container12">
                <img src="@/assets/img/LOGO-CDF_Dépliant-A4-A.png"/>
            </div>
            <div class="test__container5_2">
                <img src="@/assets/img/LOGO-LAETITIA_Dépliant-A4-A-copie.png"/>
            </div>
            <div class="test__container8_2"> 
                <img src="@/assets/img/HOLISTIQUE&CO.png"/>
            </div>
            <div class="test__container7_2">
                <img src="@/assets/img/LogoNolex.4.png"/>
            </div>
            <div class="test__container6_3">
                <img src="@/assets/img/Autoportrait.gif"/>
            </div>
            <div class="test__container9_2">
                <img src="@/assets/img/BOULANGERIE-CHAVES.jpg"/>
            </div>
        </div>


        <!--------------------------------- GRAPHISME ------------------------------->

        <div class="test__main-container" v-if="filter === 'graphisme'">
            <div class="test__container3_3">
                <img src="@/assets/img/vynil.jpg"/>
            </div>
            <div class="test__container13">
                <img src="@/assets/img/Sixfeet.jpg"/>
            </div>
            <div class="test__container6_4">
                <img src="@/assets/img/Autoportrait.gif"/>
            </div>
            <div class="test__container9_3"> 
                <img src="@/assets/img/BOULANGERIE-CHAVES.jpg"/>
            </div>
            <div class="test__container14">
                <img src="@/assets/img/BLUE.jpg"/>
            </div>
            <div class="test__container11_2">
                <img src="@/assets/img/Fight-Camp.png"/>
            </div>
            <div class="test__container15">
                <img src="@/assets/img/5.jpg"/>
            </div>
        </div>


        <!---------------------------- ÉDITION -------------------------------->

        <div class="test__main-container" v-if="filter === 'édition'">
            <div class="test__container8_3">
                <img src="@/assets/img/HOLISTIQUE&CO.png"/>
            </div>
            <div class="test__container4_3">
                <img src="@/assets/img/Société-inclusive.gif"/>
            </div>
            <div class="test__container13_2">
                <img src="@/assets/img/Sixfeet.jpg"/>
            </div>
            <div class="test__container12_2"> 
                <img src="@/assets/img/LOGO-CDF_Dépliant-A4-A.png"/>
            </div>
            <div class="test__container5_3">
                <img src="@/assets/img/LOGO-LAETITIA_Dépliant-A4-A-copie.png"/>
            </div>
            <div class="test__container14_2">
                <img src="@/assets/img/BLUE.jpg"/>
            </div>
            <div class="test__container10_2">
                <img src="@/assets/img/LCJ.png"/>
            </div>
            <div class="test__container9_4">
                <img src="@/assets/img/BOULANGERIE-CHAVES.jpg"/>
            </div>
        </div>


        <!------------------ WEB ----------------------->

        <div class="test__main-container" v-if="filter === 'web'">
            <div class="test__container1">
                <img src="@/assets/img/cycliste.jpg"/>
            </div>
            <div class="test__container2">
                <video src="@/assets/video/Introduction-Vidéo1.mp4" loop="infinite" autoplay="autoplay" muted=''/>
            </div>
            <div class="test__container7_3">
                <img src="@/assets/img/LogoNolex.4.png"/>
            </div>
            <div class="test__container5_4">
                <img src="@/assets/img/LOGO-LAETITIA_Dépliant-A4-A-copie.png"/>
            </div>
        </div>
    </div>
    </div>

</template>

<script>

export default {
    name: 'GridAgain',
    data: function() {
        return {
            filter: 'none'
        }
    },
    methods: {
        filterArray: function(filter) {
            this.filter = filter;
        }
    }
}

</script>
