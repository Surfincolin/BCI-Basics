<template>
  <div id="app">
    <div class='construction'>This site is currently under construction.</div>
    <div id="nav">
      <div class="head-container">
        <div class='head-left'>
          <div class="logo">BCI Basics</div>
        </div>
        <div class='head-right'>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/resources">Resources</router-link> |
          <router-link to="/review">Device Review</router-link> |
          <router-link to="/bci">What is BCI</router-link> |
          <router-link to="/eeg">What is EEG</router-link>
        </div>
      </div>
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

.construction {
  width: 100%;
  background: #FCBB0D;
  padding: 5px;
  color: black;

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

.head-container {
  max-width: 1024px;
  width: 100%;
  margin: auto;
  display: flex;
}

.head-left {
  flex: 1 1 auto;
  text-align: left;
}
.head-right {
  flex: 0 1 auto;
  text-align: right;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4rem;
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
