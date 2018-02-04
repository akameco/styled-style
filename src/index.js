// @flow
import * as React from 'react'
import elements from './elements'

type Styles = { [key: string]: string }

const createStyleElement = (element: string) => (styles: Styles) => (
  selector: string
) =>
  class extends React.Component<{ children?: React.Node }> {
    static displayName = `Styled(${element}.${selector})`
    render() {
      const { children, ...rest } = this.props
      return React.createElement(
        element,
        { className: styles[selector], ...rest },
        children
      )
    }
  }

export const styledStyle = (styles: Styles) =>
  elements.reduce((acc, el) => {
    acc[el] = createStyleElement(el)(styles)
    return acc
  }, {})
