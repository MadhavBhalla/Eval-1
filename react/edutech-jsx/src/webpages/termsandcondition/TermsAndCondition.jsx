import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TermsAndCondition.css';  // This will import the custom CSS

const TermsAndCondition = () => {
  return (
    <div>
      {/* Header Section */}
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
                {/* Add Navbar items here... */}
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                {/* More items here */}
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* Center Section */}
      <section id="center" className="box">
        <div className="container-xl">
          <div className="boxa">
            <div className="col-md-12">
              <h1 className="boxb">Terms & Conditions</h1>
              <h6 className="boxc"><a className="b" href="index.html">Home &nbsp;|</a>&nbsp;T&C</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main">
        <div className="container1">
          <h1>Terms and Conditions</h1>
          <p>Effective as of 1 September 2024</p>
          <section className="terms-section">
            <h2>Introduction</h2>
            <p>Welcome to <b>EDUTECH</b> These Terms and Conditions govern your use of our website and services. By using our website and services, you agree to be bound by these Terms.</p>
          </section>
          {/* Add more sections like above */}
          <section className="terms-section">
            <h2>Definitions</h2>
            <p>In these Terms, the following definitions apply:</p>
            <ul>
              <p> "We" <b>EDUTECH</b> the provider of the website and its services.</p>
              <li>"You" means the user of our website and services.</li>
              <li>"Services" means the services provided by us through our website.</li>
            </ul>
          </section>
          {/* More sections here */}
        </div>
      </main>

      {/* Footer Section */}
      <section id="footer" className="footer-section">
        {/* Footer content here */}
        <div className="container-xl">
          <div className="footer-row row">
            <div className="col-md-4">
              <div className="footer-about">
                <h3 className="footer-title">About Us</h3>
                <hr className="footer-line mb-4" />
                <p className="footer-text">EduTech is an innovative student management website streamlining enrollment, scheduling, and performance tracking for a seamless educational experience.</p>
                <ul className="social-icons">
                  <li><a href="https://www.facebook.com" className="facebook" title="Facebook" target="_blank"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="https://plus.google.com" className="google" title="Google+" target="_blank"><i className="fab fa-google"></i></a></li>
                  <li><a href="https://www.linkedin.com" className="linkedin" title="LinkedIn" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="https://www.instagram.com" className="instagram" title="Instagram" target="_blank"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            {/* Add other footer sections here */}
          </div>
        </div>
      </section>

      <section id="footer-bottom" className="footer-bottom-section">
        <div className="container-xl">
          <div className="footer-bottom-content col-md-12">
            <p className="footer-bottom-text mb-0">
              © 2024 EduTech. All Rights Reserved | Design by <a href="#" className="footer-bottom-link">Group23</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndCondition;
