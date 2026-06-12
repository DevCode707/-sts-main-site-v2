import eslint from '@eslint/js';
import TSESLintParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import importHelpers from 'eslint-plugin-import-helpers';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { dirname } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url);
const directoryName = dirname(fileName);

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  prettier,
  [
      {
      ignores: [
     ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "next-env.d.ts",
      "eslint.config.mjs",
      "postcss.config.mjs",
      "scripts/**",
      ],
    },
    {
      languageOptions: {
        parser: TSESLintParser,
        parserOptions: {
          project: './tsconfig.json',
          tsconfigRootDir: directoryName,
          sourceType: 'module',
          ecmaVersion: 2021,
          ecmaFeatures: {
            jsx: true,
          },
        },
        globals: {
          es6: true,
          jest: true,
          node: true,
          browser: true,
          commonjs: true,
          serviceworker: true,
          es2021: true,
        },
      },
      plugins: {
        react,
        import: importPlugin,
        'react-hooks': reactHooks,
        'import-helpers': importHelpers,
      },
      rules: {
        ...react.configs.recommended.rules,
        'no-extra-boolean-cast': 'off',
        'no-console': 2,
        'react/prop-types': 0,
        'react/no-unknown-property': 0,
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import-helpers/order-imports': [
          'error',
          {
            newlinesBetween: 'always',
            groups: [
              ['module'],
              '/^@(application|asset|component|form|enum|hook|interface|page|store|util)/',
              ['parent', 'sibling', 'index'],
            ],
            alphabetize: { order: 'asc', ignoreCase: true },
          },
        ],
        '@/padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: 'return',
          },
        ],
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-duplicate-enum-values': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/array-type': ['error', { default: 'array' }],
        '@typescript-eslint/strict-boolean-expressions': ['error', { allowString: false, allowNumber: false }],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'property',
            format: null,
          },
          {
            selector: 'objectLiteralProperty',
            format: null,
          },
        ],
        '@typescript-eslint/no-floating-promises': 'warn',

        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': 'off',
      },

      settings: {
        react: {
          version: 'detect',
        },
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
    },
  ],
);
