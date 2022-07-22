<template>

<NavBar><video autoplay="autoplay" muted="" loop="infinite" src="@/assets/video/aPropos.mp4"/></NavBar>
<AboutCard/>
<CredoCard/>
<ReviewCard/>
<MainFooter/>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AboutCard from '@/components/AboutCard.vue'
import CredoCard from '@/components/CredoCard.vue'
import ReviewCard from '@/components/ReviewCard.vue'
import MainFooter from '@/components/MainFooter.vue'
export default {
    name: 'About',
    components: {
        NavBar,
        AboutCard,
        CredoCard,
        ReviewCard,
        MainFooter
    }
}

</script>