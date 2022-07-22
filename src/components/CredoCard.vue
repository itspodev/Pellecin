<template>
    <div class="credo-card">
        <div class="credo-card__text-box">  <!-- text -->
            <h2>Mes valeurs,</h2>
            <h2>mes inspirations.</h2>
            <hr>
            <p>Mes valeurs et mes inspirations sont au coeur de chacun de mes projets. Je suis 
                <span>engagée dans le bien-être</span> de mes clients et de mes collaborateurs, je prône 
                <span>la bienveillance et l'écoute</span> pour chaque projet qui se présente à moi.</p>
            <p>J'apporte <span>une attention toute particulière à l'environnement et à l'urgence écologique</span>
            . Je suis plus enclin à travailler ou à apporter des solutions à des projets engagés</p>
        </div>  
        <div class="credo-card__img-box"> <!--picture frame -->
            <img src="@/assets/img/a_propos.gif"/>
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'CredoCard'
    };
</script>