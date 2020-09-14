module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {},
    },
  },
  env: {
    browser: true,
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'eslint:recommended', 'airbnb', 'airbnb/hooks'],
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    semi: 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'react/jsx-one-expression-per-line': 'off',
    'no-magic-numbers': ['error', { ignore: [0, 1, -1, 2] }],
    'arrow-body-style': ['error', 'as-needed'],

    'import/prefer-default-export': ['off'],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'object-curly-newline': 'off',

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
