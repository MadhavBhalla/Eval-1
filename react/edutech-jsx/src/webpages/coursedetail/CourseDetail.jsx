// src/Content.jsx
import React from "react";
import "./CourseDetail.css";

// Course Details Component
const CourseDetails = () => {
  return (
    <div className="first">
      <section id="center" className="box">
        <div className="container-xl">
          <div className="boxa">
            <div className="col-md-12">
              <h1 className="boxb">Course</h1>
              <h6 className="boxc">
                <a className="b" href="index.html">
                  Home &nbsp;|
                </a>
                &nbsp;Course Details
              </h6>
            </div>
          </div>
        </div>
      </section>
      <div className="container detail">
        <div className="content">
          <h1>Computer Science and Engineering (CSE)</h1>
          <section id="about_course">
            <h2>What is this Course About?</h2>
            <p>
              Computer Science and Engineering (CSE) involves the design,
              development, and application of computer systems and software. It
              covers a wide range of computing technologies and applications,
              from data processing to artificial intelligence and networking.
            </p>
          </section>

          <section id="benefits">
            <h2>Benefits of the Course</h2>
            <ul>
              <li>
                High demand for skilled professionals in various industries
              </li>
              <li>
                Opportunities for innovation and creativity in solving
                real-world problems
              </li>
              <li>Strong foundation in technology, software, and hardware</li>
              <li>Attractive salary packages</li>
              <li>Global opportunities</li>
            </ul>
          </section>

          <section id="future-opportunities">
            <h2>Future Opportunities and Scope</h2>
            <p>
              The field of CSE continues to grow with advancements in technology
              like Artificial Intelligence (AI), Machine Learning, Internet of
              Things (IoT), Blockchain, and more. Professionals with expertise
              in these areas are highly sought after by tech giants and startups
              alike.
            </p>
          </section>

          <section id="job-opportunities">
            <h2>Job Opportunities</h2>
            <p>
              Currently, there are thousands of job opportunities available for
              CSE graduates globally. Key roles include software developer,
              system analyst, network engineer, data scientist, AI specialist,
              and many others.
            </p>
          </section>
          <section id="course" className="p_3">
            <div className="container-xl">
              <div className="row course_h1 text-center mb-4">
                <div className="col-md-12">
                  <h2 className="mb-0">Top Colleges Offering CSE</h2>
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
                            <a href="#">
                              <img
                                src="images/course/img_14.jpeg"
                                className="w-110"
                                alt="MIT"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="course_1m2 clearfix bg_light p-4 pt-3">
                      <h4>
                        <a href="#">
                          Massachusetts Institute of Technology (MIT) - USA
                        </a>
                      </h4>
                      <p>Fees- $53,790 per year</p>
                      <h6 className="mb-0 fw-bold">
                        <a className="col_oran" href="https://www.mit.edu/">
                          Read More{" "}
                          <i className="fa fa-long-arrow-right ms-1"></i>
                        </a>
                      </h6>
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
                            <a href="#">
                              <img
                                src="images/course/img_13.jpg"
                                className="w-110"
                                alt="Stanford"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="course_1m2 clearfix bg_light p-4 pt-3">
                      <h4>
                        <a href="#">Stanford University - USA</a>
                      </h4>
                      <p>Fees- $52,857 per year</p>
                      <h6 className="mb-0 fw-bold">
                        <a
                          className="col_oran"
                          href="https://www.stanford.edu/"
                        >
                          Read More{" "}
                          <i className="fa fa-long-arrow-right ms-1"></i>
                        </a>
                      </h6>
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
                            <a href="#">
                              <img
                                src="images/course/img_12.jpg"
                                className="w-110"
                                alt="IIT"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="course_1m2 clearfix bg_light p-4 pt-3">
                      <h4>
                        <a href="#">
                          Indian Institute of Technology (IIT) - India
                        </a>
                      </h4>
                      <p>Fees- ₹2,00,000 per year</p>
                      <h6 className="mb-0 fw-bold">
                        <a className="col_oran" href="https://www.iitb.ac.in/">
                          Read More{" "}
                          <i className="fa fa-long-arrow-right ms-1"></i>
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="sidebar">
          <h2>Consulting Videos</h2>
          <div className="video-container">
            <h3>Overview of CSE</h3>
            <iframe
              src="https://www.youtube.com/embed/5xKmg5T7oQ8"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-container">
            <h3>Careers in CSE</h3>
            <iframe
              src="https://www.youtube.com/embed/yUaJCjiPBnY"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-container">
            <h3>How to Choose the Right College</h3>
            <iframe
              src="https://www.youtube.com/embed/IcpJB_PNk84"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-container">
            <h3>Future Trends in Technology</h3>
            <iframe
              src="https://www.youtube.com/embed/rzO3i_fCXNE"
              allowFullScreen
            ></iframe>
          </div>
          <br />
          <div>
            <h4>
              Do you have any Queries? Kindly visit our{" "}
              <a href="#">FAQ page.</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
