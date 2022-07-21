<template>
    <footer class="main-footer">
        <div class="main-footer__up">
            <p>{{footerTxt}}</p>
            <p>{{footerTxtContact}}</p>
            <div class="main-footer__social-media">
                <a v-bind:href="image.url">
                    <img :key='image.name' v-for="image in footerSocialMedia" v-bind:src="image.path" v-bind:alt="image.name">
                </a>
            </div>
        </div>
        <div class="main-footer__bottom">
            <img v-bind:src="footerPepenomeLogo.path" v-bind:alt="footerPepenomeLogo.name">
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'MainFooter',
        data: () => {
            return {
                footerTxt: 'pour tous vos projets',
                footerTxtContact: 'contactez-moi !',
                footerSocialMedia: [
                    { name:'linkedIn icone', path:'src/assets/PAGE D\'ACCEUIL/Linkedin-01.png', url:'https://www.linkedin.com/in/noémie-pellencin/'},
                    { name:'insta icone', path:'src/assets/PAGE D\'ACCEUIL/Insta-01.png', url:'https://www.instagram.com/pepe_nome/'},
                    { name:'mail icone', path:'src/assets/PAGE D\'ACCEUIL/Mail-01.png', url:'mailto:hello@pepenome.fr'},
                    { name:'behance icone', path:'src/assets/PAGE D\'ACCEUIL/Behance-01.png', url:'https://www.behance.net/pepenome'},
                ],
                footerPepenomeLogo: { name:'Pepenome Logo version 1', path:'src/assets/PAGE D\'ACCEUIL/Logo Pepenome1.png'}
            }
        }
    }
</script>

<style>

</style>