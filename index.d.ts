import * as React from 'react'

declare function styledStyle<S extends styledStyle.Styles, C extends keyof S>(
  styles: S
): Record<
  styledStyle.Elements,
  <P = {}>(
    selector: styledStyle.Selector<C, P>
  ) => React.ComponentClass<{ children?: React.ReactNode } & P>
>

export { styledStyle }

declare namespace styledStyle {
  export type Elements = keyof JSX.IntrinsicElements

  export interface Styles {
    [key: string]: string
  }

  export type _Selector<C, P> =
    | C
    | ((props: P) => C | string | null | undefined)
  export type Selector<C, P> = C | _Selector<C, P>[]
}
