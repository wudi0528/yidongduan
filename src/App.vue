<template>
  <div id="app">
    <router-view/>
        <dibu></dibu>
  </div>
</template>
<script>
  import dibu from './components/dibu.vue'
export default {
  name: 'App',
  components:{
    dibu
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html{
  font-size:100px;
}
</style>
