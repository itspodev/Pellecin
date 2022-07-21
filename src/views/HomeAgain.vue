<template>

<!-- <intro-card></intro-card> -->
<home-projects></home-projects>

</template>

<script>
import IntroCard from '../components/IntroCard.vue'
import HomeProjects from '../components/HomeProjects.vue'
export default {
    name: 'home-again',
    components: {
        'intro-card': IntroCard,
        'home-projects': HomeProjects
    }
}

</script>