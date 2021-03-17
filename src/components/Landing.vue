<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="definition">
      <h3>BCI</h3>
      <h4>Brain Computer Interface</h4>
      <p>
        <strong>:</strong> <span class=def>A way of connecting your brain to an external device.</span><br>
        <strong>//</strong> You can think of it like a computer mouse. The mouse allows you to control your computer through hand movements and clicks. A BCI's intentions are similar only instead of your hand, you use brain activity.
      </p>
    </div>
    <div class="definition">
      <h3>EEG</h3>
      <h4>Electroencephalogram</h4>
      <p>
        <strong>:</strong><span class=def> A non-invasive way of recording brain activity.</span><br>
        <strong>//</strong> To keep the computer mouse analogy going, if BCI is the mouse as a whole, then EEG is the actual buttons and lasers on the mouse. EEG uses one or more electrode placed on the scalp that measure levels of electric fields. These measurements can be used to infer brain activity. Check out the <router-link to="/eeg">EEG</router-link> page.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  font-size: 2.5rem;
  margin: 20px 0 0;
}
h4 {
  font-size: 1.8rem;
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $white;
}
.definition {
  max-width: 1024px;
  margin: 0 auto;
  text-align: left;
  padding: 0 20px;
}

.def {
  font-style: italic;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 2.6rem;
}
</style>
