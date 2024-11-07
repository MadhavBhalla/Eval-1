import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section id="footer" className="footer-section">
        <div className="container-xl">
          <div className="footer-row row">
            <div className="col-md-4">
              <div className="footer-about">
                <h3 className="footer-title">About Us</h3>
                <hr className="footer-line mb-4" />
                <p className="footer-text">
                  EduTech is an innovative student management website streamlining enrollment,
                  scheduling, and performance tracking for a seamless educational experience.
                </p>
                <ul className="social-icons">
                  <li>
                    <a href="https://www.facebook.com" className="facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="https://plus.google.com" className="google" title="Google+" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGoogle} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com" className="linkedin" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com" className="instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <div className="footer-links">
                <h3 className="footer-title">Our Links</h3>
                <hr className="footer-line mb-4" />
                <div className="row">
                  <h6 className="link-item col-md-12 col-6">
                    <a className="footer-link" href="index.html">Home</a>
                  </h6>
                  <h6 className="link-item mt-2 col-md-12 col-6">
                    <a className="footer-link" href="about.html">About</a>
                  </h6>
                  <h6 className="link-item mt-2 col-md-12 col-6">
                    <a className="footer-link" href="faq.html">Faq</a>
                  </h6>
                  <h6 className="link-item mt-2 col-md-12 col-6">
                    <a className="footer-link" href="contact.html">Contact Us</a>
                  </h6>
                  <h6 className="link-item mt-2 col-md-12 col-6">
                    <a className="footer-link" href="blog.html">Blog</a>
                  </h6>
                  <h6 className="link-item mt-2 col-md-12 col-6 mb-0">
                    <Link className="footer-link" to="/termsandcondition">Term & Conditions</Link>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-notes">
                <h3 className="footer-title">Notes</h3>
                <hr className="footer-line mb-4" />
                <div className="row note-item">
                  <div className="col-md-3 col-3 pe-0">
                    <figure className="note-effects">
                    <a href="#"><img src="images/about/img1.avif" className="w-100" alt="img2" /></a>
                    </figure>
                  </div>
                  <div className="col-md-9 col-9">
                    <p className="note-text mb-1">
                      <a className="footer-link" href="#">Education is the key that unlocks the door to a brighter future.</a>
                    </p>
                    <h6 className="note-date">16 Aug, 2024</h6>
                  </div>
                </div>
                <hr className="footer-divider" />
                <div className="row note-item">
                  <div className="col-md-3 col-3 pe-0">
                    <figure className="note-effects">
                      <a href="#"><img src="images/about/img2.jpg" className="w-100" alt="img2" /></a>
                    </figure>
                  </div>
                  <div className="col-md-9 col-9">
                    <p className="note-text mb-1">
                      <a className="footer-link" href="#">Management is turning vision into reality through effective coordination.</a>
                    </p>
                    <h6 className="note-date">16 Aug, 2024</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-contact">
                <h3 className="footer-title">Contact Us</h3>
                <hr className="footer-line mb-4" />
                <div className="contact-item row">
                  <div className="col-md-2 col-2">
                    <div className="contact-icon-wrapper">
                      <div className="contact-icon">
                        <i className="fa fa-phone"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10 col-10">
                    <h6 className="contact-text mb-0 lh-base">
                      <a className="footer-link" href="#">+123-456-7890</a><br />
                      <a className="footer-link" href="#">+123-456-7890</a>
                    </h6>
                  </div>
                </div>
                <hr className="footer-divider" />
                <div className="contact-item row">
                  <div className="col-md-2 col-2">
                    <div className="contact-icon-wrapper">
                      <div className="contact-icon">
                        <i className="fa fa-envelope"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10 col-10">
                    <h6 className="contact-text mb-0 lh-base">
                      <a className="footer-link" href="#">nishantbhalla32@gmail.com</a><br />
                      <a className="footer-link" href="#">info@gmail.com</a>
                    </h6>
                  </div>
                </div>
                <hr className="footer-divider" />
                <div className="contact-item row">
                  <div className="col-md-2 col-2">
                    <div className="contact-icon-wrapper">
                      <div className="contact-icon">
                        <i className="fa fa-map-marker"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10 col-10">
                    <h6 className="contact-text mb-0 lh-base">
                      <a className="footer-link" href="#">chitkara university</a><br />
                      <a className="footer-link" href="#">Rajpura</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="footer-bottom" className="footer-bottom-section">
        <div className="container-xl">
          <div className="footer-bottom-content col-md-12">
            <p className="footer-bottom-text mb-0">
              © 2024 EduTech. All Rights Reserved | Design by <a href="#" className="footer-bottom-link">Group 6</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
