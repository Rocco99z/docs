import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    input: 'packages', // 默认编译目录
    output: 'dist/es',
    platform: 'browser', // 默认构建为 Browser 环境的产物
    transformer: 'babel', // 默认使用 babel 以提供更好的兼容性
  },
  umd: {
    name: '@simba/components',
    extractCSS: true,
    entry: 'packages/index',
    output: 'dist/umd',
  },
  cjs: {
    input: 'packages', // 默认编译目录
    output: 'dist/cjs',
    platform: 'node', // 默认构建为 Browser 环境的产物
    transformer: 'esbuild', // 默认使用 babel 以提供更好的兼容性
  },
});
