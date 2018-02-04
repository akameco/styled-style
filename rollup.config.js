import babel from 'rollup-plugin-babel'
import flow from 'rollup-plugin-flow'
import pkg from './package.json'

const plugins = [flow({ pretty: true }), babel({ exclude: 'node_modules/**' })]

export default {
  plugins,
  external: ['react'],
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      globals: { react: 'React' },
    },
    {
      file: pkg.main,
      format: 'cjs',
      globals: { react: 'React' },
    },
  ],
}
