module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: '2021'
  },
  extends: [
    '@pangolinjs/eslint-config'
  ],
  plugins: [
    'svelte3'
  ],
  settings: {
    'svelte3/ignore-styles': ({ lang }) => !!lang
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 'off',
        'no-multiple-empty-lines': ['error', {
          max: 1,
          maxBOF: 2,
          maxEOF: 1
        }]
      }
    }
  ]
}
