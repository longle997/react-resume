/**
 * MAIN LAYOUT COMPONENT
 * 
 * This component serves as the primary layout wrapper for all pages in the portfolio.
 * It provides a consistent structure with header navigation, dynamic content area,
 * and footer across all routes in the application.
 * 
 * Structure:
 * - AppHeader: Contains navigation menu and branding
 * - Outlet: React Router's placeholder for page-specific content
 * - AppFooter: Contains contact information and social links
 * 
 * This layout is used by React Router as the parent component for all routes,
 * ensuring consistent navigation and footer across all pages.
 * 
 * @returns JSX.Element The complete layout structure
 */

// Import Outlet component from React Router to render child route components
import { Outlet } from "react-router-dom"
// Import header component containing navigation and branding
import AppHeader from "./components/layout/app.header"
// Import footer component containing contact and social media links
import AppFooter from "./components/layout/app.footer"

// Main layout function component
function Layout() {

  return (
    // Root container div for the entire layout
    <div>
      {/* Header section - contains navigation menu and logo */}
      <AppHeader />
      {/* Dynamic content area - renders the current page component based on route */}
      <Outlet />
      {/* Footer section - contains contact info and social media links */}
      <AppFooter />
    </div>
  )
}

// Export Layout as the default export for use in routing configuration
export default Layout