<template>
    <footer class="main-footer">
        <div class="main-footer__up">
            <p>{{footerTxt}}</p>
            <p>{{footerTxtContact}}</p>
            <div class="main-footer__social-media">
                <img :key='image.name' v-for="image in footerSocialMedia" v-bind:src="image.path" v-bind:alt="image.name">
            </div>
        </div>
        <div class="main-footer__bottom">
            <img v-bind:src="footerPepenomeLogo.path" v-bind:alt="footerPepenomeLogo.name">
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'main-footer',
        data: () => {
            return {
                footerTxt: 'pour tout vos projets',
                footerTxtContact: 'contactez moi !',
                footerSocialMedia: [
                    { name:'linkedIn icone', path:'src/assets/PAGE D\'ACCEUIL/Linkedin-01.png'},
                    { name:'insta icone', path:'src/assets/PAGE D\'ACCEUIL/Insta-01.png'},
                    { name:'mail icone', path:'src/assets/PAGE D\'ACCEUIL/Mail-01.png'},
                    { name:'behance icone', path:'src/assets/PAGE D\'ACCEUIL/Behance-01.png'},
                ],
                footerPepenomeLogo: { name:'Pepenome Logo version 1', path:'src/assets/PAGE D\'ACCEUIL/Logo Pepenome1.png'}
            }
        }
    }
</script>

<style>

</style>