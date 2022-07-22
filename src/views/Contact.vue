<template>
<div class="mainContact">
    <NavBar>
        <img class="contactLogo" src="../assets/img/CONTACT.png" alt="">
    </NavBar>

    <div class="container">
        <main class="containerContact">
            <div class="contact">
                <p>Télephone: <a href="+33 6 99 79 00 80"><strong>06 99 79 00 80</strong></a></p>
                <hr class="lineBottom">
                <p>Mail: <a href="mailto:hello@pepenome.fr"><strong>hello@pepenome.fr</strong></a></p>
                <hr class="lineTop">
                <p>Adresse: <a href="https://www.google.com/maps/place/94+Bd+des+Belges,+44300+Nantes/data=!4m2!3m1!1s0x4805ee8db6e26fe5:0xb5dd0fb05317a8a9?sa=X&ved=2ahUKEwj8-8uH6Iz5AhXR8IUKHYrlCWgQ8gF6BAgFEAE"><strong>94 boulevard des belges <br>&emsp;&thinsp;&ensp;&ensp;&ensp;&ensp; 44300 NANTES</strong></a></p>
            </div>

            <div class="contacetezMoi">
                <p>ENVIE DE COLLABORERE SUR UN NOUVEAU PROJET?</p>
                <h2>CONTACTEZ MOI!</h2>
            </div>
        </main>

        <div class="socialLink">
            <a v-for="image in footerSocialMedia" :key='image.name' v-bind:href="image.url" target="_blank">
                <img v-bind:src="image.path" v-bind:alt="image.name">
            </a>
        </div>

        <footer class="logoBottom">
            <img src="../assets/img/Logo-Pepenome1.png" alt="Pepenome Logo"/>
        </footer>
    </div>
</div>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import linkedIn from '@/assets/img/Linkedin-01.png'
import Insta from '@/assets/img/Insta-01.png'
import Mail from '@/assets/img/Mail-01.png'
import Behance from '@/assets/img/Behance-01.png'
export default{
    name: 'contact',

    components: {
        'NavBar': NavBar
    },

     data: () => {
            return {
                footerSocialMedia: [
                    { name:'linkedIn icone', path:linkedIn, url:'https://www.linkedin.com/in/noémie-pellencin/'},
                    { name:'insta icone', path:Insta, url:'https://www.instagram.com/pepe_nome/'},
                    { name:'mail icone', path:Mail, url:'mailto:hello@pepenome.fr'},
                    { name:'behance icone', path:Behance, url:'https://www.behance.net/pepenome'},
                ],
            }
        }
};


</script>