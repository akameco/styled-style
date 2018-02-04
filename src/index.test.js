// @flow
import * as React from 'react'
import { mount } from 'enzyme'
import { styledStyle } from '.'

function setup() {
  const styles = { center: 'center' }
  const { div } = styledStyle(styles)
  const Center = div('center')
  return mount(<Center />)
}

test('className', () => {
  const wrapper = setup()
  expect(wrapper.childAt(0).prop('className')).toBe('center')
})

test('displayName', () => {
  const wrapper = setup()
  expect(wrapper.name()).toBe('styled(center)')
})
