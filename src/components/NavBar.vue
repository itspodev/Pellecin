<template>
  <header>
    <nav :class="this.class">
      <div class="navBar">
        <router-link to="/"><img src="@/assets/img/Logo-Pepenome1.png" alt="logo pepenome" class="logo-pepenome" /></router-link>
        <ul>
          <li><router-link to="/projets">MES PROJETS</router-link></li>
          <li><router-link to="/about">À PROPOS</router-link></li>
          <li><router-link to="/contact">CONTACT</router-link></li>
        </ul>
      </div>
      <div class="NavContainerSlot">
      <slot></slot>
      </div>
        <img src="@/assets/img/menu-hamburger.png" class="menuBurger" alt=""/>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navbar",
  name: 'App',
  props: {
    class : {
        default:'bloc',
        type:String
    }
  }
};
</script>
