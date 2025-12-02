import { Col, Row } from "react-bootstrap";
import AnimationLottie from '../../share/animation-lottie';
import experienceJSON from '../../../assets/lottie/code.json'
import { EXPERIENCES } from '../../../helpers/data'
import GlowCard from "../../share/glow-card";
import { BsPersonWorkspace } from "react-icons/bs";
import blurImg from '../../../assets/blur-23.svg'
import { useCurrentApp } from "../../context/app.context";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ExperienceModal from "./experience-modal";

const Experience = () => {
    const { theme } = useCurrentApp();
    const { t, i18n } = useTranslation();

    // State for modal visibility and selected experience
    const [showModal, setShowModal] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);

    // Handler to open modal with selected experience
    const handleExperienceClick = (experience) => {
        setSelectedExperience(experience);
        setShowModal(true);
    };

    // Handler to close modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedExperience(null);
    };

    return (
        <>
            <Row className="mb-5">
                <Col xs={12} className="my-3 my-md-5">
                    <div className="text-center">
                        <h3>{t("experience.title")}</h3>
                    </div>
                </Col>
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie animationPath={experienceJSON} />
                </Col>
                <Col md={6} xs={12}>
                    <div className="d-flex flex-column gap-5">
                        {
                            EXPERIENCES.map(experience => (
                                <GlowCard
                                    key={experience.id}
                                    identifier={`experience-${experience.id}`}
                                >
                                    <div
                                        className="p-3 relative"
                                        onClick={() => handleExperienceClick(experience)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {theme === "dark" &&
                                            <img
                                                style={{ position: "absolute", bottom: 0, opacity: 0.8 }}
                                                src={blurImg}
                                                alt="Hero"
                                                width={"100%"}
                                                height={200}
                                            />
                                        }
                                        <div className="experience-container">
                                            <div className="duration-text">
                                                <p>{experience.duration[i18n.resolvedLanguage]}</p>
                                            </div>
                                            <div className="details">
                                                <div className="icon">
                                                    <BsPersonWorkspace size={36} />
                                                </div>
                                                <div className="info">
                                                    <p className="title">{experience.title[i18n.resolvedLanguage]}</p>
                                                    <p className="company">{experience.company[i18n.resolvedLanguage]}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </GlowCard>
                            ))
                        }
                    </div>
                </Col>
            </Row>

            {/* Experience detail modal */}
            <ExperienceModal
                show={showModal}
                onHide={handleCloseModal}
                experience={selectedExperience}
            />
        </>
    )
}

export default Experience;
