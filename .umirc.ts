/*
 * @LastEditors: jinwenwu
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'ZhoupuData-UI',
  favicon: './assets/logo.jpg',
  logo: './assets/logo.jpg',
  outputPath: 'docs-dist',
  mode: 'site',
  locales:[['zh-CN', '中文']],
  base: '/react-native-zhoupu-ui/',
  publicPath: '/react-native-zhoupu-ui/',
  exportStatic: {}
});