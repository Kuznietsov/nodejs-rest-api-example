module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  /**
   * Jest specific rules
   */
  overrides: [
    {
      files: ['**/*.test.{js,mjs,ts,tsx}'],
      rules: {
        'jest/valid-describe': 'error',
      },
    },
  ],

  rules: {
    '@typescript-eslint/no-explicit-any': 2,
  },
};
