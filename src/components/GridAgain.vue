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
        
        <div class="containerGridHome">
            <div class="gridItems NeueAra"><img src="@/assets/img/vynil.jpg" alt=""></div>
            <div class="gridItems AlianceC"><img src="@/assets/img/Société-inclusive.gif" alt=""></div>
            <div class="gridItems LaRucheAVelo"><img src="@/assets/img/cycliste.jpg"></div>
            <div class="gridItems LiquideColor"><video autoplay="autoplay" muted="" loop="infinite" src="@/assets/video/Introduction-Vidéo1.mp4"></video></div>
        </div>

        <!----------------------------------------- PAGE PROJET ---------------------------------------->
        
        <!-- <div class="containerGridProjet">
            <div class="gridItems NeueAra"><img src="@/assets/img/vynil.jpg" alt=""></div>
            <div class="gridItems AlianceC"><img src="@/assets/img/Société-inclusive.gif" alt=""></div>
            <div class="gridItems LaRucheAVelo"><img src="@/assets/img/cycliste.jpg"></div>
            <div class="gridItems LiquideColor"><video autoplay="autoplay" muted="" loop="infinite" src="@/assets/video/Introduction-Vidéo1.mp4"></video></div>
            <div class="gridItems HolistiqueCo"><img src="@/assets/img/HOLISTIQUE&CO.png" alt=""></div>
            <div class="gridItems N"><img src="@/assets/img/5.jpg" alt=""></div>
            <div class="gridItems LaColine"><img src="@/assets/img/LOGO-CDF_Dépliant-A4-A.png" alt=""></div>
            <div class="gridItems Laetitia"><img src="@/assets/img/LOGO-LAETITIA_Dépliant-A4-A-copie.png" alt=""></div>
            <div class="gridItems FightCamp"><img src="@/assets/img/Fight-Camp.png" alt=""></div>
            <div class="gridItems LCJ"><img src="@/assets/img/LCJ.png" alt=""></div>
            <div class="gridItems Sixfeet"><img src="@/assets/img/Sixfeet.jpg" alt=""></div>
            <div class="gridItems LeBleuEtLeJaune"><img src="@/assets/img/Autoportrait.gif" alt=""></div>
            <div class="gridItems Blue"><img src="@/assets/img/BLUE.jpg" alt=""></div>
            <div class="gridItems chaves"><img src="@/assets/img/BOULANGERIE-CHAVES.jpg" alt=""></div>
            <div class="gridItems Nolex"><img src="@/assets/img/LogoNolex.4.png" alt=""></div>
        </div> -->

        <!---------------------------------------- MOTION DESIGN ------------------------------------------>

        <!-- <div class="containerGridMotion">
            <div class="gridItems NeueAra"><img src="@/assets/img/vynil.jpg" alt=""></div>
            <div class="gridItems LiquideColor"><video autoplay="autoplay" muted="" loop="infinite" src="@/assets/video/Introduction-Vidéo1.mp4"></video></div>
            <div class="gridItems Laetitia"><img src="@/assets/img/LOGO-LAETITIA_Dépliant-A4-A-copie.png" alt=""></div>
            <div class="gridItems LeBleuEtLeJaune"><img src="@/assets/img/Autoportrait.gif" alt=""></div>
            <div class="gridItems Nolex"><img src="@/assets/img/LogoNolex.4.png" alt=""></div>
        </div> -->

        <!------------------------------------------- ILLUSTRATION  --------------------------------------->

        <!-- <div class="containerGridIllustration">
            <div class="gridItems NeueAra"><img src="@/assets/img/vynil.jpg" alt=""></div>
            <div class="gridItems AlianceC"><img src="@/assets/img/Société-inclusive.gif" alt=""></div>
            <div class="gridItems LaRucheAVelo"><img src="@/assets/img/cycliste.jpg"></div>
            <div class="gridItems HolistiqueCo"><img src="@/assets/img/HOLISTIQUE&CO.png" alt=""></div>
            <div class="gridItems FightCamp"><img src="@/assets/img/Fight-Camp.png" alt=""></div>
            <div class="gridItems LCJ"><img src="@/assets/img/LCJ.png" alt=""></div>
            <div class="gridItems LeBleuEtLeJaune"><img src="@/assets/img/Autoportrait.gif" alt=""></div>
            <div class="gridItems chaves"><img src="@/assets/img/BOULANGERIE-CHAVES.jpg" alt=""></div>
        </div> -->

        <!---------------------------- BRANDING ---------------------------->


         <!-- <div class="containerGridBranding">
            <div class="gridItems LaRucheAVelo"><img src="@/assets/img/cycliste.jpg"></div>
            <div class="gridItems HolistiqueCo"><img src="@/assets/img/HOLISTIQUE&CO.png" alt=""></div>
            <div class="gridItems LaColine"><img src="@/assets/img/LOGO-CDF_Dépliant-A4-A.png" alt=""></div>
            <div class="gridItems Laetitia"><img src="@/assets/img/LOGO-LAETITIA_Dépliant-A4-A-copie.png" alt=""></div>
            <div class="gridItems LeBleuEtLeJaune"><img src="@/assets/img/Autoportrait.gif" alt=""></div>
            <div class="gridItems chaves"><img src="@/assets/img/BOULANGERIE-CHAVES.jpg" alt=""></div>
            <div class="gridItems Nolex"><img src="@/assets/img/LogoNolex.4.png" alt=""></div>
        </div> -->


        <!--------------------------------- GRAPHISME ------------------------------->

        <!-- <div class="containerGridGraphisme">
            <div class="gridItems NeueAra"><img src="@/assets/img/vynil.jpg" alt=""></div>
            <div class="gridItems N"><img src="@/assets/img/5.jpg" alt=""></div>
            <div class="gridItems FightCamp"><img src="@/assets/img/Fight-Camp.png" alt=""></div>
            <div class="gridItems Sixfeet"><img src="@/assets/img/Sixfeet.jpg" alt=""></div>
            <div class="gridItems LeBleuEtLeJaune"><img src="@/assets/img/Autoportrait.gif" alt=""></div>
            <div class="gridItems Blue"><img src="@/assets/img/BLUE.jpg" alt=""></div>
            <div class="gridItems chaves"><img src="@/assets/img/BOULANGERIE-CHAVES.jpg" alt=""></div>
        </div> -->


        <!---------------------------- ÉDITION -------------------------------->

        <!-- <div class="containerGridEdition">
            <div class="gridItems AlianceC"><img src="@/assets/img/Société-inclusive.gif" alt=""></div>
            <div class="gridItems HolistiqueCo"><img src="@/assets/img/HOLISTIQUE&CO.png" alt=""></div>
            <div class="gridItems LCJ"><img src="@/assets/img/LCJ.png" alt=""></div>
            <div class="gridItems Sixfeet"><img src="@/assets/img/Sixfeet.jpg" alt=""></div>
            <div class="gridItems LaColine"><img src="@/assets/img/LOGO-CDF_Dépliant-A4-A.png" alt=""></div>
            <div class="gridItems Laetitia"><img src="@/assets/img/LOGO-LAETITIA_Dépliant-A4-A-copie.png" alt=""></div>
            <div class="gridItems Blue"><img src="@/assets/img/BLUE.jpg" alt=""></div>
            <div class="gridItems chaves"><img src="@/assets/img/BOULANGERIE-CHAVES.jpg" alt=""></div>
        </div> -->


        <!------------------ WEB ----------------------->

        <!-- <div class="containerGridWeb">
            <div class="gridItems LaRucheAVelo"><img src="@/assets/img/cycliste.jpg"></div>
            <div class="gridItems LiquideColor"><video autoplay="autoplay" muted="" loop="infinite" src="@/assets/video/Introduction-Vidéo1.mp4"></video></div>
            <div class="gridItems Laetitia"><img src="@/assets/img/LOGO-LAETITIA_Dépliant-A4-A-copie.png" alt=""></div>
            <div class="gridItems Nolex"><img src="@/assets/img/LogoNolex.4.png" alt=""></div>
        </div> -->
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
