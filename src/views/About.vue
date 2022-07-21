<template>

<NavBar/>
<h1>A Propos</h1>
<MainFooter/>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
    name: 'About',
    components: {
        'NavBar': NavBar,
        'MainFooter': MainFooter
    }
}

</script>