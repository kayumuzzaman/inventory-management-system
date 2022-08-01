module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: [
          'tsconfig.app.json',
          'tsconfig.spec.json',
          '**/tsconfig.json'
        ],
        createDefaultProgram: true
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates'
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          { type: 'attribute', prefix: 'app', style: 'camelCase' }
        ],
        '@angular-eslint/component-selector': [
          'error',
          { type: 'element', prefix: 'app', style: 'kebab-case' }
        ]
      }
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {}
    }
  ]
}
