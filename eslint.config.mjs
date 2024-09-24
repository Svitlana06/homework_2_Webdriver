import { defineConfig } from 'eslint-define-config';

export default [
  defineConfig({
    files: ['src/tests/**/*.js'], // Задайте файли, які потрібно перевірити
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        browser: 'readonly',
        expect: 'readonly',
        require: 'readonly',
        module: 'readonly',
        console: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
      },
    },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-undef': 'error',
    },
  }),
];
