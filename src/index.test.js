// @flow
import * as React from 'react'
import { mount } from 'enzyme'
import { styledStyle } from '.'

test('when single string', () => {
  const { div } = styledStyle({ center: 'css-module-center' })
  const Center = div('center')
  const wrapper = mount(<Center />)
  expect(wrapper.childAt(0).prop('className')).toBe('css-module-center')
  expect(wrapper.name()).toBe('styled(center)')
})

test('when array', () => {
  const { div } = styledStyle({
    button: 'css-button',
    primary: 'css-primary',
  })
  const PrimaryButton = div(['button', 'primary'])
  const wrapper = mount(<PrimaryButton />)
  expect(wrapper.name()).toBe('styled(button primary)')
  expect(wrapper.childAt(0).prop('className')).toBe('css-button css-primary')
})
