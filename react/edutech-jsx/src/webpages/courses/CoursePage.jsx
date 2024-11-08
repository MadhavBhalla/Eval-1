// src/components/CoursesSection.jsx
import React from 'react';
 // Make sure this file exists and contains your custom styles
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import './CoursePage.css';
// CourseCard Component
const CourseCard = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">
          Know More
        </a>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  const courses = [
    {
      image: '/images/course/img_1.jpg',
      title: 'Computer Science and Engineering',
      description: 'The Computer Science Engineering course entails the study of computer hardware and software.',
      link: '/course_details.html',
    },
    {
      image: '/images/course/img_2.jpg',
      title: 'Business and Management',
      description: 'This course provides versatile skill set covering strategic planning, leadership and problem-solving.',
      link: '/course_details_busi.html',
    },
    {
      image: '/images/course/img_3.jpeg',
      title: 'Mechanical Engineering',
      description: 'It is the study of physical machines that combines engineering physics and mathematics principles.',
      link: '/course_details_mechanical.html',
    },
    {
      image: '/images/course/img_4.avif',
      title: 'Medicine and Healthcare',
      description: 'Improving human health and well-being through prevention, diagnosis, treatment, and management.',
      link: '#',
    },
    {
      image: '/images/course/img_5.jpg',
      title: 'Design and Creative Arts',
      description: 'Dynamic blend of creativity and technical skills, preparing students for graphic design, fashion, and visual arts.',
      link: '#',
    },
    {
      image: '/images/course/img_6.jpg',
      title: 'Law and Legal Studies',
      description: 'Comprehensive understanding of legal principles, preparing students for careers in law or legal consultancy.',
      link: '#',
    },
    {
      image: '/images/course/img_7.jpeg',
      title: 'Science and Research',
      description: 'Core principles of experimental methodologies, preparing students for careers in research and innovation.',
      link: '#',
    },
    {
      image: '/images/course/img_8.webp',
      title: 'Finance and Accounting',
      description: 'Foundation in financial management and accounting principles, preparing students for finance careers.',
      link: '#',
    },
    {
      image: '/images/course/img_9.jpg',
      title: 'Hospitality and Tourism',
      description: 'Training in hospitality services and tourism operations, preparing students for careers in hotels and travel.',
      link: '#',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section id="center" className="box">
        <div className="container-xl">
          <div className="boxa">
            <div className="col-md-12">
              <h1 className="boxb">Courses</h1>
              <h6 className="boxc">
                <a className="b" href="index.html">
                  Home &nbsp;|{' '}
                </a>
                Courses
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="Center-content">
        <div className="center-main">
          {/* Loop through courses array */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="main" key={index}>
              {courses.slice(index * 3, (index + 1) * 3).map((course, courseIndex) => (
                <CourseCard
                  key={courseIndex}
                  image={course.image}
                  title={course.title}
                  description={course.description}
                  link={course.link}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursesSection;