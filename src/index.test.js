// @flow
import * as React from 'react'
import { shallow } from 'enzyme'
import { styledStyle } from '.'

test('className', () => {
  const styles = { center: 'center' }
  const { div } = styledStyle(styles)
  const Center = div('center')
  const wrapper = shallow(<Center />)
  expect(wrapper.prop('className')).toBe('center')
})
