import React from 'react';
import { Link } from 'react-router-dom'; 
import './DisableDetail.css';

const ChronicHealthDetail = () => {
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
                <h1>Chronic Health Conditions</h1>
                <p className="description">
                    Chronic health conditions, such as fibromyalgia and multiple sclerosis, require specialized knowledge and care. Below are some courses designed to equip you with the skills necessary to support individuals with these conditions.
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

// Course data array with leading slashes added
const courseData = [
    {
        id: 1,
        image: '/images/disable detail/health.jpg',
        alt: 'Health Sciences course',
        title: 'Health Sciences',
        description: 'Gain a comprehensive understanding of health sciences with a focus on effective patient care strategies.',
    },
    {
        id: 2,
        image: '/images/disable detail/Nutrition.jpg',
        alt: 'Nutrition and Wellness course',
        title: 'Nutrition and Wellness',
        description: 'Explore the role of nutrition in health and wellness, with practical applications for managing chronic conditions.',
    },
    {
        id: 3,
        image: '/images/disable detail/social.jpg',
        alt: 'Social Work course',
        title: 'Social Work',
        description: 'Prepare to advocate for and support individuals living with chronic health conditions through social work principles.',
    },
    {
        id: 4,
        image: '/images/disable detail/Environmental.jpg',
        alt: 'Environmental Studies course',
        title: 'Environmental Studies',
        description: 'Learn about the impact of the environment on health, with options for hybrid or online learning.',
    },
    {
        id: 5,
        image: '/images/disable detail/bussiness.jpg',
        alt: 'Business Administration course',
        title: 'Business Administration',
        description: 'Develop business skills with a focus on healthcare services and management.',
    },
    {
        id: 6,
        image: '/images/disable detail/Public.png',
        alt: 'Public Health Policy course',
        title: 'Public Health Policy',
        description: 'Learn to advocate for healthcare improvements and policies affecting individuals with chronic health conditions.',
    },
];

export default ChronicHealthDetail;
