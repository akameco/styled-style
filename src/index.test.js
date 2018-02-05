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
  const PrimaryButton = div([
    'button',
    'primary',
    props => props.hidden && 'hidden',
  ])
  const wrapper = mount(<PrimaryButton />)
  expect(wrapper.name()).toBe('styled(button primary)')
  expect(wrapper.childAt(0).prop('className')).toBe('css-button css-primary')
})

test('with props', () => {
  const { div } = styledStyle({
    btn: 'css-button',
    primary: 'css-primary',
  })
  const Button = div(['btn', p => p.color === 'primary' && 'primary'])
  const wrapper = mount(<Button color="primary">Primary Button</Button>)
  expect(wrapper.name()).toBe('styled(btn)')
  expect(wrapper.childAt(0).prop('className')).toBe('css-button css-primary')
})

test('with no props', () => {
  const { div } = styledStyle({
    btn: 'css-button',
  })
  const Button = div(['btn', p => p.color === 'primary' && 'primary'])
  const wrapper = mount(<Button color="ignore">Normal Button</Button>)
  expect(wrapper.name()).toBe('styled(btn)')
  expect(wrapper.childAt(0).prop('className')).toBe('css-button')
})
