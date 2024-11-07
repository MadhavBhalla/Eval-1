import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import './Review.css';

const ReviewPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    email: '',
    review: '',
    rating: null,
    recommend: '',
    consent: false,
  });

  const [message, setMessage] = useState('');
  const [updatedCard, setUpdatedCard] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.rating) {
      alert('Please provide a rating.');
      return;
    }

    if (!formData.consent) {
      alert('You must give consent to submit the form.');
      return;
    }

    setUpdatedCard({
      name: formData.name,
      profession: formData.profession,
      review: formData.review,
      rating: formData.rating,
    });

    setMessage('Thank you for your review!');
    setFormData({
      name: '',
      profession: '',
      email: '',
      review: '',
      rating: null,
      recommend: '',
      consent: false,
    });
  };

  return (
    <div>
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

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <div className="container py-5">
          <div className="row text-center">
            <ReviewCard
              name="Kashish"
              profession="Photographer"
              imgSrc="images/review/image2.webp"
              stars={5}
              review="I highly recommend this site for anyone looking to master budget management. The course content is top-notch and has greatly improved some of my financial strategies and planning skills."
            />
            <ReviewCard
              name={updatedCard ? updatedCard.name : 'Rakesh'}
              profession={updatedCard ? updatedCard.profession : 'IT Company'}
              imgSrc="images/review/image1.webp"
              stars={updatedCard ? updatedCard.rating : 4.5}
              review={updatedCard ? updatedCard.review : 'This site transformed my approach to budget management. The courses are comprehensive and easy to follow timely, providing invaluable insights that have optimized my financial planning.'}
            />
            <ReviewCard
              name="Shradha"
              profession="Front-end Developer"
              imgSrc="images/review/image3.jpg"
              stars={5}
              review="The resources on this website are fantastic for understanding budget management. The courses are detailed and practical, making complex financial concepts accessible and actionable."
            />
          </div>
        </div>
      </section>

      {/* Review Form */}
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
              name="name"
              value={formData.name}
              onChange={handleInputChange}
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
              name="profession"
              value={formData.profession}
              onChange={handleInputChange}
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
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@domain.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="review">Your Review</label>
            <textarea
              className="form-control"
              id="review"
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              rows="3"
              placeholder="Share your experience with us..."
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Overall Rating</label>
            <div className="star-rating">
              {[5, 4, 3, 2, 1].map((star) => (
                <React.Fragment key={star}>
                  <input
                    type="radio"
                    id={`${star}-stars`}
                    name="rating"
                    value={star}
                    checked={formData.rating === star}
                    onChange={() => setFormData({ ...formData, rating: star })}
                  />
                  <label htmlFor={`${star}-stars`}>
                    <FontAwesomeIcon icon={faStar} />
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Would you recommend us?</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="recommend"
                id="recommendYes"
                value="yes"
                checked={formData.recommend === 'yes'}
                onChange={() => setFormData({ ...formData, recommend: 'yes' })}
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
              />
              <label className="form-check-label" htmlFor="recommendNo">No</label>
            </div>
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              required
            />
            <label className="form-check-label" htmlFor="consent">
              I consent to the use of my review as outlined.
            </label>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        <div id="message" className="text-center mt-3">{message}</div>
      </div>
    </div>
  );
};

const ReviewCard = ({ name, profession, imgSrc, stars, review }) => {
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 !== 0;

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <img src={imgSrc} alt={name} />
        </div>
        <h5 className="fw-bold text-dark">{name}</h5>
        <h6 className="fw-bold my-4">{profession}</h6>
        <ul className="mb-4 p-0 m-0 d-flex justify-content-center">
          {[...Array(fullStars)].map((_, i) => (
            <li key={i}>
              <FontAwesomeIcon icon={faStar} />
            </li>
          ))}
          {halfStar && (
            <li>
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </li>
          )}
          {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
            <li key={i}>
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </li>
          ))}
        </ul>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewPage;
