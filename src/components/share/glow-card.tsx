/**
 * GLOW CARD INTERACTIVE COMPONENT
 * 
 * This component creates visually striking cards with dynamic glow effects that respond
 * to mouse movement. It provides an engaging, modern UI element perfect for showcasing
 * skills, projects, or other important content with interactive visual feedback.
 * 
 * Features:
 * - Mouse-proximity-based glow activation
 * - Dynamic gradient rotation following cursor movement
 * - Configurable glow parameters (proximity, spread, blur, etc.)
 * - Multiple card support with unique identifiers
 * - Smooth CSS custom property animations
 * - Automatic cleanup of event listeners
 * 
 * Technical Implementation:
 * - Uses CSS custom properties for dynamic styling
 * - DOM manipulation for real-time visual updates  
 * - Efficient event handling with pointer events
 * - Mathematical calculations for angle-based gradients
 * - Modular SCSS styling system
 * 
 * Usage:
 * <GlowCard identifier="unique-id">
 *   <YourContent />
 * </GlowCard>
 * 
 * @param children React children to be rendered inside the card
 * @param identifier Unique string to distinguish multiple glow cards
 * @returns JSX.Element Interactive glow card with dynamic effects
 */

// Import React hook for side effects and lifecycle management
import { useEffect } from 'react';
// Import SCSS styles for glow card effects and animations
import './glow-card.scss';
// Import React types for TypeScript support
import { ReactNode } from 'react';

// Define TypeScript interface for component props
interface GlowCardProps {
  children: ReactNode; // React children elements to render inside the card
  identifier: string; // Unique identifier for multiple glow cards
}

// GlowCard component with interactive mouse-based glow effects
const GlowCard = ({ children, identifier }: GlowCardProps) => {
  // Effect hook to set up interactive glow functionality
  useEffect(() => {
    // Get DOM references using the unique identifier
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`) as HTMLElement;
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`) as NodeListOf<HTMLElement>;

    // Configuration object for glow effect parameters
    const CONFIG = {
      proximity: 40, // Distance in pixels to activate glow effect
      spread: 80, // Size of the glow spread effect
      blur: 12, // Blur intensity of the glow
      gap: 32, // Gap between cards in multi-card layouts
      vertical: false, // Layout direction (false = horizontal, true = vertical)
      opacity: 0, // Opacity when glow is not active
    };

    // Function to update glow effects based on mouse position
    const UPDATE = (event: PointerEvent) => {
      // Iterate through all cards with the same identifier
      for (const CARD of CARDS) {
        // Get current card's position and dimensions
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        // Check if mouse is within proximity range of the card
        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          // Activate glow effect when mouse is near
          CARD.style.setProperty('--active', '1');
        } else {
          // Deactivate glow effect when mouse is far
          CARD.style.setProperty('--active', CONFIG.opacity.toString());
        }

        // Calculate the center point of the current card
        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        // Calculate angle from card center to mouse position
        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        // Normalize angle to 0-360 degrees
        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        // Apply angle to CSS custom property for gradient rotation
        // Add 90 degrees to align gradient direction properly
        CARD.style.setProperty('--start', (ANGLE + 90).toString());
      }
    };

    // Add global pointer move event listener for mouse tracking
    document.body.addEventListener('pointermove', UPDATE);

    // Function to apply configuration styles to container
    const RESTYLE = () => {
      // Apply gap between cards
      CONTAINER?.style.setProperty('--gap', CONFIG.gap.toString());
      // Apply blur intensity for glow effect
      CONTAINER?.style.setProperty('--blur', CONFIG.blur.toString());
      // Apply glow spread distance
      CONTAINER?.style.setProperty('--spread', CONFIG.spread.toString());
      // Set layout direction (row or column)
      CONTAINER?.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      );
    };

    // Initialize styles and update effects
    RESTYLE(); // Apply initial configuration styles
    UPDATE({} as PointerEvent); // Initialize with empty event for default state

    // Cleanup function to remove event listener on component unmount
    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, [identifier]); // Re-run effect when identifier changes

  return (
    // Container div with dynamic classes based on identifier
    <div className={`glow-container-${identifier} glow-container`}>
      {/* Article element representing the actual glow card */}
      <article className={`glow-card glow-card-${identifier}`}>
        {/* Empty div for CSS glow effects */}
        <div className="glows"></div>
        {/* Render children content inside the card */}
        {children}
      </article>
    </div>
  );
};

// Export GlowCard as default for use throughout the portfolio
export default GlowCard;