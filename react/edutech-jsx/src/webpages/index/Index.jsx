import React from 'react';
import './Index.css'; 


const Index = () => {
  return (
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
  );
};

export default Index;
