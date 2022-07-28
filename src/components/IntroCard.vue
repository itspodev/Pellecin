<template>

<div class="intro-card-box" @mouseenter="mouseOverDiv()" >
     <div class="intro-pic"> <!--picture frame -->
        <div class="pola-picture-box" :class="{ 'picAnimation': isPicAnimActive }"><img src="@/assets/img/PHOTO-POLA.png" alt="portrait polaroid de Noémie Pellencin"/></div>
     </div> 
    <div class="intro-text">  <!-- text -->
        <h3>PEPENOME</h3>
        <div class="intro-name">
            <h2>Noémie</h2>
            <h2>PELLENCIN</h2>
            <hr>
        </div>
        <div class="intro-desc">
            <p>Auto-entrepreneuse depuis février 2021 en tant que <strong>Directrice Artistique et Designer Graphique</strong>.</p>
            <p>Je <strong>donne vie à vos projets</strong> et suis à l'écoute pour toutes vos demandes: une identité visuelle unique en son genre, une vidéo motion sur mesure,
            une carte de visite créative, etc.</p>
            <p><strong>Bienveillance et créativité</strong> sont au coeur des projets que j'entreprends avec mes clients.</p>
        </div>
        <h3 @mouseover="mouseOverH3()" @mouseleave="mouseLeaveH3()" class="intro-more"><router-link class="textTransition" to="/about" @click.native="scrollToTop"><span :class="{ 'textAnimation-1': isTextAnimActive }">EN</span> <span :class="{ 'textAnimation-2': isTextAnimActive }">SAVOIR</span> <span :class="{ 'textAnimation-3': isTextAnimActive }">PLUS</span></router-link></h3>
    </div>  
</div>

</template>

<script>

export default {
    name: 'intro-card',
    data: () => {
        return {
            isTextAnimActive: false,
            isPicAnimActive: false,
        }
    },
    methods: {
        scrollToTop: function() {
            window.scrollTo(0,0);
        },
        mouseOverH3() {
            this.isTextAnimActive = true;
        },
        mouseLeaveH3() {
            this.isTextAnimActive = false;
        },
        mouseOverDiv() {
            this.isPicAnimActive = true;
        }
    },  
}

</script>