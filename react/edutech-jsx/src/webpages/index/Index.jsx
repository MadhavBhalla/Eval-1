import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faDollarSign, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Index.css';

// import img4 from '../assets/images/index/img4.jpeg'; // Adjust according to your folder structure
// import img5 from '../assets/images/index/img5.jpeg'; // Adjust according to your folder structure
// import img6 from '../assets/images/index/img6.jpeg'; // Adjust according to your folder structure

const Index = () => {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const adTimeout = setTimeout(() => {
      setShowAd(true); 
    }, 7000);
    return () => clearTimeout(adTimeout); 
  }, []);

  const closeAd = () => {
    setShowAd(false); 
  };
  return (
    <div>
      {/* Advertisement */}
      {showAd && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}>
          <div style={{
            backgroundColor: '#f4f4f4',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
            width: '400px',
            textAlign: 'center',
          }}>
            <h2 style={{ marginTop: 0 }}>Important Update</h2>
            <p>Sign up now on EduTech for some exciting Updates!</p>
            <button
              onClick={closeAd}
              style={{
                marginTop: '15px',
                width: '100%',
                padding: '10px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <section id="about" className="padding1">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <figure className="col-md-6 col-sm-6">
                <div className="image-container2">
                  <img src="images/index/about img2.jpg" alt="Student consulting video thumbnail" className="w-100" />
                </div>
              </figure>
              <figure className="col-md-6 col-sm-6 image-right">
                <div className="image-container1">
                  <img src="images/index/about img1.jpg" alt="Course details image" className="w-100" />
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
                A Few Words About </h1>
                <h1 className="heading3">
                Our Website
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
              <a className="btn-custom" href="about.html" aria-label="Read more about our website">
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
            <h6 className="heading1">
              <i className="fa fa-graduation-cap me-1"></i> Courses
            </h6>
            <h1 className="font_50 mb-0">Graduate Programs</h1>
          </div>
        </div>
        <div className="row course_1">
          {/* Engineering Course */}
          <div className="col-md-4">
            <div className="course_1m clearfix">
              <div className="course_1m1 clearfix position-relative">
                <div className="course_1m1i clearfix">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <Link to="#">
                        <img src="images/index/img4.jpeg" className="w-110" alt="Engineering" />
                      </Link>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="course_1m2 bg_light p-4 pt-3">
                <h4><Link to="#">Engineering</Link></h4>
                <p>
                  Engineering courses, such as Mechanical Engineering, Electrical Engineering, and Computer Science Engineering,
                  are among the most popular and widely pursued. These programs focus on applying scientific and mathematical
                  principles to solve real-world problems.
                </p>
                <h6 className="mb-0 fw-bold">
                  <Link className="col_oran" to="/course">Read More <i className="fa fa-long-arrow-right ms-1"></i></Link>
                </h6>
              </div>
            </div>
          </div>

          {/* Business Administration Course */}
          <div className="col-md-4">
            <div className="course_1m clearfix">
              <div className="course_1m1 clearfix position-relative">
                <div className="course_1m1i clearfix">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <Link to="#">
                        <img src="images\index\img5.jpeg"  className="w-110" alt="Business Administration" />
                      </Link>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="course_1m2 clearfix bg_light p-4 pt-3">
                <h4><Link to="#">Business Administration</Link></h4>
                <p>
                  Courses like Bachelor of Business Administration (BBA), Accounting, Finance, and Marketing are central to
                  business studies. These programs prepare students for careers in management, entrepreneurship, finance, marketing,
                  and other business-related fields.
                </p>
                <h6 className="mb-0 fw-bold">
                  <Link className="col_oran" to="/course">Read More <i className="fa fa-long-arrow-right ms-1"></i></Link>
                </h6>
              </div>
            </div>
          </div>

          {/* Medicine Course */}
          <div className="col-md-4">
            <div className="course_1m clearfix">
              <div className="course_1m1 clearfix position-relative">
                <div className="course_1m1i clearfix">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <Link to="#">
                        <img src="images\index\img6.jpeg" className="w-110" alt="Medicine" />
                      </Link>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="course_1m2 clearfix bg_light p-4 pt-3">
                <h4><Link to="#">Medicine</Link></h4>
                <p>
                  Medical courses, such as MBBS (Bachelor of Medicine, Bachelor of Surgery), Nursing, Pharmacy, and Dentistry,
                  are essential in the healthcare field. These programs are rigorous and lead to careers in healthcare services,
                  from becoming doctors and nurses to pharmacists and medical researchers.
                </p>
                <h6 className="mb-0 fw-bold">
                  <Link className="col_oran" to="/course">Read More <i className="fa fa-long-arrow-right ms-1"></i></Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



      <section id="feature" className="area">
        <div className="container-fluid">
          <div className="row feature_1">
            {/* Left Column: Text Content */}
            <div className="col-md-6 feature_1l d-flex flex-column justify-content-center">
              <h1>Our Best Features</h1>
              <p className="para2 mb-0 mb-4">
                Explore EduTech’s top-notch features, designed to enhance your learning experience, streamline budget management, and provide expert consulting.
              </p>
              
              {/* Feature 1 */}
              <div className="feature_1li d-flex align-items-center mb-3">
                <div className="feature_1lil">
                  <div className="icon-style">
                    <FontAwesomeIcon icon={faUserGraduate} size="lg" />
                  </div>
                </div>
                <div className="feature_1lir ms-3">
                  <h3 className="ab">Course Knowledge</h3>
                  <p className="para1 mb-0">
                    EduTech lets you choose the perfect course for you with tailored recommendations, interactive content, and expert guidance. Discover and master the skills you need to succeed.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="feature_1li d-flex align-items-center mb-3">
                <div className="feature_1lil">
                  <div className="icon-style">
                    <FontAwesomeIcon icon={faDollarSign} size="lg" />
                  </div>
                </div>
                <div className="feature_1lir ms-3">
                  <h3 className="ab">Budget Management</h3>
                  <p className="para1 mb-0">
                    EduTech teaches you how to manage your expenses effectively, helping you track spending, set budgets, and make informed financial decisions for better financial health.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="feature_1li d-flex align-items-center mb-3">
                <div className="feature_1lil">
                  <div className="icon-style">
                    <FontAwesomeIcon icon={faHandshake} size="lg" />
                  </div>
                </div>
                <div className="feature_1lir ms-3">
                  <h3 className="ab">Consulting</h3>
                  <p className="para1 mb-0">
                    EduTech offers consulting videos to help you better understand budgeting and course selection, providing clear insights and expert guidance for more informed decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="col-md-6 px-0">
              <div className="feature_1r">
                <div className="grid clearfix">
                  <figure className="effects">
                    <Link to="#">
                      <img src="images/about/best.jpg" alt="Best Features of EduTech" className="img-fluid" />
                    </Link>
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