<template>

<NavBar><video autoplay="autoplay" muted="" loop="infinite" src="@/assets/video/aPropos.mp4" alt="animation présentant les différentes compétences"/></NavBar>
<AboutCard/>
<CredoCard/>
<ReviewCard/>
<!-- <ReviewCardTest/> -->
<MainFooter class='main-footer__up--black' />

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AboutCard from '@/components/AboutCard.vue'
import CredoCard from '@/components/CredoCard.vue'
import ReviewCard from '@/components/ReviewCard.vue'
// import ReviewCardTest from '@/components/ReviewCardTest.vue'
import MainFooter from '@/components/MainFooter.vue'
export default {
    name: 'About',
    components: {
        NavBar,
        AboutCard,
        CredoCard,
        ReviewCard,
        // ReviewCardTest,
        MainFooter
    }
}

</script>