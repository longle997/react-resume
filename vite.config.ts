/**
 * VITE CONFIGURATION FILE
 * 
 * This file configures Vite, the build tool and development server for the React portfolio.
 * Vite provides fast development builds with Hot Module Replacement (HMR) and optimized
 * production bundles with tree-shaking and code splitting.
 * 
 * Configuration Features:
 * - React plugin with SWC for fast compilation and refresh
 * - TypeScript support out of the box
 * - ES modules and modern JavaScript features
 * - Fast development server with instant updates
 * - Optimized production builds
 * 
 * SWC Plugin Benefits:
 * - Faster compilation compared to Babel
 * - Built-in TypeScript support
 * - Better development experience with Fast Refresh
 * - Smaller bundle sizes in production
 * 
 * @see https://vitejs.dev/config/ for full configuration options
 * @see https://github.com/vitejs/vite-plugin-react-swc for React SWC plugin details
 */

// Import Vite's configuration function for type safety
import { defineConfig } from 'vite'
// Import React plugin with SWC compiler for fast development and builds
import react from '@vitejs/plugin-react-swc'

// Vite configuration with React support
// Documentation: https://vitejs.dev/config/
export default defineConfig({
  // Plugins array - configure Vite with React support using SWC
  plugins: [
    // React plugin with SWC for fast compilation, Hot Module Replacement,
    // and optimized builds with better performance than traditional Babel setup
    react()
  ],

  /* Additional configuration options that could be added:
   * 
   * // Define environment variables
   * define: {
   *   __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
   * },
   * 
   * // Configure development server
   * server: {
   *   port: 3000,
   *   open: true, // Auto-open browser
   * },
   * 
   * // Configure build options
   * build: {
   *   outDir: 'dist',
   *   sourcemap: true,
   * },
   * 
   * // Configure path aliases
   * resolve: {
   *   alias: {
   *     '@': path.resolve(__dirname, 'src'),
   *   },
   * },
   */
})
