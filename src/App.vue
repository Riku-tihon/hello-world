<template>
  <div id="nav">
    <router-link to="/1">Home</router-link> |
    <router-link to="/favoritecars/1">Favorite Cars</router-link> |
    <router-link to="/newcar">New car</router-link> |
    <router-link to="/calculator"> Calculator</router-link> |
    <button @click="  this.$store.dispatch('logout')">logout</button>
    <div><button @click="this.$store.commit('gridsOrTable','grids')">Grids</button><button @click="this.$store.commit('gridsOrTable','table')">Table</button></div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
