<template>

<NavBar/><br><br><br><br><br><br>
Page de detail projet
Pour chaque lien sur les image utiliser le code suivant 
<pre>
    &lt;router-link :to="{ name: 'detail', params: { name: 'nameOfProject' } }">Votre asset ici&lt;/router-link>
</pre>
<MainFooter/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MainFooter from '@/components/MainFooter.vue'



export default {
    name: 'Detail',
    components: {
        'NavBar': NavBar,
        'MainFooter': MainFooter,
    },
}

</script>