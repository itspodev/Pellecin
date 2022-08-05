<template>
  <NavBar>
    <video
      autoplay="autoplay"
      muted=""
      loop="infinite"
      src="@/assets/video/Mes-projets2.mp4"
      alt="animation présentant les différents projets"
    ></video>
  </NavBar>
  <GridAgain />
  <MainFooter />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MainFooter from "@/components/MainFooter.vue";
import GridAgain from "@/components/GridAgain.vue";

export default {
  name: "Project",
  components: {
    NavBar: NavBar,
    MainFooter: MainFooter,
    GridAgain: GridAgain,
  },
};
</script>
