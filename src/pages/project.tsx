/**
 * PROJECT PAGE COMPONENT
 * 
 * This page showcases the portfolio owner's projects and development work.
 * It serves as a dedicated space to display completed projects, case studies,
 * and technical achievements in an organized and visually appealing manner.
 * 
 * Page Purpose:
 * - Display project portfolio with descriptions and images
 * - Showcase technical skills through real-world applications
 * - Provide links to live demos and source code
 * - Demonstrate problem-solving and development capabilities
 * 
 * Layout:
 * - Simple, clean design focused on project content
 * - Bootstrap container for responsive layout
 * - Consistent spacing and typography
 * 
 * @returns JSX.Element The project showcase page
 */

// Import Bootstrap Container component for responsive layout
import { Container } from "react-bootstrap";
// Import the main Project component that handles project display logic
import Project from "../components/sections/project";

// ProjectPage functional component
const ProjectPage = () => {
    return (
        // Main container with project-specific styling class
        <div className="project-screen">
            {/* Main content section with responsive margin and padding */}
            <section className="mt-md-5 mt-2 pt-md-5 pt-0">
                {/* Bootstrap container for responsive layout and consistent spacing */}
                <Container>
                    {/* Project component that renders the actual project showcase */}
                    <Project />
                </Container>
            </section>
        </div>
    )
}

// Export ProjectPage as default for use in routing configuration
export default ProjectPage;