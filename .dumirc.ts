import { defineConfig } from 'dumi';
import path from 'path';
import style from './docs/siteIndexStyle';

export default defineConfig({
  base: '/docs',
  publicPath: '/docs/',
  apiParser: {},
  outputPath: 'docs-dist',
  favicons: [
    'https://solar-1301618848.cos.ap-nanjing.myqcloud.com/rjmall/app/img/simbaLogo.png',
  ],
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: '/packages/src' }],
    entryFile: './packages/index.tsx',
  },
  alias: {
    simba: path.join(__dirname, 'packages/index.tsx'),
  },
  themeConfig: {
    prefersColor: { switch: false },
    name: 'Simba',
    logo: 'https://solar-1301618848.cos.ap-nanjing.myqcloud.com/rjmall/app/img/simbaLogo.png',
    footer: 'Copyright © 2023. All Rights Reserved Simba',
    nav: [
      {
        title: '指南',
        link: '/guide/intro',
      },
      {
        title: '组件',
        link: '/components/form-fields',
      },
      {
        title: '前端规范',
        link: '/front/intro',
      },
    ],
  },

  styles: [style],
});
