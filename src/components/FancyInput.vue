<template>
  <div>
    <SimpleInput name="test-1" v-model="test1" v-validate="'required'" :disabled="errors.has('test-1')"></SimpleInput>
    <SimpleInput name="test-2" v-model="test2" v-validate="'required'" :disabled="errors.has('test-2')"></SimpleInput>
    <SimpleInput name="test-3" v-model="test3" v-validate="'required'" :disabled="errors.has('test-3')"></SimpleInput>
    <SimpleInput name="test-4" v-model="test4" v-validate="'required'" :disabled="errors.has('test-4')"></SimpleInput>
  </div>
</template>
<script>
import SimpleInput from '@/components/SimpleInput'

export default {
  name: 'FancyInput',
  components: { SimpleInput },
  data () {
    return {
      test1: '',
      test2: '',
      test3: '',
      test4: '',
    }
  },
}
</script>
