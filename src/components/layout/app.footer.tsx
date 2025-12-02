
/**
 * APPLICATION FOOTER COMPONENT
 * 
 * This component renders the footer section at the bottom of every page in the portfolio.
 * It displays copyright information, attribution, and personal branding in a clean,
 * centered layout. The footer provides consistent branding across all pages.
 * 
 * Features:
 * - Dynamic copyright year calculation
 * - Personal branding and attribution
 * - Styled heart icon for visual appeal
 * - Geographic location reference
 * - Responsive centered layout
 * 
 * Design:
 * - Simple, clean layout focusing on essential information
 * - Consistent spacing using Bootstrap margin utilities
 * - Subtle color accent on heart symbol
 * - Professional appearance suitable for portfolio context
 * 
 * @returns JSX.Element The application footer with copyright and branding
 */

// AppFooter functional component
const AppFooter = () => {
    return (
        // Footer container with centered text and vertical margins
        <div className="text-center my-3">
            {/* Copyright notice with dynamic year calculation */}
            Copyright © {new Date().getFullYear()} HoidanIT. Made with <span style={{
                // Red color for heart symbol to add visual warmth
                color: "#e25555"
            }}>♥</span> in VietNam
        </div>
    )
}

// Export AppFooter as default for use in layout component
export default AppFooter;
