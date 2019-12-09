<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand href="#"><img src="@/assets/logo.png" width="120"></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/Productos"><span>Productos</span></router-link></b-nav-item>
        <b-nav-item><router-link to="/Estadisticas"><span>Estadisticas</span></router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <router-view/>
   <div class="fluid-container footer">
    <p class="text-center">Copyright © 2019, Nicolas Reveco. All Rights Reserved.</p>
  </div>  
  </div>
  
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app a{
color:#fff;
}
.dropdown a{
color:#000;
}
.fluid-container.footer{
  background: #17A2B8;
  
}
.fluid-container.footer > *:last-child {
    margin-bottom: 0px;
    color: #fff;
}


</style>
