import { Col, Row } from "react-bootstrap"
import ProjectCard from "./project.card";
import { PROJECTS_ENGLISH, PROJECTS_VIETNAMESE } from "../../../helpers/data";
import { useTranslation } from 'react-i18next';

const Project = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Row>
                {i18n.resolvedLanguage === "en" ?
                    <Col xs={12}>
                        <h3 className="text-center">{t('project.title')}</h3>
                        <h6 className="text-center mb-md-5 mb-2">{t('project.description')}</h6>
                    </Col>
                    :
                    <Col xs={12}>
                        <h3 className="text-center">{t('project.title')}</h3>
                        <h6 className="text-center mb-md-5 mb-2">{t('project.description')}</h6>
                    </Col>
                }
            </Row>
            <Row
                style={{ justifyContent: "center", paddingBottom: "10px" }}
            >
                {i18n.resolvedLanguage === "en" ?
                    PROJECTS_ENGLISH?.map(item => {
                        return (
                            <Col md={4} className="project-card" key={item.id}>
                                <ProjectCard
                                    imgPath={item.imgPath}
                                    title={item.title}
                                    description={item.description}
                                    githubLink={item.githubLink}
                                    demoLink={item.demoLink}
                                />
                            </Col>
                        )
                    })
                    : PROJECTS_VIETNAMESE?.map(item => {
                        return (
                            <Col md={4} className="project-card" key={item.id}>
                                <ProjectCard
                                    imgPath={item.imgPath}
                                    title={item.title}
                                    description={item.description}
                                    githubLink={item.githubLink}
                                    demoLink={item.demoLink}
                                />
                            </Col>
                        )
                    })
                }

            </Row>
            <div className="mb-7"></div>
        </>
    )
}

export default Project;