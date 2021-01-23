// import resolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'
// import typescript from 'rollup-plugin-typescript'
// import pkg from './package.json'

// export default {
//   input: 'src/index.ts', // 打包入口
//   output: { // 打包出口
//     file: pkg.browser, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
//     format: 'umd' // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
//   },
//   plugins: [ // 打包插件
//     resolve(), // 查找和打包node_modules中的第三方模块
//     commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
//     typescript() // 解析TypeScript
//   ]
// }

import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import clear from 'rollup-plugin-clear'
import cleanup from 'rollup-plugin-cleanup'
import { green } from 'chalk'
import pkg from './package.json'

const common = {
  input: 'src/index.ts',
  plugins: [
    resolve(),
    commonjs({
      exclude: 'node_modules'
    }),
    json(),
    cleanup({
      comments: 'none'
    })
  ],
  typescript: {
    tsconfig: 'build.tsconfig.json'
  }
}

const esmPackage = {
  input: common.input,
  output: {
    file: 'dist/index.esm.js',
    format: 'esm',
    name: pkg.alia,
    sourcemap: true
  },
  plugins: [
    ...common.plugins,
    clear({
      targets: ['dist']
    }),
    typescript({
      ...common.typescript,
      useTsconfigDeclarationDir: true,
      clean: true
    })
  ]
}

const cjsPackage = {
  input: common.input,
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    name: pkg.alia,
    sourcemap: true
  },
  plugins: [
    ...common.plugins,
    typescript({
      ...common.typescript,
      tsconfigOverride: { compilerOptions: { declaration: false } }
    })
  ]
}

const localDebug = {
  input: common.input,
  output: {
    file: '/Users/irving/Desktop/tryCatch/github/mito-vue-demo/src/bundle.js',
    format: 'esm',
    name: pkg.alia
  },
  plugins: [
    ...common.plugins,
    typescript({
      ...common.typescript,
      tsconfigOverride: { compilerOptions: { declaration: false } }
    })
  ]
}

const iifePackage = {
  input: common.input,
  output: {
    file: 'dist/index.min.js',
    format: 'iife',
    name: pkg.alia
  },
  plugins: [
    ...common.plugins,
    typescript({
      ...common.typescript,
      tsconfigOverride: { compilerOptions: { declaration: false } }
    }),
    terser()
  ]
}

const total = {
  esmPackage,
  iifePackage,
  localDebug,
  cjsPackage
}
let result = total
const ignore = process.env.IGNORE
const include = process.env.INCLUDE
console.log(green(`ignore: ${ignore}, include: ${include}`))
if (ignore) {
  delete total[ignore]
  result = total
}
if (include) {
  result = [total[include]]
}
export default [...Object.values(result)]