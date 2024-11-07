// BlogContent.jsx
import React, { useState } from 'react';
import './blog.css';

const BlogContent = () => {
  const [likes1, setLikes1] = useState(50);
  const [likes2, setLikes2] = useState(100);
  const [likes3, setLikes3] = useState(350);

  return (
    <div className="container-xl">
      <section id="center" className="box">
        <div className="boxa">
          <div className="col-md-12">
            <h1 className="boxb">Blog</h1>
            <h6 className="boxc">
              <a className="b" href="index.html">Home &nbsp;|</a>&nbsp;Blog
            </h6>
          </div>
        </div>
      </section>

      <div className="row">
        {/* Left Column */}
        <div className="left-column">
          <div className="card">
            <h2>COURSE NAVIGATOR</h2>
            <h5>Guiding students to discover courses that align with their passions and academic goals.</h5>
            <h6>August 26, 2022</h6>
            <img src="images/blog/image1.jpg" alt="Course Navigator" />
            <p>
              Course Navigator is your trusted guide for finding courses that match your interests and aspirations. Whether
              you're searching for the perfect major, exploring elective options, or seeking advice on how to tailor your
              academic journey to your future career, this blog is here to help you make informed decisions.
            </p>
            <a href="#" className="btn btn-primary" style={{ width: '100px' }}>Read More</a>
            <div className="college-compass">
              <div className="post-meta">
                <div className="meta-item">
                  <i className="fa fa-calendar"></i>
                  <span>26th August 2022</span>
                </div>
                <div className="meta-item">
                  <i className="fa fa-comments"></i>
                  <a href="comment.html" className="text-decoration-none">10 Comments</a>
                </div>
                <div className="meta-item">
                  <i className="fa fa-thumbs-up" onClick={() => setLikes1(likes1 + 1)}></i>
                  <span>{likes1} Likes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2>SMART STUDENT BUDGETING</h2>
            <h5>Helping students balance academics with effective financial planning and budgeting.</h5>
            <h6>December 10, 2023</h6>
            <img src="images/blog/image2.jpg" alt="Smart Student Budgeting" />
            <p>
              Our blog on budget management is your essential guide to managing finances while preparing for and during
              your college journey. Explore expert advice, budgeting tools, and practical tips to help you make informed
              financial decisions, ensuring a smooth and financially secure educational experience.
            </p>
            <a href="#" className="btn btn-primary" style={{ width: '100px' }}>Read More</a>
            <div className="college-compass">
              <div className="post-meta">
                <div className="meta-item">
                  <i className="fa fa-calendar"></i>
                  <span>10th December 2023</span>
                </div>
                <div className="meta-item">
                  <i className="fa fa-comments"></i>
                  <a href="comment.html" className="text-decoration-none">28 Comments</a>
                </div>
                <div className="meta-item">
                  <i className="fa fa-thumbs-up" onClick={() => setLikes2(likes2 + 1)}></i>
                  <span>{likes2} Likes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2>EMPOWER YOUR FUTURE</h2>
            <h5>Breaking Barriers, Building Careers for Disabled Students</h5>
            <h6>15th April 2023</h6>
            <img src="images/blog/image7.webp" alt="Empower your Future" />
            <p>
              Your career goals are within reach, no matter the challenges you face. Our education platform is dedicated to
              supporting disabled students in their pursuit of passion-driven careers. Let us help you navigate your path
              to success, with the support you deserve.
            </p>
            <a href="#" className="btn btn-primary" style={{ width: '100px' }}>Read More</a>
            <div className="college-compass">
              <div className="post-meta">
                <div className="meta-item">
                  <i className="fa fa-calendar"></i>
                  <span>15th April 2023</span>
                </div>
                <div className="meta-item">
                  <i className="fa fa-comments"></i>
                  <span>40 Comments</span>
                </div>
                <div className="meta-item">
                  <i className="fa fa-thumbs-up" onClick={() => setLikes3(likes3 + 1)}></i>
                  <span>{likes3} Likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="cards">
            <h2>About Us</h2>
            <img src="images/blog/image3.jpg" alt="About Us" />
            <p>
              Welcome to our education blog, where we explore the latest trends, insights, and strategies in learning and
              teaching. Join us as we dive into topics that empower learners of all ages and stages.
            </p>
          </div>

          <div className="cards">
            <h3>Popular Post</h3>
            <img src="images/blog/image4.jpg" alt="Popular Post 1" />
            <img src="images/blog/image5.jpg" alt="Popular Post 2" />
            <img src="images/blog/image6.jpg" alt="Popular Post 3" />
          </div>

          <div className="card">
            <h3>Follow Us</h3>
            <p>
              Stay connected with us to keep up with the latest in education! Follow us on our social media channels for
              real-time updates, insightful articles, and tips that can enhance your learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;

