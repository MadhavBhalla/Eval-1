import React from 'react';

const Contact = () => {
  return (
    <div>
      <section id="header">
        <nav className="navbar navbar-expand-md navbar-light navbar-custom" id="navbar_sticky">
          <div className="container-xl">
            <a className="navbar-brand p-0 fw-bold text-uppercase" href="index.html">
              <i className="fas fa-graduation-cap symbol"></i> EDU<span className="symbol">TECH</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-0 ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Courses
                  </a>
                  <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="course.html"><i className="fas fa-chevron-right font_8 me-1 align-middle"></i> Courses</a></li>
                    <li><a className="dropdown-item border-0" href="budget.html"><i className="fas fa-chevron-right font_8 me-1 align-middle"></i> Budget Management</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Blog
                  </a>
                  <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="blog.html"><i className="fas fa-chevron-right font_8 me-1 align-middle"></i> Blog</a></li>
                    <li><a className="dropdown-item border-0" href="blog_detail.html"><i className="fas fa-chevron-right font_8 me-1 align-middle"></i> Blog Detail</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="disable.html">Disable</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Review.html">Review</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Faq.html">Faq</a>
                </li>
                <li className="nav-item">
                  <a className="login" href="login.html">Login/Sign-up</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <section id="center" className="box">
        <div className="container-xl">
          <div className="boxa">
            <div className="col-md-12">
              <h1 className="boxb">Contact Us</h1>
              <h6 className="boxc"><a className="b" href="index.html">Home &nbsp;|</a>&nbsp;Contact Us</h6>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="p_3">
        <div className="container-xl">
          <div className="row text-center mb-4">
            <div className="col-md-12">
              <h6 className="fw-bold"><i className="fa fa-graduation-cap me-1"></i> Contact Info</h6>
              <h1 className="font_50 mb-0">Get In Touch</h1>
            </div>
          </div>
          <div className="contact_1 row">
            <div className="col-md-4">
              <div className="contact_1i bg_light p-4 pt-5 pb-5 rounded-3 text-center">
                <span className="d-inline-block text-center l-blue bg-white rounded-circle font_60"><i className="fa fa-phone"></i></span>
                <h4 className="mt-4">9350671826</h4>
                <h6 className="mt-3 mb-0">Phone Support</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact_1i bg_light p-4 pt-5 pb-5 rounded-3 text-center">
                <span className="d-inline-block text-center l-blue bg-white rounded-circle font_60"><i className="fa fa-envelope"></i></span>
                <h4 className="mt-4">Edutech@gmail.com</h4>
                <h6 className="mt-3 mb-0">Email Address</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact_1i bg_light p-4 pt-5 pb-5 rounded-3 text-center">
                <span className="d-inline-block text-center l-blue bg-white rounded-circle font_60"><i className="fa fa-map-marker"></i></span>
                <h4 className="mt-4">32 Maple Street, USA</h4>
                <h6 className="mt-3 mb-0">Office Address</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="why-choose-us" className="container">
        <h1 className="head">Why Choose Us</h1>
        <div className="why-us-row" id="one">
          <div className="why-us-icon">
            <span><i className="fas fa-truck"></i></span>
            <h4>Student Support</h4>
            <p>We offer comprehensive support to help students succeed in their studies.</p>
          </div>
          <div className="why-us-icon">
            <span><i className="fas fa-lock"></i></span>
            <h4>Secure Resources</h4>
            <p>Your academic journey is safeguarded with trusted and reliable resources.</p>
          </div>
          <div className="why-us-icon">
            <span><i className="fas fa-star"></i></span>
            <h4>Quality Products</h4>
            <p>We offer the best quality products.</p>
          </div>
          <div className="why-us-icon">
            <span><i className="fas fa-headset"></i></span>
            <h4>24/7 Support</h4>
            <p>Our support team is available around the clock.</p>
          </div>
        </div>
      </div>

      <section className="contact-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="mb-4 font-weight-bold text-center inquire-form-title">Inquire Form <i className="fa fa-envelope"></i></h1>
              <form>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="First Name" id="firstName" required />
                      <i className="fa fa-user"></i>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" id="email" required />
                      <i className="fa fa-envelope"></i>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input type="tel" className="form-control" placeholder="Phone" id="phone" required />
                      <i className="fa fa-phone"></i>
                    </div>
                  </div>
                </div>
                <div className="mb-3"></div>
                <div className="form-group text-center">
                  <textarea className="form-control" id="message" placeholder="Message" required></textarea>
                </div>
                <div className="mb-4"></div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit Request <i className="fas fa-arrow-right"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
