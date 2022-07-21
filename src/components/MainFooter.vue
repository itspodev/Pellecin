<template>
    <footer class="main-footer">
        <div class="main-footer__up">
            <p>{{footerTxt}}</p>
            <p>{{footerTxtContact}}</p>
            <div class="main-footer__social-media">
                <a v-for="image in footerSocialMedia" :key='image.name' v-bind:href="image.url" target="_blank">
                    <img v-bind:src="image.path" v-bind:alt="image.name">
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
                    { name:'linkedIn icone', path:'../assets/img/Linkedin-01.png', url:'https://www.linkedin.com/in/noémie-pellencin/'},
                    { name:'insta icone', path:'../assets/img/Insta-01.png', url:'https://www.instagram.com/pepe_nome/'},
                    { name:'mail icone', path:'../assets/img/Mail-01.png', url:'mailto:hello@pepenome.fr'},
                    { name:'behance icone', path:'../assets/img/Behance-01.png', url:'https://www.behance.net/pepenome'},
                ],
                footerPepenomeLogo: { name:'Pepenome Logo version 1', path:'../assets/img/Logo-Pepenome1.png'}
            }
        }
    }
</script>

<style>

</style>