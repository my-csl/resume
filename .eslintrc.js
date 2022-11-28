module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 'plugin:vue/vue3-essential',  // 只检查最重要的语法
    'plugin:vue/vue3-recommended', // vue推荐规则
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue']
  },
  plugins: ['vue'],
  ignorePatterns: ['node_modules/**', 'dist/**', 'release/**', 'public/**', 'docs/**'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'vue/html-self-closing': 'off',
    'prettier/prettier': ['error'],
    'vue/multi-word-component-names': 'off'
  },
  globals: {
    uni: 'readonly',
    wx: 'readonly'
  }
}
