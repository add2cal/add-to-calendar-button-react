import prettierRecommended from 'eslint-plugin-prettier/recommended';
import regexpEslint from 'eslint-plugin-regexp';
import pluginSecurity from 'eslint-plugin-security';

export default [
  // general ignores
  {
    ignores: ['**/*.d.ts', '**/*.min.*', 'dist/*', 'node_modules/', '.github/'],
  },
  // general rules
  regexpEslint.configs['flat/recommended'],
  prettierRecommended,
  pluginSecurity.configs.recommended,
  // overrides
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      'prettier/prettier': 'error',
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
      'no-undef': 'off',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
    },
  },
];
