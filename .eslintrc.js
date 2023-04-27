module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: ['react', 'simple-import-sort', 'prettier'],
  rules: {
    'no-underscore-dangle': 0,
    'no-useless-escape': 0,
    'no-restricted-globals': 'warn',
    'no-unused-vars': 'warn',
    'object-curly-newline': ['error', { consistent: true }],
    'comma-dangle': 'off',
    'no-param-reassign': ['error', { props: false }],
    '@typescript-eslint/comma-dangle': 0,
    indent: 'off',
    '@typescript-eslint/indent': 0,
    'no-var': 'error',
    'arrow-spacing': ['warn', { before: true, after: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    curly: ['error', 'multi-line', 'consistent'],
    'dot-location': ['error', 'property'],
    'handle-callback-err': 'off',
    'keyword-spacing': 'error',
    'max-nested-callbacks': ['error', { max: 4 }],
    'max-statements-per-line': ['error', { max: 2 }],
    'no-console': 'off',
    'no-empty-function': 'error',
    'no-floating-decimal': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'no-shadow': ['error', { allow: ['err', 'resolve', 'reject'] }],
    'no-trailing-spaces': ['error'],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    yoda: 'error',
    'prettier/prettier': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
