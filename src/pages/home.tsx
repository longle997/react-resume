/**
 * HOME PAGE COMPONENT
 * 
 * This is the main landing page of the portfolio website. It serves as the primary
 * entry point for visitors and showcases the key sections of the portfolio in a
 * structured, visually appealing layout.
 * 
 * Page Structure:
 * 1. Hero Section - Personal introduction and profile
 * 2. Introduction Section - Brief overview and background
 * 3. Experience Section - Work history and achievements
 * 4. Skills Section - Technical competencies and tools
 * 
 * Features:
 * - Responsive design with Bootstrap grid system
 * - Background SVG decoration
 * - Internationalization support
 * - Mobile-responsive CV download button
 * - Section dividers for visual separation
 * 
 * @returns JSX.Element The complete home page layout
 */

// Import Bootstrap components for responsive grid layout
import { Col, Container, Row } from "react-bootstrap";
// Import hero section components for the main introduction area
import HeroLeft from "../components/sections/hero/hero.left";
import HeroRight from "../components/sections/hero/hero.right";
// Import download icon for CV button
import { MdFileDownload } from "react-icons/md";
// Import background SVG image for visual enhancement
import bg from '../assets/section.svg';
// Import content sections
import Introduction from "../components/sections/introduction";
import ResizeButton from "../components/sections/resize.button";
// Import translation hook for internationalization
import { useTranslation } from "react-i18next";
// Import visual divider component
import Divider from "../components/sections/divider";
// Import experience and skills sections
import Experience from "../components/sections/experience";
import Skill from "../components/sections/skill";

// Main HomePage functional component
const HomePage = () => {
    // Initialize translation function for multi-language support
    const { t } = useTranslation();

    return (
        // Main container with homepage-specific styling
        <div className="homepage-screen">
            {/* Background decoration element with SVG image */}
            <div style={{
                // Set background image from imported SVG
                backgroundImage: `url(${bg})`,
                // Full width background
                width: "100%",
                // Fixed height for decorative background
                height: 500,
                // Absolute positioning to stay behind content
                position: "absolute",
                // Align to top of page
                top: 0,
                // Prevent background image repetition
                backgroundRepeat: "no-repeat",
                // Place behind other content
                zIndex: 0
            }}>
            </div>

            {/* Hero Section - Main introduction and profile */}
            <section className="mt-md-7 mt-2" >
                <Container
                    // Relative positioning to appear above background
                    style={{ position: "relative" }}
                >
                    <Row>
                        {/* Left hero section - hidden on mobile, visible on medium+ screens */}
                        <Col className="d-none d-md-block" md={6}>
                            <HeroLeft />
                        </Col>
                        {/* Right hero section - visible on all screen sizes */}
                        <Col md={6}>
                            <HeroRight />
                        </Col>
                        {/* Mobile CV download button - only visible on small screens */}
                        <Col xs={12} className="d-md-none d-flex mt-4 justify-content-center">
                            <ResizeButton
                                // Use translated text for CV button
                                btnText={t("heroSection.cv")}
                                // Add download icon to button
                                btnIcons={<MdFileDownload />}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Introduction Section - Personal background and overview */}
            <section>
                <Container>
                    <Introduction />
                </Container>
            </section>

            {/* Visual divider between sections */}
            <Divider />

            {/* Experience Section - Work history and achievements */}
            <section>
                <Container>
                    <Experience />
                </Container>
            </section>

            {/* Visual divider between sections */}
            <Divider />

            {/* Skills Section - Technical competencies and tools */}
            <section>
                <Container>
                    <Skill />
                </Container>
            </section>

        </div>
    )
}

// Export HomePage as default for routing system
export default HomePage;
