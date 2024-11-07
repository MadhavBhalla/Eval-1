import React from 'react';
import { Link } from 'react-router-dom';
import './DisableDetail.css'; 

const VisualImpairmentDetail = () => {
  const courses = [
    {
      title: "Braille Transcription",
      description: "Learn the skills to transcribe written material into Braille, enabling access to literacy for visually impaired individuals.",
      imageUrl: "/images/disable detail/Braille.jpg",
      altText: "Braille transcription"
    },
    {
      title: "Music or Audio Production",
      description: "Discover the techniques of audio engineering and music production, tailored for those with visual impairments.",
      imageUrl: "/images/disable detail/Music.jpg",
      altText: "Music or audio production"
    },
    {
      title: "Graphic Design",
      description: "Explore graphic design principles using software designed for accessibility, allowing creativity without barriers.",
      imageUrl: "/images/disable detail/Graphic.jpg",
      altText: "Graphic design with accessible software"
    },
    {
      title: "Computer Sci (Assistive Technology)",
      description: "Study computer science with a focus on developing assistive technologies to enhance the lives of visually impaired users.",
      imageUrl: "/images/disable detail/Computer.jpg",
      altText: "Computer science (focus on assistive technology)"
    },
    {
      title: "Rehabilitation Counseling",
      description: "Gain skills to support individuals with visual impairments in their journey towards independence and employment.",
      imageUrl: "/images/disable detail/rehabilitation.jpg",
      altText: "Rehabilitation counseling"
    },
    {
      title: "Orientation Training",
      description: "Gain teaching skills for navigating environments safely and independently.",
      imageUrl: "/images/disable detail/orientation.jpg",
      altText: "Orientation Training"
    },
  ];

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
        <h1>Visual Impairment</h1>
        <p className="description">
          Visual impairment can affect daily activities and navigation. This page lists various courses that can help individuals with visual impairments gain skills and knowledge in their areas of interest.
        </p>

        <div className="courses">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <figure>
                <img src={course.imageUrl} alt={course.altText} />
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

export default VisualImpairmentDetail;
