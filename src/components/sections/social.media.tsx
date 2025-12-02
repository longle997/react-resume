/**
 * SOCIAL MEDIA LINKS COMPONENT
 * 
 * This component renders a horizontal row of social media platform links with
 * corresponding icons. It provides easy access to various social media profiles
 * and educational platforms, enhancing professional networking and content discovery.
 * 
 * Features:
 * - Platform-specific icons from react-icons library
 * - External link handling with proper target attributes
 * - Hover effects through CSS classes
 * - Accessible tooltips for each platform
 * - Responsive spacing and alignment
 * - Consistent icon sizing across platforms
 * 
 * Supported Platforms:
 * - YouTube (for programming tutorials and content)
 * - TikTok (for short-form educational content)
 * - Udemy (for comprehensive online courses)
 * - Facebook (for community engagement and updates)
 * 
 * Props:
 * - youtube: URL to YouTube channel
 * - tiktok: URL to TikTok profile
 * - udemy: URL to Udemy instructor profile
 * - facebook: URL to Facebook page/profile
 * 
 * @param props Component properties containing social media URLs
 * @returns JSX.Element Horizontal list of social media links with icons
 */

// Import social media icons from react-icons library
import { SiLinkedin } from "react-icons/si"; // LinkedIn icon

// Define TypeScript interface for component props
interface SocialMediaProps {
    linkedin: string; // LinkedIn profile URL
}

// SocialMedia functional component for displaying platform links
const SocialMedia = (props: SocialMediaProps) => {
    // Destructure props to extract individual social media URLs
    const { linkedin } = props;

    return (
        // Container div with vertical margins and horizontal flex layout
        <div className="my-4 d-flex items-center gap-3">
            {/* LinkedIn link with external opening and accessibility features */}
            <a href={linkedin} target='_blank' className="highlight" title="LinkedIn Le Huynh Long">
                {/* LinkedIn icon with consistent 30px size */}
                <SiLinkedin size={30} />
            </a>
        </div>
    )
}

// Export SocialMedia as default for use throughout the portfolio
export default SocialMedia;