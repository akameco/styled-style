// @flow
import * as React from 'react'
import elements from './elements'

type Styles = { [key: string]: string }

const createStyleElement = (element: string) => (styles: Styles) => (
  selector: string | string[]
) => {
  const className = Array.isArray(selector)
    ? selector.map(s => styles[s]).join(' ')
    : styles[selector]

  const display = [].concat(selector).join(' ')

  return class extends React.Component<{ children?: React.Node }> {
    static displayName = `styled(${display})`
    render() {
      const { children, ...rest } = this.props
      return React.createElement(element, { className, ...rest }, children)
    }
  }
}

export const styledStyle = (styles: Styles) =>
  elements.reduce((acc, el) => {
    acc[el] = createStyleElement(el)(styles)
    return acc
  }, {})
