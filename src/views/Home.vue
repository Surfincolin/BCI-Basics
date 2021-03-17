<template>
  <div class="home">
    <!-- <img id="brain-img" alt="Vue logo" srcset="../assets/main-brain.png 2x"> -->
    <Landing msg="Welcome to BCI Basics"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue'

export default {
  name: 'Home',
  metaInfo: {
    title: 'BCI Basics',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
			{ charset: 'utf-8' },
      {
        name: 'description',
        content: 'This site aims to provide entry level information about brain computer interfaces.'
      },
      {
        property: 'og:description',
        content: 'This site aims to provide entry level information about brain computer interfaces.'
      }
    ]
  },
  components: {
    Landing
  }
}
</script>

<style lang="scss">
#brain-img {
	padding: 20px;
}
</style>
