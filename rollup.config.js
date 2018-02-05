import babel from 'rollup-plugin-babel'
import flow from 'rollup-plugin-flow'
import nodeResolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'

const plugins = [
  flow({ pretty: true }),
  nodeResolve(),
  babel({ exclude: 'node_modules/**' }),
]

export default {
  plugins,
  input: 'src/index.js',
  external: ['react', 'warning'],
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
