<template>


<navbar></navbar>
<intro-card></intro-card>
<grid></grid>
<main-footer></main-footer>

</template>

<script>
import IntroCard from '../components/IntroCard.vue'
import Grid from '../components/Grid.vue'
import NavBar from '../components/NavBar.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
    name: 'home-again',
    components: {
        'intro-card': IntroCard,
        'navbar': NavBar,
        'grid': Grid,
        'main-footer': MainFooter
    }
}

</script>