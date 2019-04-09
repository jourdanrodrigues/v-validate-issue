<template>
  <label>
    <input :name="name">
  </label>
</template>

<script>
export default {
  name: 'Input',
  props: { name: String },
}
</script>

<style scoped>

</style>
