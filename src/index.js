// @flow
import * as React from 'react'
import elements from './elements'

type Styles = { [key: string]: string }

const createStyleElement = (element: string) => (styles: Styles) => (
  selector: string
  // eslint-disable-next-line react/display-name
) => ({ children, ...rest }: { children?: React.Node }) =>
  React.createElement(
    element,
    { className: styles[selector], ...rest },
    children
  )

export const styledStyle = (styles: Styles) =>
  elements.reduce((acc, el) => {
    acc[el] = createStyleElement(el)(styles)
    return acc
  }, {})
