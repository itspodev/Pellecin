<template>
    <footer class="main-footer">
        <div class="main-footer__up">
            <p>{{footerTxt}}</p>
            <p>{{footerTxtContact}}</p>
            <div class="main-footer__social-media">
                <a v-for="image in footerSocialMedia" :key='image.name' v-bind:href="image.url" target="_blank">
                    <img v-bind:src="require(image.path)" v-bind:alt="image.name">
                </a>
            </div>
        </div>
        <div class="main-footer__bottom">
            <img src="../assets/img/Logo-Pepenome1.png" alt="Pepenome Logo">
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
                    { name:'linkedIn icone', path:'../src/assets/img/Linkedin-01.png', url:'https://www.linkedin.com/in/noémie-pellencin/'},
                    { name:'insta icone', path:'../src/assets/img/Insta-01.png', url:'https://www.instagram.com/pepe_nome/'},
                    { name:'mail icone', path:'../src/assets/img/Mail-01.png', url:'mailto:hello@pepenome.fr'},
                    { name:'behance icone', path:'../src/assets/img/Behance-01.png', url:'https://www.behance.net/pepenome'},
                ],
            }
        }
    }
</script>

<style>

</style>