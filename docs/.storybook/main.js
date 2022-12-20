import macrosPlugin from "vite-plugin-babel-macros";

// use `mergeConfig` to recursively merge Vite options
const { mergeConfig } = require('vite');
const path = require('path');

const shouldUseAlias = process.env.ALIAS !== "false";

const alias = {};

if (shouldUseAlias) {
  alias['@ui-monorepo/components'] = path.resolve(__dirname, '../../packages/components/src/index.ts');
  alias['@ui-monorepo/components-styles/fonts'] = path.resolve(__dirname, '../../packages/components/src/style/fontFaces.css');
}

module.exports = {
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias,
      },
      plugins: [
        macrosPlugin(),
      ],
    });
  },
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "docs": {
    "docsPage": true
  }
};
