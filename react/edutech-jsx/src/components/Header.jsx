import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <section id="header">
      <nav className="navbar navbar-expand-md" id="navbar_sticky">
        <div className="container-xl">
          <Link className="navbar-brand p-0 fw-bold text-uppercase" to="/" aria-label="EduTech Homepage">
            <FontAwesomeIcon icon={faGraduationCap} className="symbol" /> <span className='hed'>EDU</span><span className="symbol">TECH</span>
          </Link>
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
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
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
                    <Link className="dropdown-item" to="/course">
                      <FontAwesomeIcon icon={faChevronRight} className="font_8 me-1 align-middle" /> Courses
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item border-0" to="/budget">
                      <FontAwesomeIcon icon={faChevronRight} className="font_8 me-1 align-middle" /> Budget
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownBlog"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdownBlog">
                  <li>
                    <Link className="dropdown-item" to="/blog">
                      <FontAwesomeIcon icon={faChevronRight} className="font_8 me-1 align-middle" /> Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item border-0" to="/blog-detail">
                      <FontAwesomeIcon icon={faChevronRight} className="font_8 me-1 align-middle" /> Blog Detail
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/disable">Disable</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/review">Review</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">Faq</Link>
              </li>
              <li className="nav-item">
                <Link className="login nav-link" to="/login">Login/Sign-up</Link>
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
