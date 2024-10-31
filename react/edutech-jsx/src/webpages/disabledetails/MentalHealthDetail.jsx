import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './DisableDetail.css'; // Import a CSS file for styling

const MentalHealthDetail = () => {
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
                <h1>Mental Health Conditions</h1>
                <p className="description">
                    Mental health conditions, such as anxiety and depression, can impact individuals in various ways. Here are some courses designed to support those experiencing these challenges.
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

// Course data array with leading slashes added
const courseData = [
    {
        id: 1,
        image: '/images/disable detail/psychological.webp',
        alt: 'Psychology course',
        title: 'Psychology or Counseling',
        description: 'Gain insights into psychological theories and therapeutic practices to support individuals with mental health conditions.',
    },
    {
        id: 2,
        image: '/images/disable detail/art.webp',
        alt: 'Creative arts',
        title: 'Creative Arts',
        description: 'Explore creative outlets that can help individuals express themselves and cope with emotional challenges.',
    },
    {
        id: 3,
        image: '/images/disable detail/social.jpg',
        alt: 'Social work',
        title: 'Social Work',
        description: 'Prepare to assist individuals and communities facing mental health challenges, with a focus on advocacy and support.',
    },
    {
        id: 4,
        image: '/images/disable detail/human.png',
        alt: 'Human services',
        title: 'Human Services',
        description: 'Learn how to provide support and resources for individuals dealing with mental health issues.',
    },
    {
        id: 5,
        image: '/images/disable detail/bussiness.jpg',
        alt: 'Business management',
        title: 'Business Management',
        description: 'Focus on creating flexible work environments that support mental health and well-being.',
    },
    {
        id: 6,
        image: '/images/disable detail/journalism.jpg',
        alt: 'Journalism course',
        title: 'Journalism',
        description: 'Engage in creative expression and flexible, remote work while raising awareness about mental health issues.',
    },
];

export default MentalHealthDetail;
