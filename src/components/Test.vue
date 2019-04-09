<template>
  <div>
    <TestInput name="email" v-model="objData.email" v-validate="'required|email'"/>
    <TestInput name="email" v-model="objData.email" v-validate="'required|email'"/>
  </div>
</template>

<script>
import TestInput from '@/components/TestInput'

export default {
  name: 'Test',
  components: { TestInput },

  data () {
    return {
      objData: { publishers: [], disciplines: [], country: null },
    }
  },
}
</script>

<style scoped>
</style>
