import React from 'react';
import "./Contact.css"
const Contact = () => {
  return (
    <div>
      

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
