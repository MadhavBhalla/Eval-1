import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import './Review.css';

const ReviewSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    email: '',
    reviewText: '',
    rating: null,
    recommend: '',
    consent: false,
  });

  const [message, setMessage] = useState('');
  const [reviews, setReviews] = useState([
    {
      name: 'Kashish',
      profession: 'Photographer',
      rating: 5,
      text: 'I highly recommend this site for anyone looking to master budget management. The course content is top-notch and has greatly improved my financial strategies and planning skills.',
    },
    {
      name: 'Rakesh',
      profession: 'IT Company',
      rating: 4.5,
      text: 'This site transformed my approach to budget management. The courses are comprehensive and easy to follow, providing invaluable insights that have optimized my financial planning.',
    },
    {
      name: 'Shradha',
      profession: 'Front-end Developer',
      rating: 4,
      text: 'The resources on this website are fantastic for understanding budget management. The courses are detailed and practical, making complex financial concepts accessible and actionable.',
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.rating) {
      alert('Please provide a rating.');
      return;
    }

    if (!formData.consent) {
      alert('You must give consent to submit the form.');
      return;
    }

    const newReview = {
      name: formData.name,
      profession: formData.profession,
      rating: formData.rating,
      text: formData.reviewText,
    };

    setReviews([newReview, ...reviews.slice(1)]);
    setFormData({
      name: '',
      profession: '',
      email: '',
      reviewText: '',
      rating: null,
      recommend: '',
      consent: false,
    });
    setMessage('Thank you for your review!');
  };

  return (
    <>
      <section id="center" className="box">
        <div className="container-xl">
          <div className="boxa">
            <div className="col-md-12">
              <h1 className="boxb">Review</h1>
              <h6 className="boxc">
                <a className="b" href="index.html">Home &nbsp;|</a>&nbsp;Review
              </h6>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonial-section">
        <div className="container py-5">
          <div className="row text-center">
            {reviews.map((review, index) => (
              <div key={index} className="col-md-4 mb-4 mb-md-0">
                <div className="card">
                  <div className="card-body">
                    <img src={`images/review/image${index + 1}.webp`} alt={`Review by ${review.name}`} />
                  </div>
                  <h5 className="fw-bold text-dark">{review.name}</h5>
                  <h6 className="fw-bold my-4">{review.profession}</h6>
                  <ul className="mb-4 p-0 m-0 d-flex justify-content-center">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <FontAwesomeIcon
                          icon={i < review.rating ? faStar : faStarHalfAlt}
                          className="fa-sm"
                        />
                      </li>
                    ))}
                  </ul>
                  <p>{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container1">
        <h2>Customer Review Form</h2>
        <p className="text-center">We would love to hear about your experience.</p>

        <form id="reviewForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="profession">Profession</label>
            <input
              type="text"
              className="form-control"
              id="profession"
              value={formData.profession}
              onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
              placeholder="Your Profession"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="example@domain.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Review">Your Review</label>
            <textarea
              className="form-control"
              id="Review"
              rows="3"
              value={formData.reviewText}
              onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
              placeholder="Share your experience with us..."
              required
            />
          </div>

          <div className="form-group">
            <label>Overall Rating</label>
            <p>Rate Your Experience</p>
            <div className="star-rating">
              {[5, 4, 3, 2, 1].map((value) => (
                <React.Fragment key={value}>
                  <input
                    type="radio"
                    id={`${value}-stars`}
                    name="rating"
                    value={value}
                    checked={formData.rating === value}
                    onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  />
                  <label htmlFor={`${value}-stars`}>
                    <FontAwesomeIcon icon={faStar} />
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Would you recommend us?</label><br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="recommend"
                id="recommendYes"
                value="yes"
                checked={formData.recommend === 'yes'}
                onChange={() => setFormData({ ...formData, recommend: 'yes' })}
                required
              />
              <label className="form-check-label" htmlFor="recommendYes">Yes</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="recommend"
                id="recommendNo"
                value="no"
                checked={formData.recommend === 'no'}
                onChange={() => setFormData({ ...formData, recommend: 'no' })}
                required
              />
              <label className="form-check-label" htmlFor="recommendNo">No</label>
            </div>
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="consent"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              required
            />
            <label className="form-check-label" htmlFor="consent">I consent to the use of my Review as outlined in the Review Page.</label>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        {message && <div id="message" className="text-center mt-3">{message}</div>}
      </div>
    </>
  );
};

export default ReviewSection;
