import React from 'react';
import { Link } from 'react-router-dom';
import './DisableDetail.css';

const MobilityDetail = () => {
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
                <h1>Mobility Impairment</h1>
                <p className="description">
                    Mobility impairment can affect a person's physical abilities. Below are some courses suitable for individuals with mobility impairments, offering flexible or remote learning opportunities.
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
        image: '/images/disable detail/bussiness.jpg',
        alt: 'Business administration',
        title: 'Business Administration',
        description: 'Many aspects of business can be managed remotely, making it an ideal option for individuals with mobility impairments.',
    },
    {
        id: 2,
        image: '/images/disable detail/it.jpg',
        alt: 'Information technology course',
        title: 'Information Technology',
        description: 'Learn IT skills that can be applied in remote work environments, offering flexibility and accessibility.',
    },
    {
        id: 3,
        image: '/images/disable detail/graphic_design.jpg',
        alt: 'Graphic design',
        title: 'Graphic Design',
        description: 'Create visually appealing designs from anywhere, as graphic design is a field that embraces digital creativity.',
    },
    {
        id: 4,
        image: '/images/disable detail/online.jpg',
        alt: 'Online marketing',
        title: 'Online Marketing',
        description: 'Explore the world of digital marketing, which can be done from home with a computer and an internet connection.',
    },
    {
        id: 5,
        image: '/images/disable detail/couselling.jpg',
        alt: 'Counseling',
        title: 'Counseling',
        description: 'Specialize in counseling with a focus on disability support, helping others navigate challenges similar to your own.',
    },
    {
        id: 6,
        image: '/images/disable detail/content.jpg',
        alt: 'Digital content creation',
        title: 'Digital Content Creation',
        description: 'Work in flexible and accessible environments, producing engaging content for various online platforms.',
    },
];

export default MobilityDetail;
