import React from 'react';
import { Link } from 'react-router-dom'; 
import './DisableDetail.css';

const CognitiveDetail = () => {
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
                <h1>Cognitive Disabilities</h1>
                <p className="description">
                    Cognitive disabilities, such as learning disabilities and ADHD, may impact a person's ability to focus and process information. Below are some courses that cater to these unique needs.
                </p>

                <div className="courses">
                    {courseData.map(course => (
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
        image: '/images/disable detail/psychological.webp',
        alt: 'Psychology course',
        title: 'Psychology (Special Education Focus)',
        description: 'Explore psychological principles with an emphasis on special education and supporting individuals with cognitive disabilities.',
    },
    {
        id: 2,
        image: '/images/disable detail/social.jpg',
        alt: 'Social work',
        title: 'Social Work',
        description: 'Prepare to assist individuals and communities, with a focus on supporting those with cognitive disabilities.',
    },
    {
        id: 3,
        image: '/images/disable detail/art.webp',
        alt: 'Art therapy',
        title: 'Art Therapy',
        description: 'Use creative expression as a therapeutic tool to help individuals with cognitive challenges communicate and heal.',
    },
    {
        id: 4,
        image: '/images/disable detail/creative_writing.jpg',
        alt: 'Creative writing',
        title: 'Creative Writing',
        description: 'Explore writing as a way to express complex emotions and thoughts, particularly for individuals with learning disabilities.',
    },
    {
        id: 5,
        image: '/images/disable detail/it.jpg',
        alt: 'Information technology course',
        title: 'Information Technology',
        description: 'Develop tech skills with online, flexible learning formats that may benefit those with cognitive disabilities.',
    },
    {
        id: 6,
        image: '/images/disable detail/game.jpg',
        alt: 'Game design course',
        title: 'Game Design',
        description: 'Learn to design games that incorporate special tools and techniques for learners with cognitive challenges.',
    },
];

export default CognitiveDetail;
