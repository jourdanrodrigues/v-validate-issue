<template>
  <label>
    <input type="email" :value="value" @input="$emit('input', $event.target.value)"/>
  </label>
</template>

<script>
export default {
  name: 'TestInput',

  data () {
    return {}
  },
}
</script>

<style scoped lang="stylus">
</style>
