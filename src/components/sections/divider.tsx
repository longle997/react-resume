/**
 * DIVIDER SECTION COMPONENT
 * 
 * This component renders a visual divider/separator between different sections
 * of the portfolio. It provides consistent spacing and visual separation to
 * improve readability and create clear section boundaries.
 * 
 * Features:
 * - Consistent visual separation between content sections
 * - Bootstrap container for responsive layout
 * - CSS class-based styling for customizable appearance
 * - Reusable across multiple pages and layouts
 * 
 * Usage:
 * - Place between major content sections (Experience, Skills, Projects, etc.)
 * - Provides visual breathing room and content organization
 * - Maintains consistent spacing throughout the portfolio
 * 
 * Styling:
 * - Uses CSS class 'divider' for custom styling in SCSS files
 * - Typically styled as a horizontal line, gradient, or decorative element
 * 
 * @returns JSX.Element A visual divider with responsive container
 */

// Import Bootstrap Container component for responsive layout
import { Container } from "react-bootstrap";

// Divider functional component for visual section separation
const Divider = () => {
    return (
        // Bootstrap container ensures proper responsive width and margins
        <Container>
            {/* Empty div with 'divider' class - styling handled in CSS/SCSS */}
            <div className="divider" />
        </Container>
    )
}

// Export Divider as default for use throughout the portfolio
export default Divider;