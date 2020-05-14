<template>
  <div id="app">
    <Login v-if="!status" @isLogin="login"> </Login>
    <Home v-if="status"></Home>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Home,
    Login,
  },
  data() {
    return {
      status: false,
    };
  },
  created() {
    localStorage.clear();
    this.changeStatus();
  },
  methods: {
    login() {
      this.status = true;
    },
    changeStatus() {
      if (localStorage.getItem('nickname')) {
        this.status = true;
      } else {
        this.status = false;
        localStorage.clear();
      }
    },
  },
};
</script>

<style>
body {
  font-family: 'Dosis', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fffdd0;
  margin: 0px;
}

#app {
  margin: 0 auto;
  /* max-width: 270px; */
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

button{
  margin-top: 5px;
}
</style>
