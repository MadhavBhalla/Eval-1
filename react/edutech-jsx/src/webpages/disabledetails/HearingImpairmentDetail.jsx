import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './DisableDetail.css'; // Import a CSS file for styling

const HearingImpairmentDetail = () => {
    return (
        <>
            <section id="center" className="box">
                <div className="container-xl">
                    <div className="boxa">
                        <div className="col-md-12">
                            <h1 className="boxb">Detail</h1>
                            <h6 className="boxc">
                                <Link className="b" to="/disable">Disable &nbsp;|</Link>&nbsp;Detail
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <br />

            <section id="disable-detail">
                <h1>Hearing Impairment</h1>
                <p className="description">
                    Hearing impairment can impact communication and social interaction. This page lists various courses that can help individuals with hearing impairments develop skills and knowledge in their areas of interest.
                </p>

                <div className="courses">
                    {courseData.map((course) => (
                        <div className="course-card" key={course.id}>
                            <figure>
                                <img src={course.image} alt={course.alt} />
                                <figcaption>
                                    <h3>{course.title}</h3>
                                    <p>{course.description}</p>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </div>
            </section>
            <br />
        </>
    );
};

// Course data array to map over
const courseData = [
    {
        id: 1,
        image: '/images/disable detail/scoial.jpg',
        alt: 'A social work professional helping a deaf individual',
        title: 'Social Work',
        description: 'Providing support, resources, and advocacy for the needs of deaf individuals.',
    },
    {
        id: 2,
        image: '/images/disable detail/rehabilitation.jpg',
        alt: 'Rehabilitation counseling session',
        title: 'Rehabilitation',
        description: 'Guiding individuals with disabilities, focusing on achieving personal, social, and vocational goals.',
    },
    {
        id: 3,
        image: '/images/disable detail/communication.jpg',
        alt: 'People engaging in communication studies',
        title: 'Communication Studies',
        description: 'Exploring body language, facial expressions, and gestures to enhance human interaction.',
    },
    {
        id: 4,
        image: '/images/disable detail/sign.jpg',
        alt: 'Sign language interpretation in action',
        title: 'Sign Language Interpretation',
        description: 'Professionally translating spoken language into sign language for deaf individuals\' communication.',
    },
    {
        id: 5,
        image: '/images/disable detail/early.jpg',
        alt: 'Early childhood education classroom',
        title: 'Early Childhood Education',
        description: 'Teaching young children, integrating strategies to support diverse developmental needs inclusively.',
    },
    {
        id: 6,
        image: '/images/disable detail/audiology.jpg',
        alt: 'Audiologist working with a patient',
        title: 'Audiology Pathology',
        description: 'Diagnosing and treating hearing and speech disorders for improved communication abilities.',
    },
];

export default HearingImpairmentDetail;
