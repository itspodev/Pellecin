<template>


<NavBar/>
<IntroCard/>
<Grid/>
<MainFooter/>

</template>

<script>
import IntroCard from '../components/IntroCard.vue'
import Grid from '../components/Grid.vue'
import NavBar from '../components/NavBar.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
    name: 'home-again',
    components: {
        'IntroCard': IntroCard,
        'NavBar': NavBar,
        'Grid': Grid,
        'MainFooter': MainFooter
    }
}

</script>