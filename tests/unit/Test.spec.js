import { expect } from 'chai'
import VeeValidate from 'vee-validate'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Test from '@/components/Test'

const localVue = createLocalVue()
localVue.use(VeeValidate)

describe('Test.vue', () => {
  it('renders ok', () => {
    const wrapper = shallowMount(Test, { localVue })
    expect(wrapper.isVueInstance()).to.be.equal(true)
  })
})
