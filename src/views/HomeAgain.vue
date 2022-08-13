<template>
  <NavBar>
    <video autoplay="autoplay" muted="" loop="infinite" src="@/assets/video/VIDÉO-MOTION-720.mp4" alt="animation pepenome"></video>
  </NavBar>
  <IntroCard />
  <Grid :home="true" />
  <MainFooter />
</template>

<script>
import IntroCard from "@/components/IntroCard.vue";
import Grid from "@/components/Grid/Grid.vue";
import NavBar from "@/components/NavBar.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "home-again",
  components: {
    IntroCard,NavBar,Grid,MainFooter,
  },
};
</script>
