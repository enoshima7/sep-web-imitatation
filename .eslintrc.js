module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'eslint:recommended',
    '@vue/prettier'
    // '@vue/prettier/@typescript-eslint'
    // "plugin:vue/vue3-recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/no-inferrable-types": "off",
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' }
    ]
  }
}
