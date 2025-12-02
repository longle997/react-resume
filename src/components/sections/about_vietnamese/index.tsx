import { Col, Row } from "react-bootstrap";
import AnimationLottie from "../../share/animation-lottie";
import codingJSON from '../../../assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "../../../assets/lottie/string/development";
import { CONTACT_LOTTIE } from "../../../assets/lottie/string/contact";

import GlowCard from "../../share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "../divider";
import { APP_DATA } from "../../../helpers/data";
import SocialMedia from "../social.media";

const AboutVietNamese = () => {
    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-2">Biết <span className="brand-red">TÔI LÀ AI</span> </h3>
                    <div>
                        <div>
                            <p> Xin chào mọi người, tôi là Lê Huỳnh Long đến từ thành phố Hồ Chí Minh, Việt Nam.</p>

                            <p> Hiện tại tôi đang làm việc như một fullstack developer.</p>

                            <p> Tôi đã hoàn thành bằng Cử nhân ngành Kỹ thuật điện tử viễn thông tại Đại học Công Nghệ Sài Gòn (STU).</p>
                        </div>
                    </div>
                    <div>
                        <p>Ngoài lập trình, một số hoạt động khác mà tôi yêu thích!

                        </p>
                        <ul>
                            <li>Du lịch</li>
                            <li>Chơi game</li>
                            <li>Thể thao</li>
                        </ul>
                    </div>
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">Học vấn</h4></div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2015-2019</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">Kỹ sư điện tử viễn thông</p>
                                                <p className="company">Đại học Công Nghệ Sài Gòn (STU)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">TÌM TÔI TRÊN </h3>
                    <SocialMedia
                        linkedin={APP_DATA.LINKEDLN_URL}
                    />
                </Col >
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">Liên hệ với tôi</h4>
                    <h5>lehuynhlong997@gmail.com</h5>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default AboutVietNamese;