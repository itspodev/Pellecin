<template>

<div class="intro-card-box">
     <div class="intro-pic"> <!--picture frame -->
        <div class="pola-picture-box"><img src="@/assets/img/PHOTO-POLA.png"/></div>
     </div> 
    <div class="intro-text">  <!-- text -->
        <h3>PEPENOME</h3>
        <div class="intro-name">
            <h2>Noémie</h2>
            <h2>PELLENCIN</h2>
            <hr>
        </div>
        <div class="intro-desc">
            <p>Auto-entrepreneuse depuis février 2020 en tant que Directrice Artistique et Designer Graphique</p>
            <p>Je donne vie à vos projets et suis à l'écoute pour toutes vos demandes: une identité visuelle unique en son genre, une vidéo motion sur mesure,
            une carte de visite créative, etc.</p>
            <p>Bienveillance et créativité sont au coeur des projets que j'entreprends avec mes clients.</p>
        </div>
        <h3 class="intro-more"><router-link to="/about">EN SAVOIR PLUS</router-link></h3>
    </div>  
</div>

</template>

<script>

export default {
    name: 'intro-card'
}

</script>