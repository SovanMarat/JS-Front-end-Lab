module.exports = {
  env: {
    browser: true,
    es6: true,
    es2017: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Используйте хуки только на верхнем уровне, Вызывайте хуки только из React-функций
    'react-hooks/exhaustive-deps': 'warn', // массив зависимостей не должен быть пустым
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn', // все переменные должны быть использованы (было off)
    'no-use-before-define': 'off', // объявлять переменные и функции перед их использованием
    '@typescript-eslint/no-use-before-define': ['off'], //
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    camelcase: 'warn',
    'import/order': 'warn',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
        json: 'always',
        svg: 'never',
      },
    ],
    'import/prefer-default-export': 'off', // можно использовать export, а не export default
    '@typescript-eslint/prefer-interface': 'off', // литеральное объявление
    'array-bracket-spacing': 'warn', // без пробелов вначале и конце массива
    quotes: ['warn', 'single'], // используем одинарные кавычки (добавил)
    'object-curly-spacing': 'warn', // запрещает интервалы внутри фигурных скобок
    '@typescript-eslint/explicit-function-return-type': 'off', // не требует явного возврата типов для функций и методов класса
    '@typescript-eslint/explicit-module-boundary-types': 'off', // не требует явного возврата типов
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-var-requires': 'warn', // Запрещает использование операторов require, кроме операторов импорта.
    'array-callback-return': 'warn', // обязательно return из методов функций
    'react/jsx-props-no-spreading': 'off',
    'no-unused-expressions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        path: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
