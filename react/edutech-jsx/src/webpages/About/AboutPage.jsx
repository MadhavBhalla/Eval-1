import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faDollarSign, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            {/* About Us Section */}
            <section id="center" className="box">
                <div className="container-xl">
                    <div className="boxa">
                        <div className="col-md-12">
                            <h1 className="boxb">About Us</h1>
                            <h6 className="boxc">
                                <Link className="b" to="/">Home &nbsp;|</Link>&nbsp; About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <div className="g">
                {/* Overview Section */}
                <section id="overview" className="p_3 bg_light">
                    <div className="container-xl">
                        <div className="row overview_1">
                            <div className="col-md-6">
                                <h2 className="head12">Website Overview</h2>
                                <p className="mt-3">
                                    EduTech is a leading provider of innovative student management solutions designed to streamline and enhance the educational experience. Our comprehensive platform offers a range of features that support efficient administration, personalized learning, and effective communication within educational institutions. By leveraging cutting-edge technology, EduTech empowers schools, colleges, and universities to optimize their operations and focus on delivering quality education. Our mission is to simplify student management.
                                </p>
                                <h5 className="mb-2"><i className="fa fa-long-arrow-right color_1"></i>Course knowledge</h5>
                                <h5 className="mb-2"><i className="fa fa-long-arrow-right color_1"></i>Budget Management</h5>
                                <h5 className="mb-4"><i className="fa fa-long-arrow-right color_1"></i>Consulting</h5>
                                <h6 className="mb-0">
                                <Link to="/team" className="button22">About Our Team <i className="fa fa-long-arrow-right ms-1"></i></Link>
                                </h6>
                            </div>
                            <div className="col-md-6">
                                <div className="overview-right">
                                    <div className="grid clearfix">
                                        <figure className="effects">
                                            <Link to="#"><img src="images/about/img3.jpg" alt="Overview of EduTech" /></Link>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="feature" className="area">
                    <div className="container-fluid">
                        <div className="row feature_1">
                            {/* Left Column: Text Content */}
                            <div className="col-md-6 feature_1l d-flex flex-column justify-content-center">
                                <h1>Our Best Features</h1>
                                <p className="para2 mb-0 mb-4">
                                    Explore EduTech’s top-notch features, designed to enhance your learning experience, streamline budget management, and provide expert consulting.
                                </p>
                                
                                {/* Feature 1 */}
                                <div className="feature_1li d-flex align-items-center mb-3">
                                    <div className="feature_1lil">
                                        <div className="icon-style">
                                            <FontAwesomeIcon icon={faUserGraduate} size="lg" />
                                        </div>
                                    </div>
                                    <div className="feature_1lir ms-3">
                                        <h3 className="ab">Course Knowledge</h3>
                                        <p className="para1 mb-0">
                                            EduTech lets you choose the perfect course for you with tailored recommendations, interactive content, and expert guidance. Discover and master the skills you need to succeed.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="feature_1li d-flex align-items-center mb-3">
                                    <div className="feature_1lil">
                                        <div className="icon-style">
                                            <FontAwesomeIcon icon={faDollarSign} size="lg" />
                                        </div>
                                    </div>
                                    <div className="feature_1lir ms-3">
                                        <h3 className="ab">Budget Management</h3>
                                        <p className="para1 mb-0">
                                            EduTech teaches you how to manage your expenses effectively, helping you track spending, set budgets, and make informed financial decisions for better financial health.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="feature_1li d-flex align-items-center mb-3">
                                    <div className="feature_1lil">
                                        <div className="icon-style">
                                            <FontAwesomeIcon icon={faHandshake} size="lg" />
                                        </div>
                                    </div>
                                    <div className="feature_1lir ms-3">
                                        <h3 className="ab">Consulting</h3>
                                        <p className="para1 mb-0">
                                            EduTech offers consulting videos to help you better understand budgeting and course selection, providing clear insights and expert guidance for more informed decisions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Image */}
                            <div className="col-md-6 px-0">
                                <div className="feature_1r">
                                    <div className="grid clearfix">
                                        <figure className="effects">
                                            <Link to="#"><img src="images/about/best.jpg" alt="Best Features of EduTech" className="img-fluid" /></Link>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Items Section */}
                <section id="popular" className="p_3 position-relative">
                    <div className="container-xl">
                        <div className="row">
                            {[
                                { imgSrc: "images/about/budget.webp", title: "Budget Management", date: "01/09/2024" },
                                { imgSrc: "images/about/issue.jpg", title: "Issue Resolver", date: "01/09/2024" },
                                { imgSrc: "images/about/disability.jpg", title: "Disability Support", date: "01/09/2024" },
                                { imgSrc: "images/about/faq.jpg", title: "Faq Sessions", date: "01/09/2024" },
                                { imgSrc: "images/about/review.jpg", title: "Peer Reviews and Testimonials", date: "01/09/2024" },
                                { imgSrc: "images/about/membership.jpg", title: "Membership Benefits", date: "01/09/2024" },
                                { imgSrc: "images/about/mobile.png", title: "Mobile Friendly", date: "01/09/2024" },
                                { imgSrc: "images/about/consulting.jpg", title: "Consulting", date: "01/09/2024" },
                            ].map((item, index) => (
                                <div className="col-md-3 col-sm-6 mb-4" key={index}>
                                    <Link to="#">
                                        <img src={item.imgSrc} className="custom-img" alt={item.title} />
                                    </Link>
                                    <div className="mt-3">
                                        <h5><Link className="ko" to="#">{item.title}</Link></h5>
                                        <h6 className="mb-0">{item.date}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
