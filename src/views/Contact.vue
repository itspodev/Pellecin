<template>
<div class="mainContact">
    <NavBar class="containerHeader"><img class="contactLogo" src="@/assets/img/CONTACT.png" alt="image de contact stylisée"></NavBar>
    <div class="container">
        <main class="containerContact">
            <div class="contact">
                <p class="line">Télephone: <a href="+33 6 99 79 00 80 "><strong>06 99 79 00 80</strong></a></p>
                <p class="line2">Mail: <a href="mailto:hello@pepenome.fr"><strong>hello@pepenome.fr</strong></a></p>
                <p>Adresse:  <a href="https://www.google.com/maps/place/94+Bd+des+Belges,+44300+Nantes/data=!4m2!3m1!1s0x4805ee8db6e26fe5:0xb5dd0fb05317a8a9?sa=X&ved=2ahUKEwj8-8uH6Iz5AhXR8IUKHYrlCWgQ8gF6BAgFEAE"><strong>94 boulevard des belges <br>&emsp;&ensp;&ensp;&ensp;&ensp;&ensp;44300 NANTES</strong></a></p> 
            </div>
            <div class="contacetezMoi">
                <p>ENVIE DE COLLABORER SUR UN NOUVEAU PROJET ?</p>
                <h2 class="contactanimation">
                    <span style="--i:1">C</span>
                    <span style="--i:2">O</span>
                    <span style="--i:3">N</span>
                    <span style="--i:4">T</span>
                    <span style="--i:5">A</span>
                    <span style="--i:6">C</span>
                    <span style="--i:8">T</span>
                    <span style="--i:9">E</span>
                    <span style="--i:10">Z</span>
                    
                    <span style="--i:11">M</span>
                    <span style="--i:12">O</span>
                    <span style="--i:13">I</span>
                    <span style="--i:14">!</span>
                </h2>
                <!-- <h2>CONTACTEZ MOI!</h2> -->
            </div>
        </main>
        <SocialMedia class="socialLink"/>
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