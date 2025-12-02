/**
 * INTERNATIONALIZATION (i18n) CONFIGURATION
 * 
 * This file configures the internationalization system for the portfolio application.
 * It sets up i18next with React integration to support multiple languages (English and Vietnamese).
 * 
 * Features:
 * - Automatic language detection from browser settings
 * - HTTP backend for loading translation files from public/locales/
 * - React integration for seamless component translation
 * - Fallback language support
 * 
 * Translation files are stored in:
 * - public/locales/en/translation.json (English)
 * - public/locales/vi/translation.json (Vietnamese)
 * 
 * Usage in components:
 * - Import useTranslation hook from 'react-i18next'
 * - Use t('key') function to translate text
 * 
 * @see https://react.i18next.com/
 */

// Import the core i18next library for internationalization
import i18n from 'i18next';
// Import React integration for i18next
import { initReactI18next } from 'react-i18next';
// Import browser language detection plugin
import LanguageDetector from 'i18next-browser-languagedetector';
// Import HTTP backend plugin for loading translation files
import Backend from 'i18next-http-backend';

// Configure i18next with plugins and settings
i18n
    // Add HTTP backend plugin to load translations from server
    // This loads translation files from public/locales/{language}/translation.json
    // Documentation: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // Add browser language detection plugin
    // Automatically detects user's preferred language from browser settings
    // Documentation: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // Add React integration plugin
    // Provides hooks and components for React applications
    .use(initReactI18next)
    // Initialize i18next with configuration options
    // Full configuration reference: https://www.i18next.com/overview/configuration-options
    .init({
        // Disable debug mode for production (set to true for development debugging)
        debug: false,
        // Set fallback language when requested language is not available
        fallbackLng: 'en',
        // Set default language for the application
        lng: 'en', // default language
        // Configure interpolation settings
        interpolation: {
            // Disable HTML escaping as React handles XSS protection automatically
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

// Export the configured i18n instance for use throughout the application
export default i18n;