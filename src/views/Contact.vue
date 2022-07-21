<template>

<NavBar/>
<h1>Contact</h1>
<MainFooter/>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
    name: 'contact',
    components: {
        'NavBar': NavBar,
        'MainFooter': MainFooter
    }
}

</script>