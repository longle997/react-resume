
/**
 * APPLICATION HEADER COMPONENT
 * 
 * This component renders the main navigation header for the portfolio website.
 * It provides primary navigation, theme switching (light/dark mode), and
 * language selection functionality. The header is responsive and adapts to
 * different screen sizes using Bootstrap's navbar system.
 * 
 * Features:
 * - Responsive navigation with collapsible menu on mobile
 * - Theme toggle with persistent storage
 * - Language switcher with flag icons (English/Vietnamese)
 * - Active link highlighting with React Router NavLink
 * - Bootstrap integration with dynamic theme support
 * - Internationalization for all text content
 * 
 * Navigation Structure:
 * - Brand/Logo (links to home)
 * - Main navigation: Home, Project, About
 * - Utility controls: Theme toggle, Language selector
 * 
 * @returns JSX.Element The application header with navigation
 */

// Import Bootstrap navigation components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Import theme toggle icons from react-icons
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
// Import React Router components for navigation
import { Link, NavLink } from 'react-router-dom';
// Import custom context hook for theme management
import { useCurrentApp } from '../context/app.context';
// Import translation hook for internationalization
import { useTranslation } from 'react-i18next';
// Import dropdown component for language selection
import { NavDropdown } from 'react-bootstrap';
// Import flag images for language selector
import viFlag from '../../assets/svg/language/vi.svg';
import enFlag from '../../assets/svg/language/en.svg';

// Main AppHeader functional component
function AppHeader() {
    // Get current theme and theme setter from application context
    const { theme, setTheme } = useCurrentApp();
    // Get translation function and i18n instance for language management
    const { t, i18n } = useTranslation();

    // Handle theme toggle between light and dark modes
    const handleMode = (mode: string) => {
        // Persist theme preference to localStorage for future sessions
        localStorage.setItem("theme", mode);
        // Apply theme to HTML element for Bootstrap dark mode integration
        document.documentElement.setAttribute('data-bs-theme', mode);
        // Update application context state
        setTheme(mode);
    }

    // Render appropriate flag image based on selected language
    const renderFlag = (language: string) => {
        return (
            <img
                // Fixed size for consistent appearance
                style={{ height: 20, width: 20 }}
                // Choose flag image based on language code
                src={language === "en" ? enFlag : viFlag}
                alt={language}
            />
        )
    }

    return (
        // Bootstrap Navbar with dynamic theme and responsive behavior
        <Navbar
            // Apply current theme for consistent styling
            data-bs-theme={theme}
            // Enable collapsible behavior on large screens and above
            expand="lg"
            // Bootstrap background utility class
            className="bg-body-tertiary"
            // Ensure header appears above other content
            style={{ zIndex: 1 }}
        >
            {/* Bootstrap container for responsive width */}
            <Container>
                {/* Brand/Logo that links to home page */}
                <Link className="navbar-brand" to="/">
                    <span className='brand-green'>
                        {/* Translated brand text */}
                        {t("appHeader.brand")}
                    </span>
                </Link>
                {/* Mobile menu toggle button - automatically handled by Bootstrap */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* Collapsible navbar content */}
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Main navigation links - left-aligned */}
                    <Nav className="me-auto">
                        {/* Home navigation link with active state handling */}
                        <NavLink className="nav-link" to="/">{t("appHeader.home")}</NavLink>
                        {/* Project navigation link */}
                        <NavLink className="nav-link" to="/project"> {t("appHeader.project")}</NavLink>
                        {/* About navigation link */}
                        <NavLink className="nav-link" to="/about">{t("appHeader.about")}</NavLink>
                    </Nav>
                    {/* Utility navigation - right-aligned */}
                    <Nav className="ms-auto">
                        {/* Theme toggle button */}
                        <div className='nav-link' style={{ cursor: "pointer" }}>
                            {/* Conditional rendering based on current theme */}
                            {theme === "light" ?
                                // Light mode icon - clicking switches to dark mode
                                <MdOutlineLightMode
                                    onClick={() => handleMode("dark")}
                                    style={{ fontSize: 20 }}
                                />
                                :
                                // Dark mode icon - clicking switches to light mode
                                <MdNightlight
                                    onClick={() => handleMode("light")}
                                    style={{ fontSize: 20 }}
                                />
                            }
                        </div>

                        {/* Language selection dropdown */}
                        <NavDropdown
                            // Show current language flag as dropdown trigger
                            title={renderFlag(i18n.resolvedLanguage || 'en')}
                        >
                            {/* English language option */}
                            <div
                                // Switch to English when clicked
                                onClick={() => i18n.changeLanguage("en")}
                                className='dropdown-item d-flex gap-2 align-items-center'
                                style={{ cursor: "pointer" }}>
                                {/* English flag icon */}
                                <img
                                    style={{ height: 20, width: 20 }}
                                    src={enFlag} alt='english'
                                />
                                {/* Language label */}
                                <span>English</span>
                            </div>
                            {/* Vietnamese language option */}
                            <div
                                // Switch to Vietnamese when clicked
                                onClick={() => i18n.changeLanguage("vi")}
                                className='dropdown-item d-flex gap-2 align-items-center'
                                style={{ cursor: "pointer" }}>
                                {/* Vietnamese flag icon */}
                                <img
                                    style={{ height: 20, width: 20 }}
                                    src={viFlag} alt='vietnamese'
                                />
                                {/* Language label */}
                                <span>Tiếng Việt</span>
                            </div>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

// Export AppHeader as default for use in layout component
export default AppHeader;
