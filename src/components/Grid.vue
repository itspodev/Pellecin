<template>
  <div class="main-hp-container">
    <div class="hp-container">
      <div class="hp-head">
        <p>PEPENOME</p>
        <br />
        <h1>MES PROJETS</h1>
        <br />
      </div>
      <div class="hp-navbar">
        <h3 class="nav-hp" @click="filterArray('motion')">MOTION DESIGN</h3>
        <h3 class="nav-hp" @click="filterArray('illustration')">ILLUSTRATION</h3>
        <h3 class="nav-hp" @click="filterArray('branding')">BRANDING</h3>
        <h3 class="nav-hp" @click="filterArray('graphisme')">GRAPHISME</h3>
        <h3 class="nav-hp" @click="filterArray('édition')">EDITION</h3>
        <h3 class="nav-hp" @click="filterArray('test')">WEB</h3>
      </div>
    </div>

    <div class="hp-container-2">
      <div class="hp-grid">
        <div class="box-container1">
          <img class="img1" src="@/assets/img/cycliste.jpg" />
          <div class="text-over">
            <h3>La ruche à velos</h3>
            <p>BRANDING, ILLUSTRATION, WEB</p>
          </div>
        </div>
        <div class="box-container2">
          <video class="video1" src="@/assets/video/Introduction-Vidéo1.mp4" loop="infinite" autoplay="autoplay" muted="" />
          <div class="text-over">
            <h3>Liquid Color</h3>
            <p>MOTION DESIGN, WEB</p>
          </div>
        </div>
        <div class="box-container3">
          <img class="img2" src="@/assets/img/vynil.jpg" />
          <div class="text-over">
            <h3>Neue Ara</h3>
            <p>ILLUSTRATION, GRAPHISME, MOTION</p>
          </div>
        </div>
        <div class="box-container4">
          <img class="img3" src="@/assets/img/Société-inclusive.gif" />
          <div class="text-over">
            <h3>Alliance C</h3>
            <p>ILLUSTRATION, EDITION</p>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-voirplus">
      <router-link to="/projets"><button class="voirplus">VOIR PLUS</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: ["projectArray"],
  data: function () {
    return {
      filter: "web",
    };
  },
  methods: {
    filterArray: function (filter) {
      this.filter = filter;
    },
  },
};
</script>
