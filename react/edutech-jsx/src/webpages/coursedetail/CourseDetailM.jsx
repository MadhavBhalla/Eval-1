// src/Content.jsx
import React from 'react';

const Content = () => {
  return (
    <div className="container">
      {/* Course Heading */}
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

      {/* Main Content (8 columns) */}
      <div className="content">
        <h1>Mechanical Engineering (ME)</h1>

        {/* About Course */}
        <section id="about_course">
          <h2>What is this Course About?</h2>
          <p>
            Mechanical Engineering (ME) focuses on the design, analysis, manufacturing, and maintenance of mechanical systems.
            It covers a wide range of topics including thermodynamics, fluid mechanics, material science, and automation. 
            Mechanical engineers are involved in the development of everything from small devices to large systems like power plants.
          </p>
        </section>

        {/* Benefits */}
        <section id="benefits">
          <h2>Benefits of the Course</h2>
          <ul>
            <li>High demand for mechanical engineers across multiple industries</li>
            <li>Opportunities to work on innovative projects like robotics and renewable energy</li>
            <li>Strong foundation in core engineering principles and problem-solving</li>
            <li>Attractive salary packages and job stability</li>
            <li>Global opportunities in various sectors like automotive, aerospace, and manufacturing</li>
          </ul>
        </section>

        {/* Future Opportunities */}
        <section id="future-opportunities">
          <h2>Future Opportunities and Scope</h2>
          <p>
            The field of Mechanical Engineering continues to evolve with advancements in areas like automation, robotics, 
            and sustainable energy. Mechanical engineers are in high demand to design and implement these new technologies 
            across various industries, ensuring long-term career prospects.
          </p>
        </section>

        {/* Job Opportunities */}
        <section id="job-opportunities">
          <h2>Job Opportunities</h2>
          <p>
            Mechanical Engineering graduates can find job opportunities in sectors like automotive, aerospace, energy, 
            manufacturing, and robotics. Key roles include mechanical designer, systems engineer, project manager, 
            and maintenance engineer, among others.
          </p>
        </section>

        {/* Top Colleges */}
        <section id="course" className="p_3">
          <div className="container-xl">
            <div className="row course_h1 text-center mb-4">
              <div className="col-md-12">
                <h2 className="mb-0">Top Colleges Offering Mechanical Engineering</h2>
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
                          <a href="#"><img src="/images/course/img_14.jpeg" className="w-110" alt="MIT" /></a>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="course_1m2 clearfix bg_light p-4 pt-3">
                    <h4><a href="#">Massachusetts Institute of Technology (MIT) - USA</a></h4>
                    <p>Fees- $53,790 per year</p>
                    <h6 className="mb-0 fw-bold"><a className="col_oran" href="https://www.mit.edu/">Read More <i className="fa fa-long-arrow-right ms-1"></i></a></h6>
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
                          <a href="#"><img src="/images/course/img_11.jpg" className="w-110" alt="Stanford" /></a>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="course_1m2 clearfix bg_light p-4 pt-3">
                    <h4><a href="#">Stanford University - USA</a></h4>
                    <p>Fees- $52,857 per year</p>
                    <h6 className="mb-0 fw-bold"><a className="col_oran" href="https://www.stanford.edu/">Read More <i className="fa fa-long-arrow-right ms-1"></i></a></h6>
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
                          <a href="#"><img src="/images/course/img_12.jpg" className="w-110" alt="IIT" /></a>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="course_1m2 clearfix bg_light p-4 pt-3">
                    <h4><a href="#">Indian Institute of Technology (IIT) - India</a></h4>
                    <p>Fees- ₹2,00,000 per year</p>
                    <h6 className="mb-0 fw-bold"><a className="col_oran" href="https://www.iitb.ac.in/">Read More <i className="fa fa-long-arrow-right ms-1"></i></a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Average Salary */}
        <section id="average-salary">
          <h2>Average Salary Packages</h2>
          <p>
            The average salary for a Mechanical Engineering graduate can range from $65,000 to $120,000 per year, 
            depending on the role and location. Major companies like Boeing, Tesla, General Electric, and Siemens 
            offer competitive salaries and career growth opportunities for mechanical engineers.
          </p>
        </section>
      </div>

      {/* Sidebar (4 columns with videos) */}
      <div className="sidebar">
        <h2>Consulting Videos</h2>

        {/* Video 1 */}
        <div className="video-container">
          <h3>Overview of Mechanical Engineering</h3>
          <iframe src="https://www.youtube.com/embed/NDa3AGPobS4" allowFullScreen></iframe>
        </div>

        {/* Video 2 */}
        <div className="video-container">
          <h3>Careers in Mechanical Engineering</h3>
          <iframe src="https://www.youtube.com/embed/EqUPbMIrjbk" allowFullScreen></iframe>
        </div>

        {/* Video 3 */}
        <div className="video-container">
          <h3>How to Choose the Right College</h3>
          <iframe src="https://www.youtube.com/embed/IcpJB_PNk84" allowFullScreen></iframe>
        </div>

        {/* Video 4 */}
        <div className="video-container">
          <h3>Recent trends in Mechanical Engineering</h3>
          <iframe src="https://www.youtube.com/embed/vg6DHJXqApk" allowFullScreen></iframe>
        </div>

        <br />
        <div>
          <h4>Do you have any Queries? Kindly visit our <a href="#">FAQ page.</a></h4>
        </div>
      </div>
    </div>
  );
};

export default Content;
