module.exports = {
  root: true,
  extends: '@react-native-community',
  globals: {
    Intl: 'readonly',
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
