<template>

<NavBar/>
<h1>Mes Projets</h1>
<MainFooter/>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
    name: 'project',
    components: {
        'NavBar': NavBar,
        'MainFooter': MainFooter
    }
}

</script>