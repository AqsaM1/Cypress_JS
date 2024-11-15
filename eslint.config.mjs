import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        "Cypress": "readonly", // Manually add Cypress globals if needed
        "cy": "readonly",      // Ensure globals like 'cy' are defined
        "it": "readonly",      // Define 'it' as a global for your test environment
        "describe": "readonly", // Define 'describe' as a global
        "expect": "readonly",   // Define 'expect' as a global
        "beforeEach": "readonly"  // Define 'beforeEach' as a global
      }
    },
    rules: {
      "constructor-super": "off",  // Disable the constructor-super rule
      "no-undef": ["error", { "typeof": true }], // Ensure 'no-undef' does not trigger errors for Cypress function
      "indent": ["error", 2]
    },
  },
  pluginJs.configs.recommended,
];
