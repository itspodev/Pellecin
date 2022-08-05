<template>
  <div class="main-footer">
    <div :class="this.class">
      <p>{{ footerTxt }}</p>
      <p>
        <a href="mailto:hello@pepenome.fr" target="_blank">{{ footerTxtContact }}</a>
      </p>
      <SocialMedia />
    </div>
  </div>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
export default {
  components: { SocialMedia },
  name: "ContactContainer",
  data: () => {
    return {
      footerTxt: "pour tous vos projets",
      footerTxtContact: "contactez-moi !",
    };
  },
  props: {
    class: {
      default: "main-footer__up",
      type: String,
    },
  },
};
</script>
