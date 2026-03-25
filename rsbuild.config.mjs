import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    template: './public/index.html',
    favicon: './src/assets/favicon.png',
  },
  plugins: [pluginReact()],
  output: {
    assetPrefix: 'https://zxuhan.github.io/projects/',
  },
});
