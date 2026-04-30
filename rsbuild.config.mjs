import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    template: './public/index.html',
    favicon: './src/assets/favicon.ico',
  },
  plugins: [pluginReact()],
  output: {
    assetPrefix: '/projects/',
  },
});
