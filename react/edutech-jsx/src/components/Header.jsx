import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap,faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
  return (
    <section id="header">
      <nav className="navbar navbar-expand-md" id="navbar_sticky">
        <div className="container-xl">
          <a className="navbar-brand p-0 fw-bold text-uppercase" href="index.html" aria-label="EduTech Homepage">
            <FontAwesomeIcon icon={faGraduationCap} className="symbol" /> <span className='hed'>EDU</span><span className="symbol">TECH</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="course.html">
                    <FontAwesomeIcon icon={faChevronRight} className="font_8 me-1 align-middle" /> Courses
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item border-0" href="budget.html">
                    <FontAwesomeIcon icon={faChevronRight} className="font_8 me-1 align-middle" /> Budget
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="blog.html">
                    <FontAwesomeIcon icon={faChevronRight} className="font_8 me-1 align-middle" />Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item border-0" href="blog_detail.html">
                    <FontAwesomeIcon icon={faChevronRight} className="font_8 me-1 align-middle" /> Blog Detail
                    </a>
                  </li>
                </ul>
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
      <br />
      <br />
      <br />
    </section>
  );
};

export default Header;
