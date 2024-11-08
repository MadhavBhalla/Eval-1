import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';
import './Team.css';
import { Link } from 'react-router-dom';

const teamMembers = [
    {
        name: 'Liza Singla',
        role: 'Course Webpage',
        description: 'Liza is committed to delivering robust and scalable software solutions that enhance the educational experience for users.',
        imgSrc: 'images/our team/profile1.jpg',
    },
    {
        name: 'Madhav Bhalla',
        role: 'Contact Webpage',
        description: 'Madhav manages inquiries, ensuring that each interaction aligns with our mission to provide an enhanced educational platform.',
        imgSrc: 'images/our team/profile2.jpg',
    },
    {
        name: 'Navridhi Sharma',
        role: 'Blog Webpage',
        description: 'Navridhi creatively designs engaging blogs, sharing insights and experiences with our users in a visually appealing way.',
        imgSrc: 'images/our team/profile1.jpg', 
    },
    {
        name: 'Nishant Bhalla',
        role: 'About Webpage',
        description: 'Nishant communicates key details about our company, helping users grasp our mission and values on educational platform.',
        imgSrc: 'images/our team/profile2.jpg', 
    },
];

const TeamPage = () => {
    return (
        <div>
            <section id="center" className="box">
                <div className="container-xl">
                    <div className="boxa">
                        <div className="col-md-12">
                            <h1 className="boxb">Our Team</h1>
                            <h6 className="boxc"><Link className="b" to="/">Home &nbsp;|</Link>&nbsp; Our Team</h6>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-5 team4">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center mb-4">
                        <div className="col-md-7 text-center">
                            <h3 className="mb-3">Project Team</h3>
                            <h6 className="subtitle">
                                This website is a result of the hard work and creativity of a group of dedicated students.
                            </h6>
                        </div>
                    </div>

                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div className="col-lg-3 mb-4" key={index}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <img src={member.imgSrc} alt={`Profile of ${member.name}`} className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="text-center w-100">
                                        <div className="pt-2">
                                            <h5 className="mt-4 mb-0 fw-medium">{member.name}</h5>
                                            <h6 className="subtitle">{member.role}</h6>
                                            <p>{member.description}</p>
                                            <ul className="p-0 list-unstyled d-inline-flex me-2">
                                                <li className="p-0 me-2">
                                                    <a href="#" aria-label={`Follow ${member.name} on Facebook`}>
                                                        <FontAwesomeIcon icon={faFacebook} />
                                                    </a>
                                                </li>
                                                <li className="p-0 me-2">
                                                    <a href="#" aria-label={`Follow ${member.name} on Twitter`}>
                                                        <FontAwesomeIcon icon={faTwitter} />
                                                    </a>
                                                </li>
                                                <li className="p-0 me-2">
                                                    <a href="#" aria-label={`Follow ${member.name} on Instagram`}>
                                                        <FontAwesomeIcon icon={faInstagram} />
                                                    </a>
                                                </li>
                                                <li className="p-0 me-2">
                                                    <a href="#" aria-label={`Follow ${member.name} on Behance`}>
                                                        <FontAwesomeIcon icon={faBehance} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;
