<template>
  <div id="app">
    <!-- <div class='construction'>This site is currently under construction.</div> -->
    <div id="nav">
      <div class="head-container">
        <div class='head-left'>
          <div class="logo"><router-link to="/"><img srcset="./assets/bci-basics-logo@2x.png"></router-link></div>
        </div>
        <div class='head-right'>
          <router-link to="/">Home</router-link> |
          <router-link to="/eeg">What is EEG</router-link> |
          <router-link to="/bci">What is BCI</router-link> |
          <router-link to="/review">Device Review</router-link> |
          <router-link to="/resources">Resources</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

body {
  background-image: url("./assets/brain-bg-plus.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top 50px right 50%; 
  background-color: $bg-color;
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
  color: $white;
  font-size: 1.2rem;
}

#nav {
  padding: 15px 40px;
  border-bottom: 5px solid  $accent-color;

  a {
    font-weight: bold;
    color: $white;

    &.router-link-exact-active {
      color: $accent-color;
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
  margin: auto
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4rem;
  height: 70px;
  // background-color: blue;

  img {
    height: 100%;
  }
}

.article {
  max-width: 1024px;
  margin: auto;
  padding: 20px;
  text-align: left;
}

a {
  color: $white;

  &:visited {
    color: $white;
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
