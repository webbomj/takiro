const nxPlugin = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.cjs');
const eslintPluginExample = require("../../eslint-custom-rules");

module.exports = [
  ...baseConfig,
  ...nxPlugin.configs['flat/angular'],
  ...nxPlugin.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    plugins: {"example": eslintPluginExample},
    rules: {
      "example/variables-name-length": "error",
    },
  },
];
