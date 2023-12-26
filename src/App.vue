<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link>
  </nav>
  <router-view/>
  <custom-directive/>
  <plugins-ex/>
  <store-access/>
</template>

<script>
  import CustomDirective from './views/CustomDirective.vue';
  import PluginsEx from './views/PluginsEx.vue';
  import StoreAccess from './views/StoreAccess.vue';
  export default {
    components: {
      'custom-directive': CustomDirective,
      'plugins-ex': PluginsEx,
      'store-access': StoreAccess,
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
