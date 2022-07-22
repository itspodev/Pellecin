<template>

<NavBar/>
<AboutCard/>
<CredoCard/>
<ReviewCard/>
<MainFooter/>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import AboutCard from '../components/AboutCard.vue'
import CredoCard from '../components/CredoCard.vue'
import ReviewCard from '../components/ReviewCard.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
    name: 'About',
    components: {
        'NavBar': NavBar,
        'AboutCard': AboutCard,
        'CredoCard': CredoCard,
        'ReviewCard': ReviewCard,
        'MainFooter': MainFooter
    }
}

</script>