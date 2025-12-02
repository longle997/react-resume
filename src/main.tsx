/**
 * MAIN APPLICATION ENTRY POINT
 * 
 * This file serves as the main entry point for the React Portfolio application.
 * It configures the routing system, initializes the application context,
 * sets up internationalization, and renders the root component to the DOM.
 * 
 * Key Features:
 * - React Router v6 configuration for client-side routing
 * - Application context provider for global state management
 * - Internationalization (i18n) setup for multi-language support
 * - Global SCSS styling imports
 * - Strict mode enabled for development debugging
 * 
 * Technology Stack:
 * - React 18+ with TypeScript
 * - React Router DOM for navigation
 * - SCSS for styling
 * - i18next for internationalization
 * 
 * @author Hỏi Dân IT vs Eric
 * @version 1.0.0
 */

// Import React's StrictMode for development debugging and error detection
import { StrictMode } from 'react'
// Import createRoot for React 18+ concurrent rendering
import { createRoot } from 'react-dom/client'
// Import global SCSS styles that apply to the entire application
import './styles/global.scss';
// Import the main layout component that wraps all pages
import Layout from './layout';
// Import React Router components for client-side routing
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Import individual page components
import HomePage from './pages/home';
import ProjectPage from './pages/project';
import AboutPage from './pages/about';
// Import the application context provider for global state management
import { AppContextProvider } from './components/context/app.context';
// Import and initialize i18n configuration for internationalization
import './i18n';

// Configure the application routing structure using React Router v6
const router = createBrowserRouter([
  {
    // Root path configuration
    path: "/",
    // Use Layout component as the parent element for all routes
    element: <Layout />,
    // Define child routes that will be rendered within the Layout's Outlet
    children: [
      {
        // Index route - renders HomePage at the root path "/"
        index: true,
        element: <HomePage />
      },
      {
        // Project showcase page route
        path: "/project",
        element: <ProjectPage />,
      },
      {
        // About/resume page route
        path: "/about",
        element: <AboutPage />,
      },
    ]
  }

]);

// Render the application to the DOM
createRoot(document.getElementById('root')!).render(
  // StrictMode wrapper for development debugging and warnings
  <StrictMode>
    {/* Application context provider for global state management */}
    <AppContextProvider>
      {/* Router provider that enables navigation throughout the app */}
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>,
)
