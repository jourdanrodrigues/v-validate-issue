<template>
  <div>
    <TestInput name="email-1" v-model="email" v-validate="'required'"/>
    <TestInput name="email-2" v-model="email" v-validate="'required|email'"/>
  </div>
</template>

<script>
import TestInput from '@/components/TestInput'

export default {
  name: 'Test',
  components: { TestInput },

  data () {
    return {
      email: '',
    }
  },
}
</script>
