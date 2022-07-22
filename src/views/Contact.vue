<template>
<div class="mainContact">
    <NavBar class="containerHeader"><img class="contactLogo" src="@/assets/img/CONTACT.png" alt=""></NavBar>
    <div class="container">
        <main class="containerContact">
            <div class="contact">
                <p class="line">Télephone: <strong>06 99 79 00 80</strong></p>
                <p class="line2">Mail: <strong>hello@pepenome.fr</strong></p>
                <p>Adresse:  <strong>94 boulevard des belges <br>44300 NANTES</strong></p> 
                <SocialMedia class="socialLink"/>
            </div>
            <div class="contacetezMoi">
                <p>ENVIE DE COLLABORERE SUR UN NOUVEAU PROJET?</p>
                <h2>CONTACTEZ MOI!</h2>
            </div>
        </main>
        <Footer/>
    </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Footer from '@/components/Footer.vue'
export default{
    name: 'contact',
    components: {
        NavBar,
        SocialMedia,
        Footer
    },
};
</script>