module.exports = {
  extends: ['plugin:react/recommended', 'airbnb'],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'object-curly-newline': [0],
    'no-unused-vars': [0],
    'eol-last': 0,
  },
}
