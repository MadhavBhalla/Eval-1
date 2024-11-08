import React from 'react';
import './Index.css'; 


const Index = () => {
  return (
    <div>
    <section id="about" className="padding1">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <figure className="col-md-6 col-sm-6">
                <div className="image-container2">
                <img src="images/index/about img2.jpg" alt="Image 1" class="w-100"></img>
                </div>
              </figure>
              <figure className="col-md-6 col-sm-6 image-right">
                <div className="image-container1">
                    <img src="images/index/about img1.jpg" alt="Image 2" class="w-100"></img>
                </div>
              </figure>
            </div>
          </div>
          <div className="col-md-6">
            <article>
              <h6 className="heading1">
                <i className="fa fa-graduation-cap me-1"></i> About Our Website
              </h6>
              <h1 className="heading2">
                A Few Words About <br /> Our Website
              </h1>
              <p className="text1">
                Discover a website that guides you to the perfect course tailored to your needs. It helps you compare options, assess which program suits your goals, and even manage your budget effectively. By offering consulting videos, it enhances your educational journey, making your choices clearer.
              </p>
              <p>
                We offer top-range services such as consulting videos to enhance your decision-making process and provide specialized support for students with disabilities. With our resources, we ensure that every student has the opportunity to succeed.
              </p>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="row">
                    <div className="col-md-3">
                      <span className="number-circle">01</span>
                    </div>
                    <div className="col-md-9">
                      <h5>Course Finder</h5>
                      <p>Discover the ideal course for your needs with our website.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="row">
                    <div className="col-md-3">
                      <span className="number-circle">02</span>
                    </div>
                    <div className="col-md-9">
                      <h5>Budget Management</h5>
                      <p>Help yourself in managing your budget with our website.</p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn-custom" href="about.html">
                Read More <i className="fa fa-long-arrow-right ms-1"></i>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>

 

    <section id="course" className="p_3">
      <div className="container-xl">
        <div className="row course_h1 text-center mb-4">
          <div className="col-md-12">
            <h6 className="heading1"><i className="fa fa-graduation-cap me-1"></i> Courses</h6>
            <h1 className="font_50 mb-0">Graduate Programs</h1>
          </div>
        </div>
        <div className="row course_1">
          {/* Engineering */}
          <div className="col-md-4">
            <div className="course_1m clearfix">
              <div className="course_1m1 clearfix position-relative">
                <div className="course_1m1i clearfix">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#"><img src="/images/index/img4.jpeg" className="w-110" alt="Engineering" /></a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="course_1m2 bg_light p-4 pt-3">
                <h4><a href="#">Engineering</a></h4>
                <p>Engineering courses, such as Mechanical Engineering, Electrical Engineering, and Computer Science Engineering, are among the most popular and widely pursued.</p>
                <h6 className="mb-0 fw-bold"><a className="col_oran" href="course.html">Read More <i className="fa fa-long-arrow-right ms-1"></i></a></h6>
              </div>
            </div>
          </div>

          {/* Business Administration */}
          <div className="col-md-4">
            <div className="course_1m clearfix">
              <div className="course_1m1 clearfix position-relative">
                <div className="course_1m1i clearfix">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#"><img src="/images/index/img5.jpeg" className="w-110" alt="Business" /></a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="course_1m2 clearfix bg_light p-4 pt-3">
                <h4><a href="#">Business Administration</a></h4>
                <p>Courses like Bachelor of Business Administration (BBA),  and Marketing prepare students for careers in management, and finance.</p>
                <h6 className="mb-0 fw-bold"><a className="col_oran" href="course.html">Read More <i className="fa fa-long-arrow-right ms-1"></i></a></h6>
              </div>
            </div>
          </div>

          {/* Medicine */}
          <div className="col-md-4">
            <div className="course_1m clearfix">
              <div className="course_1m1 clearfix position-relative">
                <div className="course_1m1i clearfix">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#"><img src="/images/index/img6.jpeg" className="w-110" alt="Medicine" /></a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="course_1m2 clearfix bg_light p-4 pt-3">
                <h4><a href="#">Medicine</a></h4>
                <p>Medical courses, such as MBBS, Nursing, Pharmacy, and Dentistry, prepare students for careers in healthcare services.</p>
                <h6 className="mb-0 fw-bold"><a className="col_oran" href="course.html">Read More <i className="fa fa-long-arrow-right ms-1"></i></a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="feature" className="area">
      <div className="container-fluid">
        <div className="row feature_1">
          <div className="col-md-6 feature_1l d-flex flex-column justify-content-center">
            <h1>Our Best Features</h1>
            <p className="para1 mb-4">Explore EduTech’s top-notch features, designed to enhance your learning experience, streamline budget management, and provide expert consulting.</p>

            {/* Feature 1: Course Knowledge */}
            <div className="feature_1li">
              <div className="feature_1lil">
                <div className="icon-style">
                  <i className="fa-solid fa-user-graduate"></i>
                </div>
              </div>
              <div className="feature_1lir ms-3">
                <h3 className="ab">Course Knowledge</h3>
                <p className="para1">EduTech lets you choose the perfect course for you with tailored recommendations, interactive content, and expert guidance.</p>
              </div>
            </div>

            {/* Feature 2: Budget Management */}
            <div className="feature_1li">
              <div className="feature_1lil">
                <div className="icon-style">
                  <i className="fa-solid fa-dollar-sign"></i>
                </div>
              </div>
              <div className="feature_1lir ms-3">
                <h3 className="ab">Budget Management</h3>
                <p className="para1">EduTech teaches you how to manage your expenses effectively, helping you track spending, set budgets, and make informed financial decisions.</p>
              </div>
            </div>

            {/* Feature 3: Consulting */}
            <div className="feature_1li">
              <div className="feature_1lil">
                <div className="icon-style">
                  <i className="fa fa-handshake"></i>
                </div>
              </div>
              <div className="feature_1lir ms-3">
                <h3 className="ab">Consulting</h3>
                <p className="para1">EduTech offers consulting videos to help you better understand budgeting and course selection.</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-6 px-0">
            <div className="feature_1r">
              <div className="grid clearfix">
                <figure className="effects">
                  <a href="#"><img src="/images/about/best.jpg" alt="Best Features" /></a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>

    </div>
  );
};


export default Index;
