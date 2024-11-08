<template>
  
  <HeaderComponent :menu_routes="menu_routes" />
  
    <RouterView/>
  
  <FooterComponent/>

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.page {
    min-height: 100vh;
    padding: 20px;
    background-color: #f5f5f5;
}

</style>