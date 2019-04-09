<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FancyInput/>
  </div>
</template>

<script>
import FancyInput from '@/components/FancyInput'

export default {
  name: 'app',
  components: {
    FancyInput,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
