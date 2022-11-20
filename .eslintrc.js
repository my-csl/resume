module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
    // 'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.eslint.json'
  },
  plugins: ['vue'],
  ignorePatterns: ['node_modules/**', 'dist/**', 'release/**', 'public/**', 'docs/**'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  globals: {
    uni: 'readonly',
    wx: 'readonly'
  }
}
