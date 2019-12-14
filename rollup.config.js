import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      exports: 'named',
      name: 'mc-wysiwyg',
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      exports: 'named',
      name: 'McWysiwyg',
      file: 'dist/mc-wysiwyg.js',
      format: 'umd'
    }
  ],
  plugins: [ 
    terser(),
    vue(),
    resolve(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**' 
    }),
    postcss({
      plugins: []
    })
  ]
};