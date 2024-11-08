// src/Content.jsx
import React from 'react';

// Header Component
const Header = () => {
  return (
    <section id="center" className="box">
      <div className="container-xl">
        <div className="boxa">
          <div className="col-md-12">
            <h1 className="boxb">Course</h1>
            <h6 className="boxc">
              <a className="b" href="index.html">Home &nbsp;|</a>&nbsp;Course Details
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

// Course Details Component
const CourseDetails = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Business and Management</h1>
        <section id="about_course">
          <h2>What is this Course About?</h2>
          <p>Business and Management involves the study of how organizations operate, including areas like finance, marketing, human resources, operations, and entrepreneurship. It aims to equip students with the skills needed to manage and grow businesses in today’s global marketplace.</p>
        </section>

        <section id="benefits">
          <h2>Benefits of the Course</h2>
          <ul>
            <li>High demand for management professionals across various industries</li>
            <li>Opportunities to develop leadership and decision-making skills</li>
            <li>Broad understanding of business functions and strategies</li>
            <li>Lucrative career opportunities with potential for high earnings</li>
            <li>Global career prospects</li>
          </ul>
        </section>

        <section id="future-opportunities">
          <h2>Future Opportunities and Scope</h2>
          <p>Business and Management continues to evolve with trends like digital transformation, sustainability, and innovation. Professionals with expertise in these areas are increasingly valued by businesses seeking to stay competitive in the market.</p>
        </section>

        <section id="job-opportunities">
          <h2>Job Opportunities</h2>
          <p>Graduates in Business and Management can pursue roles like business analyst, marketing manager, financial advisor, operations manager, and human resources manager, among others. The global demand for business professionals ensures a wide range of career options.</p>
        </section>
      </div>
    </div>
  );
};

// Colleges Component
const Colleges = () => {
  return (
    <section id="course" className="p_3">
      <div className="container-xl">
        <div className="row course_h1 text-center mb-4">
          <div className="col-md-12">
            <h2 className="mb-0">Top Colleges Offering Business and Management</h2>
          </div>
        </div>
        <div className="row course_1">
          {/* College 1 */}
          <div className="col-md-4">
            <div className="course_1m clearfix">
              <div className="course_1m1 clearfix position-relative">
                <div className="course_1m1i clearfix">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#"><img src="images/course/img_13.jpg" className="w-110" alt="Harvard Business School" /></a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="course_1m2 clearfix bg_light p-4 pt-3">
                <h4><a href="#">Harvard Business School - USA</a></h4>
                <p>Fees- $73,440 per year</p>
                <h6 className="mb-0 fw-bold"><a className="col_oran" href="https://www.hbs.edu/">Read More <i className="fa fa-long-arrow-right ms-1"></i></a></h6>
              </div>
            </div>
          </div>
          {/* College 2 */}
          <div className="col-md-4">
            <div className="course_1m clearfix">
              <div className="course_1m1 clearfix position-relative">
                <div className="course_1m1i clearfix">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#"><img src="images/course/img_11.jpg" className="w-110" alt="London Business School" /></a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="course_1m2 clearfix bg_light p-4 pt-3">
                <h4><a href="#">London Business School - UK</a></h4>
                <p>Fees- £97,500 per year</p>
                <h6 className="mb-0 fw-bold"><a className="col_oran" href="https://www.london.edu/">Read More <i className="fa fa-long-arrow-right ms-1"></i></a></h6>
              </div>
            </div>
          </div>
          {/* College 3 */}
          <div className="col-md-4">
            <div className="course_1m clearfix">
              <div className="course_1m1 clearfix position-relative">
                <div className="course_1m1i clearfix">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#"><img src="images/course/img_10.jpg" className="w-110" alt="INSEAD Business School" /></a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="course_1m2 clearfix bg_light p-4 pt-3">
                <h4><a href="#">INSEAD Business School - France/Singapore</a></h4>
                <p>Fees- €89,000 per year</p>
                <h6 className="mb-0 fw-bold"><a className="col_oran" href="https://www.insead.edu/">Read More <i className="fa fa-long-arrow-right ms-1"></i></a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ConsultingVideos Component
const ConsultingVideos = () => {
  return (
    <div>
      <h2>Consulting Videos</h2>
      <div className="video-container">
        <h3>Overview of Business And Management</h3>
        <iframe src="https://www.youtube.com/embed/a-uPznyA7Hw" allowFullScreen></iframe>
      </div>
      <div className="video-container">
        <h3>Careers in Business And Management</h3>
        <iframe src="https://www.youtube.com/embed/YtU0Bm78qEo" allowFullScreen></iframe>
      </div>
      <div className="video-container">
        <h3>How to Choose the Right College</h3>
        <iframe src="https://www.youtube.com/embed/IcpJB_PNk84" allowFullScreen></iframe>
      </div>
      <div className="video-container">
        <h3>Future Trends in Business</h3>
        <iframe src="https://www.youtube.com/embed/MKAjKwgMZIY" allowFullScreen></iframe>
      </div>
      <br />
      <div>
        <h4>Do you have any Queries? Kindly visit our <a href="#">FAQ page.</a></h4>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ConsultingVideos />
    </div>
  );
};

// Content Component that combines Header, Course Details, Colleges, and Sidebar
const Content = () => {
  return (
    <div>
      <Header />
      <CourseDetails />
      <Colleges />
      <Sidebar />
    </div>
  );
};

export default Content;
