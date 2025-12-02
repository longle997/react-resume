/**
 * LOTTIE ANIMATION COMPONENT
 * 
 * This reusable component wraps the lottie-react library to provide consistent
 * Lottie animation rendering across the portfolio. It handles animation lifecycle,
 * configuration, and cleanup automatically.
 * 
 * Features:
 * - Automatic loop and autoplay configuration
 * - Customizable width with responsive default
 * - Proper cleanup to prevent memory leaks
 * - Memoized options for performance optimization
 * - TypeScript support for animation data
 * 
 * Use Cases:
 * - Skill icons and technology logos
 * - Interactive UI elements
 * - Loading animations
 * - Decorative background elements
 * - Hero section animations
 * 
 * Props:
 * - animationPath: Lottie animation JSON data
 * - width: CSS width value (default: "95%")
 * 
 * @param animationPath Lottie animation JSON data object
 * @param width CSS width value for the animation container
 * @returns JSX.Element Rendered Lottie animation
 */

// Import Lottie React component for rendering After Effects animations
import Lottie, { LottieRefCurrentProps } from "lottie-react";
// Import React hooks for lifecycle and performance optimization
import { useEffect, useMemo, useRef } from "react";

// Define TypeScript interface for component props
interface AnimationLottieProps {
  animationPath: any; // Lottie animation JSON data (accepts various formats)
  width?: string; // Optional CSS width value
}

// AnimationLottie component with configurable animation and width
const AnimationLottie = ({ animationPath, width = "95%" }: AnimationLottieProps) => {

  // Reference to the Lottie instance for cleanup and control
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  // Memoized animation configuration to prevent unnecessary re-renders
  const defaultOptions = useMemo(
    () => {
      return {
        // Enable continuous looping of the animation
        loop: true,
        // Start animation automatically when component mounts
        autoplay: true,
        // The imported Lottie animation JSON data
        animationData: animationPath,
        // Styling configuration for the animation container
        style: {
          width // Apply the provided width or default to 95%
        },
        // Reference to the Lottie instance for manual control
        lottieRef: lottieRef
      }
    },
    // Recalculate options only when dependencies change
    [animationPath, width]
  );

  // Cleanup effect to prevent memory leaks
  useEffect(() => {
    // Return cleanup function to destroy Lottie instance
    return () => {
      // Check if ref exists before calling destroy method
      if (lottieRef.current) {
        lottieRef.current.destroy();
      }
    };
  }, []) // Empty dependency array - runs only on unmount

  return (
    // Render Lottie component with spread defaultOptions
    <Lottie
      {...defaultOptions} />
  );
};

// Export component as default for use throughout the portfolio
export default AnimationLottie;