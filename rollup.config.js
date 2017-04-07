import rollupBabel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

const minify = process.env.MINIFY

export default {
  entry: 'index.js',
  targets: minify ?
    [{dest: 'dist/glamorous-jsxstyle.umd.min.js', format: 'umd'}] :
  [
        {dest: 'dist/glamorous-jsxstyle.umd.js', format: 'umd'},
        {dest: 'dist/glamorous-jsxstyle.es.js', format: 'es'},
        {dest: 'dist/glamorous-jsxstyle.cjs.js', format: 'cjs'}
  ],
  exports: 'default',
  moduleName: 'glamorous-jsxstyle',
  format: 'umd',
  external: ['react', 'glamor', 'glamorous'],
  globals: {
    react: 'React',
    glamor: 'Glamor',
    glamorous: 'glamorous'
  },
  plugins: [
    nodeResolve({jsnext: true, main: true}),
    commonjs({include: 'node_modules/**'}),
    rollupBabel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [['env', {modules: false}], 'stage-2', 'react']
    }),
    minify ? uglify() : null
  ].filter(Boolean)
}
