<template>
  <header>
    <!-- <nav :class="this.class"> -->
      <div>
      <slot></slot>
      </div>
      <div class="navBar">
        <router-link to="/"><img src="@/assets/img/Logo-Pepenome1.png" alt="logo pepenome" class="logo-pepenome" /></router-link>
        <ul class="navs hidden" id="navbar">
          <li><router-link to="/projets">MES PROJETS</router-link></li>
          <li><router-link to="/about">À PROPOS</router-link></li>
          <li><router-link to="/contact">CONTACT</router-link></li>
        </ul>
        <img src="@/assets/img/menu-hamburger.png" class="menuBurger" alt="" @click="hamburger_menu"/>
      </div>
      <!-- <div class="NavContainerSlot"> -->
      
      <!-- </div> -->
        
    <!-- </nav> -->
  </header>
</template>

<script>
export default {
  name: "navbar",
  name: 'App',
  data: function() {
    return {
      show: false
    }
  },
  props: {
    class : {
        default:'bloc',
        type:String
    }
  },
  methods: {
    hamburger_menu: function() {
      this.show = !this.show
      if(this.show) {
        document.getElementById('navbar').classList.remove('hidden')
      }
      else {
        document.getElementById('navbar').classList.add('hidden')
      }
    }
  }
};
</script>
