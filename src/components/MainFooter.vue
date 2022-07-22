<template>
    <ContactContainer/>
    <Footer/>
</template>

<script>
import Footer from './Footer.vue'
import ContactContainer from './ContactContainer.vue'
export default {
    components: { 
        Footer,
        ContactContainer
    },
    name: 'MainFooter',
}
</script>