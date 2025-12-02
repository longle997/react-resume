import Typewriter from "typewriter-effect";
import SocialMedia from "../social.media";
import { useTranslation } from "react-i18next";
import './hero.scss';
import ResizeButton from "../resize.button";
import { APP_DATA } from '../../../helpers/data';
import { MdFileDownload } from "react-icons/md";
import resumePDF from '../../../assets/resume/long_resume.pdf';

/**
 * HeroLeft Component
 * 
 * Renders the left section of the hero area on the portfolio homepage.
 * Displays a greeting, name, animated typewriter effect showing roles,
 * social media links, and action buttons (Experience and Download CV).
 * 
 * @returns {JSX.Element} The left hero section with greeting, typewriter animation, and CTAs
 */
const HeroLeft = () => {

    // Initialize translation hook for internationalization support
    const { t } = useTranslation();

    /**
     * Handles the CV/Resume download functionality
     * Creates a temporary anchor element, triggers download, and cleans up
     */
    const handleDownloadCV = () => {
        // Create a temporary anchor element for download
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'long_resume.pdf';

        // Append to DOM, trigger click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='hero-left'>
            {/* Greeting section with animated wave emoji */}
            <h3>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
            </h3>

            {/* Name display with brand styling */}
            <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
                I'M &nbsp;
                <strong className="brand-red">{t("appHeader.brand")}</strong>
            </h3>

            {/* Animated typewriter effect displaying professional roles */}
            <Typewriter
                options={{
                    strings: [
                        "Software Developer",
                        "Freelancer"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    wrapperClassName: "brand-green"
                }}
            />

            {/* Social media links section */}
            <div
                className="mt-md-6 mt-3 mb-md-5 mb-2"
            >
                <SocialMedia
                    linkedin={APP_DATA.LINKEDLN_URL}
                />
            </div>

            {/* Action buttons - only visible on medium+ screens */}
            <div className="d-md-flex d-none gap-4">
                {/* Download CV button with download icon */}
                <ResizeButton
                    btnText={t("heroSection.cv")}
                    btnIcons={<MdFileDownload />}
                    onClick={handleDownloadCV}
                />
            </div>

        </div>
    )
}

export default HeroLeft;