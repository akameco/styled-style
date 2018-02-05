# styled-style

[![Build Status](https://travis-ci.org/akameco/styled-style.svg?branch=master)](https://travis-ci.org/akameco/styled-style)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> css modules like styled-components

## Why?

[styled-components](https://www.styled-components.com/) are wonderful!!!
However, if there are many existing css, it can not be transferred immediately.
[styled-style](https://github.com/akameco/styled-style) can be transferred step by step.
You can use readable components immediately.

## Install

```
$ yarn add styled-style
```

## Usage

styles.module.css

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
}

.primary {
  background: palevioletred;
  color: white;
}
```

```js
import { styledStyle } from 'styled-style'
import styles from './styles.module.css'

const { div, button } = styledStyle(styles)

const Center = div('center')
const Button = button('btn')
const PrimaryButton = button(['btn', 'primary'])

render(
  <Center>
    <Button>Normal Button</Button>
    <PrimaryButton>Primary Button</PrimaryButton>
  </Center>
)
```

## API

### `styledStyle(styles: {[key: string]: string})`

## Examples

[akameco/styled-style-example](https://github.com/akameco/styled-style-example)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/styled-style/commits?author=akameco "Code") [📖](https://github.com/akameco/styled-style/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/styled-style/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
