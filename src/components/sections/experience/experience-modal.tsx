import { Modal } from "react-bootstrap";
import { BsPersonWorkspace } from "react-icons/bs";
import { useTranslation } from "react-i18next";

interface ExperienceModalProps {
    show: boolean;
    onHide: () => void;
    experience: {
        id: number;
        title: { [key: string]: string };
        company: { [key: string]: string };
        duration: { [key: string]: string };
        description?: { [key: string]: string };
        responsibilities?: { [key: string]: string[] };
        technologies?: string[];
    } | null;
}

const ExperienceModal = ({ show, onHide, experience }: ExperienceModalProps) => {
    const { i18n, t } = useTranslation();

    if (!experience) return null;

    const currentLang = i18n.resolvedLanguage || 'en';
    console.log(currentLang);

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <div className="d-flex align-items-center gap-3">
                        <BsPersonWorkspace size={32} />
                        <div>
                            <h5 className="mb-0">{experience.title[currentLang]}</h5>
                            <small className="text-muted">{experience.company[currentLang]}</small>
                        </div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <strong>{t("experienceModal.duration")}:</strong> {experience.duration[currentLang]}
                </div>

                {experience.description && (
                    <div className="mb-3">
                        <strong>{t("experienceModal.description")}:</strong>
                        <p>{experience.description[currentLang]}</p>
                    </div>
                )}

                {experience.responsibilities && currentLang && experience.responsibilities[currentLang] && (
                    <div className="mb-3">
                        <strong>{t("experienceModal.responsibilities")}:</strong>
                        <ul>
                            {experience.responsibilities[currentLang].map((resp: string, index: number) => (
                                <li key={index}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {experience.technologies && experience.technologies.length > 0 && (
                    <div>
                        <strong>{t("experienceModal.technologies")}:</strong>
                        <div className="d-flex flex-wrap gap-2 mt-2">
                            {experience.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="badge bg-secondary"
                                    style={{ fontSize: '0.9rem' }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default ExperienceModal;
