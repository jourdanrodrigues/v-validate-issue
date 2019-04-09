import { expect } from 'chai'
import VeeValidate from 'vee-validate'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import FancyInput from '@/components/FancyInput'

const localVue = createLocalVue()
localVue.use(VeeValidate)

describe('FancyInput.vue', () => {
  it('renders ok', () => {
    const wrapper = shallowMount(FancyInput, { localVue })
    expect(wrapper.isVueInstance()).to.be.equal(true)
  })
})
