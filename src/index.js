// @flow
import * as React from 'react'
import elements from './elements'

type Styles = { [key: string]: string }
// eslint-disable-next-line flowtype/no-weak-types
type _Selector = string | ((props: *) => any)
type Selector = string | _Selector[]

const createStyleElement = (element: string) => (styles: Styles) => (
  selector: Selector
) => {
  const display = []
    .concat(selector)
    .filter(v => typeof v === 'string')
    .join(' ')

  return class extends React.Component<{ children?: React.Node }> {
    static displayName = `styled(${display})`
    render() {
      const { children, ...rest } = this.props
      const className = Array.isArray(selector)
        ? selector
            .map(s => {
              if (typeof s === 'function') {
                const result = s(rest)
                return result && styles[result]
              }
              return styles[s]
            })
            .filter(Boolean)
            .join(' ')
        : styles[selector]
      return React.createElement(element, { className, ...rest }, children)
    }
  }
}

export const styledStyle = (styles: Styles) =>
  elements.reduce((acc, el) => {
    acc[el] = createStyleElement(el)(styles)
    return acc
  }, {})
