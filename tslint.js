const path = require('path')

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-consistent-codestyle')),
      './'),
    path.join(path.dirname(require.resolve('tslint-eslint-rules')),
      'dist/rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
  ],
  // tslint-airbnb-rules
  rules: { // base on https://github.com/airbnb/javascript/tree/44dbd0bdc41d08eb5de8ad698099ae44240f4b0d
    'prefer-const': true, // 2.1, 13.1
    'no-var-keyword': true, // 2.2
    'object-literal-shorthand': true, // 3.3, 3.4
    'object-literal-key-quotes': [true, 'as-needed'], // 3.6
    'prefer-array-literal': true, // 4.1
    quotemark: [
      true,
      'single',
      'jsx-double',
    ], // 6.1
    'no-eval': true, // 6.4
    'no-function-constructor-with-string-args': true, // 7.10
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always', // 7.11
        named: 'never', // 19.3
      },
    ],
    'no-parameter-reassignment': true, // 7.12
    'ter-prefer-arrow-callback': [true], // 8.1
    'arrow-parens': false, // 8.2
    'ter-arrow-parens': [
      true,
      'as-needed',
      {'requireForBlockBody': true},
    ], // 8.4
    'no-duplicate-imports': true, // 10.4
    'one-variable-per-declaration': [true, 'ignore-for-loop'], // 13.2
    'no-increment-decrement': true, // 13.6
    'triple-equals': [true, 'allow-null-check'], // 15.1
    'brace-style': [
      true,
      '1tbs',
      {allowSingleLine: true},
    ], // 16.2
    'no-else-after-return': true, // 16.3
    'comment-format': [true, 'check-space'], // 18.3
    'ter-indent': [
      true,
      2,
      {'SwitchCase': 1},
    ], // 19.1
    eofline: true, // 19.5
    'space-in-parens': [true, 'never'], // 19.9
    'array-bracket-spacing': [true, 'never'], // 19.10
    'object-curly-spacing': [true, 'always'], // 19.11
    'trailing-comma': [
      true,
      {
        multiline: 'always',
        singleline: 'never',
      },
    ], // 20.2
    semicolon: [true, 'always'], // 21.1
    'no-construct': true, // 22.2, 22.3, 22.6
    radix: true, // 22.3
    'function-name': [
      true,
      {
        'function-regex': /^[a-z$][\w\d]+$/,
        'method-regex': /^[a-z$][\w\d]+$/,
        'private-method-regex': /^[a-z$][\w\d]+$/,
        'protected-method-regex': /^[a-z$][\w\d]+$/,
        'static-method-regex': /^[a-z$][\w\d]+$/,
      }, // 23.1
    ],
    'no-var-self': true, // 23.5

    // NBS
    align: [
      true,
      'arguments',
      'parameters',
      'statements',
    ],
    ban: false,
    'class-name': true,
    curly: [
      true,
      'ignore-same-line',
    ],
    forin: true,
    indent: [
      true,
      'spaces',
      2,
    ],
    'linebreak-style': [
      true,
      'LF',
    ],
    'import-name': false,
    'jsdoc-format': true,
    'label-position': true,
    'max-line-length': [
      true,
      120,
    ],
    'member-ordering': [
      true,
      'public-before-private',
      'static-before-instance',
      'variables-before-functions',
    ],
    'no-any': false,
    'no-arg': true,
    'no-bitwise': true,
    'no-console': [
      true,
      'debug',
      'info',
      'time',
      'timeEnd',
      'trace',
    ],
    'no-constructor-vars': false,
    'no-debugger': true,
    'no-floating-promises': true,
    'no-shadowed-variable': true,
    'no-duplicate-variable': true,
    'no-empty': true,
    'no-internal-module': true,
    'no-require-imports': true,
    'no-string-literal': true,
    'no-switch-case-fall-through': true,
    'no-trailing-whitespace': true,
    'no-unused-expression': true,
    "no-unused-variable": [true, { 'ignore-pattern': '^_' }], // 5.4.7
    'no-use-before-declare': true,
    'no-var-requires': true,
    'object-shorthand-properties-first': false,
    'one-line': [
      true,
      'check-open-brace',
      'check-catch',
      'check-else',
      'check-whitespace',
    ],
    'only-arrow-functions': [true, 'allow-named-functions'],
    'switch-default': true,
    'typedef': [
      false,
      'call-signature',
      'parameter',
      'property-declaration',
      'member-variable-declaration',
    ],
    'typedef-whitespace': [
      true, {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        'parameter': 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace',
      },
    ],
    'use-strict': [
      false,
      'check-module',
      'check-function',
    ],
    'variable-name': [
      true,
      'ban-keywords',
    ],
    'whitespace': [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-separator',
      'check-type',
    ],
    'no-boolean-literal-compare': false,
    'strict-boolean-expressions': false,
    'deprecation': true, // 5.4.4
  },
}
