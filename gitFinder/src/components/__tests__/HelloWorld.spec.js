import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
// import HelloWorld from '../HelloWorld.vue'

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })

import Users from "../../views/Users.vue"

describe("Users",()=>{
  it("rendresd ok",()=>{
    const wrapper = mount(Users)
    const title = wrapper.get('h1')
    expect(title.text()).toBe('Ula')
  })
})
