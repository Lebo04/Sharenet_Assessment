<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/contact">ContactUs</router-link>
  </nav>
  <router-view />
</template>

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
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
}

nav a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  margin: 1rem;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
