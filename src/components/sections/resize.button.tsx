
/**
 * RESIZE BUTTON COMPONENT
 * 
 * This component renders a customizable button with text and icon support.
 * It's designed to be a reusable UI element that can adapt to different
 * contexts while maintaining consistent styling and behavior.
 * 
 * Features:
 * - Customizable button text with automatic uppercase transformation
 * - Icon support for visual enhancement
 * - Flexible styling through style props
 * - Consistent button appearance across the portfolio
 * - Accessibility considerations with semantic button element
 * 
 * Common Use Cases:
 * - CV/Resume download buttons
 * - Call-to-action buttons
 * - Navigation action buttons
 * - Form submission buttons
 * 
 * Props:
 * - btnText: Button text content (automatically uppercased)
 * - btnIcons: React icon elements to display alongside text
 * - btnStyle: CSS style object for custom button appearance
 * 
 * @param props Component properties object
 * @returns JSX.Element Customizable button with text and icons
 */

// Import React types for TypeScript support
import { ReactNode, CSSProperties } from 'react';

// Define TypeScript interface for component props
interface ResizeButtonProps {
    btnText: string; // Text content for the button
    btnIcons?: ReactNode; // Optional icon elements to display
    btnStyle?: CSSProperties; // Optional CSS styles for customization
    onClick?: () => void; // Optional click event handler
}

// ResizeButton functional component for customizable buttons
const ResizeButton = (props: ResizeButtonProps) => {
    // Destructure props for easier access and better readability
    const { btnText, btnIcons, btnStyle, onClick } = props;

    return (
        // Button element with resize-button CSS class and optional custom styles
        <button className="resize-button" style={btnStyle} onClick={onClick}>
            {/* Button text with automatic uppercase transformation for consistency */}
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            {/* Render icons if provided - wrapped in fragment for clean JSX */}
            <>{btnIcons}</>
        </button>
    )
}

// Export ResizeButton as default for use throughout the portfolio
export default ResizeButton;