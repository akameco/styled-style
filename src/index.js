// @flow
import * as React from 'react'
import warning from 'warning'
import elements from './elements'

type Styles = { [key: string]: string }
type _Selector = string | ((props: *) => *)
type Selector = string | Array<_Selector>

const createStyleElement = (element: string) => (styles: Styles) => (
  selector: Selector
) => {
  const display = []
    .concat(selector)
    .filter(v => typeof v === 'string')
    .join(' ')

  // eslint-disable-next-line flowtype/no-weak-types
  function createClassname(_selector: Selector, rest: any): string {
    if (Array.isArray(_selector)) {
      return _selector
        .map(v => {
          if (typeof v === 'function') {
            const result = v(rest)
            return result && styles[result]
          }
          warning(styles[v], `.${v} selector not found in css file.`)
          return styles[v]
        })
        .filter(Boolean)
        .join(' ')
    }

    warning(styles[_selector], `.${_selector} selector not found in css file.`)

    return styles[_selector]
  }

  return class extends React.Component<{ children?: React.Node }> {
    static displayName = `styled(${display})`
    render() {
      const { children, ...rest } = this.props
      const className = createClassname(selector, rest)

      return React.createElement(element, { className, ...rest }, children)
    }
  }
}

export const styledStyle = (styles: Styles) =>
  elements.reduce((acc, el) => {
    acc[el] = createStyleElement(el)(styles)
    return acc
  }, {})
