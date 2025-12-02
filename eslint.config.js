/**
 * ESLINT CONFIGURATION FILE
 * 
 * This file configures ESLint for the React portfolio project, providing code quality
 * and consistency enforcement throughout the development process. It uses the new
 * flat config format (ESLint 9+) for better performance and easier configuration.
 * 
 * Configuration Features:
 * - JavaScript and JSX file linting
 * - React-specific rules and best practices
 * - React Hooks rules for proper hook usage
 * - React Refresh integration for development
 * - Browser environment globals
 * - Modern ECMAScript features support
 * 
 * Plugins Used:
 * - @eslint/js: Core JavaScript rules
 * - eslint-plugin-react: React-specific linting rules
 * - eslint-plugin-react-hooks: Rules for React Hooks
 * - eslint-plugin-react-refresh: Fast Refresh compatibility
 * 
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
 */

// Import core ESLint JavaScript rules
import js from '@eslint/js'
// Import browser environment globals (window, document, etc.)
import globals from 'globals'
// Import React-specific linting rules and configurations
import react from 'eslint-plugin-react'
// Import React Hooks rules for proper hook usage patterns
import reactHooks from 'eslint-plugin-react-hooks'
// Import React Refresh plugin for Fast Refresh compatibility
import reactRefresh from 'eslint-plugin-react-refresh'

// Export ESLint flat configuration array
export default [
  // Configuration to ignore build output directory
  {
    ignores: ['dist'] // Exclude dist folder from linting (build artifacts)
  },
  {
    // File patterns to apply this configuration to
    files: ['**/*.{js,jsx}'], // Apply to all JavaScript and JSX files

    // Language parsing and environment configuration
    languageOptions: {
      // Set ECMAScript version for parsing modern JavaScript features
      ecmaVersion: 2020,
      // Include browser environment globals (window, document, localStorage, etc.)
      globals: globals.browser,
      // Parser options for JavaScript and JSX syntax
      parserOptions: {
        // Use latest ECMAScript version features
        ecmaVersion: 'latest',
        // Enable JSX syntax parsing
        ecmaFeatures: { jsx: true },
        // Use ES modules (import/export statements)
        sourceType: 'module',
      },
    },

    // Framework-specific settings
    settings: {
      // Configure React plugin with the specific version being used
      react: { version: '18.3' } // Match React version in package.json
    },

    // ESLint plugins that provide additional rules and functionality
    plugins: {
      // React plugin for React-specific rules
      react,
      // React Hooks plugin for proper hook usage enforcement
      'react-hooks': reactHooks,
      // React Refresh plugin for Fast Refresh compatibility in development
      'react-refresh': reactRefresh,
    },

    // Linting rules configuration - combines multiple rule sets
    rules: {
      // Include all recommended JavaScript rules from ESLint core
      ...js.configs.recommended.rules,
      // Include React recommended rules for JSX and React patterns
      ...react.configs.recommended.rules,
      // Include JSX runtime rules (for new JSX transform)
      ...react.configs['jsx-runtime'].rules,
      // Include React Hooks rules for proper hook dependencies and usage
      ...reactHooks.configs.recommended.rules,

      // Custom rule overrides for project-specific needs
      // Disable warning for external links without rel="noopener noreferrer"
      'react/jsx-no-target-blank': 'off',
      // Warn when components are not properly exported for React Refresh
      'react-refresh/only-export-components': [
        'warn', // Show warning instead of error
        {
          // Allow constant exports (non-component exports) alongside components
          allowConstantExport: true
        },
      ],
    },
  },
]
