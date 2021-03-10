<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/resources">Resources</router-link> |
      <router-link to="/review">Device Review</router-link> |
      <router-link to="/bci">What is BCI</router-link> |
      <router-link to="/eeg">What is EEG</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
$default-white: #FFFFFF;

body {
  background: #202020;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
}

#nav {
  padding: 30px;
  border-bottom: 5px solid  #FD7D00;

  a {
    font-weight: bold;
    color: #FFFFFF;

    &.router-link-exact-active {
      color: #FD7D00;
    }
  }
}

.article {
  max-width: 1024px;
  margin: auto;
  padding: 20px;
  text-align: left;
}

a {
  color: $default-white;

  &:visited {
    color: #AAAAAA;
  }
}
</style>
<!-- 
Blackish: #202020
Dark Grey: #3F3F3F
Medium Grey: #707070
Orange: #FD7D00 #BD5E00 - C #0086B0 #00C1FC
White: #FFFFFF
 -->
