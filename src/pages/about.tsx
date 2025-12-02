/**
 * ABOUT PAGE COMPONENT
 * 
 * This page provides detailed information about the portfolio owner's background,
 * education, career journey, and personal interests. It serves as a comprehensive
 * "resume" or "CV" page that gives visitors deeper insight into the person behind
 * the portfolio.
 * 
 * Page Content Typically Includes:
 * - Personal background and biography
 * - Educational qualifications and certifications
 * - Detailed work experience and career progression
 * - Personal interests and hobbies
 * - Professional philosophy and goals
 * - Contact information and availability
 * 
 * Design Philosophy:
 * - Clean, readable layout focusing on content
 * - Professional presentation suitable for employers
 * - Responsive design for all device types
 * 
 * @returns JSX.Element The about/resume page
 */

// Import Bootstrap Container component for responsive layout management
import { Container } from "react-bootstrap";
// Import the main About component that contains detailed personal information
import About from "../components/sections/about";
import AboutVietNamese from "../components/sections/about_vietnamese";
import { useTranslation } from "react-i18next";

// AboutPage functional component
const AboutPage = () => {
    const { i18n } = useTranslation();
    return (
        // Main wrapper with about-specific styling class
        <div className="about-screen">
            {/* Content section with responsive spacing - larger margins on desktop, smaller on mobile */}
            <section className="mt-md-5 mt-2 pt-md-5 pt-0">
                {/* Bootstrap container ensures proper responsive layout and content width */}
                <Container>
                    {/* About component that renders the detailed personal/professional information */}
                    {i18n.resolvedLanguage === "en" ? (<About />) :
                        (<AboutVietNamese />)}
                </Container>
            </section>
        </div>
    )
}

// Export AboutPage as default for routing system integration
export default AboutPage;