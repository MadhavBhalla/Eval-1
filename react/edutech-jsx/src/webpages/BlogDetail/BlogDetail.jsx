import React, { useState, useEffect } from 'react';
import './BlogDetail.css';
import './main.css';

const BlogDetail = () => {
  const [likeCount, setLikeCount] = useState(102);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleLikeClick = () => {
    setLikeCount(prevCount => prevCount + 1);
    console.log('Updated likes:', likeCount + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, comment } = formData;

    if (name.trim() === "" || email.trim() === "" || comment.trim() === "") {
      alert("Please fill out all fields before submitting. Retry.");
    } else {
      alert("Comment posted successfully!!");
      setFormData({ name: '', email: '', comment: '' });
    }
  };

  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <div>
      {/* JSX content goes here */}
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="content">
              <h1>Course Navigator</h1>
              
              <img src="images/blog/image1.jpg" alt="Image" className="img-fluid mb-3" />

              <div className="college-compass">
                <div className="post-meta">
                  <div className="meta-item">
                    <i className="fa fa-thumbs-up like-btn" onClick={handleLikeClick}></i>
                    <span className="like-count">{likeCount} </span>
                  </div>
                  {/* Other meta items */}
                </div>
              </div>
              
              {/* Rest of the content */}
              
              {/* Comment Form */}
              <form className="my-4" onSubmit={handleSubmit}>
                <h2>LEAVE A REPLY!</h2>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Your Name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your Email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <textarea 
                    className="form-control" 
                    rows="3" 
                    placeholder="Your Comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Post Comment</button>
              </form>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Sidebar content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;