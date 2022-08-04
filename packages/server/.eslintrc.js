module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    // Can remove any of these to set rules, initially set all to 0 to ignore
    'prettier/prettier': 'error',
    'no-param-reassign': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'import/newline-after-import': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'prefer-template': 0,
    'no-unsafe-optional-chaining': 0,
    'vars-on-top': 0,
    'import/order': 0,
    'no-console': 0,
    'no-restricted-globals': 0,
    'no-use-before-define': 0,
    'arrow-body-style': 0
  }
}
