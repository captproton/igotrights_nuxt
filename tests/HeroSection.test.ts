import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '../components/HeroSection.vue'

describe('HeroSection', () => {
  it('renders properly', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Stand Against Deportation')
    expect(wrapper.text()).toContain('Take Action')
    expect(wrapper.text()).toContain('Latest News')
  })

  it('has correct link destinations', () => {
    const wrapper = mount(HeroSection)
    const links = wrapper.findAll('a')
    
    // Find the "Take Action" link
    const actionLink = links.find(link => link.text().includes('Take Action'))
    expect(actionLink?.attributes('href')).toBe('/actions')
    
    // Find the "Latest News" link
    const newsLink = links.find(link => link.text().includes('Latest News'))
    expect(newsLink?.attributes('href')).toBe('/news')
  })
})
