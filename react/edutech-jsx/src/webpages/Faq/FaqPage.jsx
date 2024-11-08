import React, { useState } from "react";  // Import useState
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// Add your custom CSS here (if needed)
import { Link } from 'react-router-dom';
import "./FaqPage.css"; 
const FAQSection = () => {
  // State variables to handle the form inputs
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can handle the form data, e.g., send it to a server or an API
    console.log("Form submitted with data:", {
      firstName,
      email,
      phone,
      message,
    });

    // Reset form after submission (optional)
    setFirstName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div>
       <section id="center" className="box">
      <div className="container-xl">
        <div className="boxa">
          <div className="col-md-12">
            <h1 className="boxb">Faq</h1>
            <h6 className="boxc">
              <Link className="b" to="/home">Home &nbsp;|</Link> &nbsp; Faq
            </h6>
          </div>
        </div>
      </div>
    </section>
      <section id="faq-head">
        <div id="ques">
          <div id="ques-content">
            <h1>Do You Have Any Questions?</h1>
            <h3 id="we">We have answers (well, most of the time!)</h3>
            <h5 id="below">
              Below you'll find answers to the most questions you may have on
              Edutech. If you still can't find the answer you're looking for,
              just <a href="contact.html">Contact Us</a>!
            </h5>
          </div>
          <div>
            <img src="images\faq\img1.svg" alt="FAQ" id="ques-pic" />
          </div>
        </div>
      </section>
     
      <section id="faq-main">
        <div className="row">
            <div className="col-4">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action" href="#list-item-1">General Information</a>
                    <a className="list-group-item list-group-item-action" href="#list-item-2">Stream Guidance</a>
                    <a className="list-group-item list-group-item-action" href="#list-item-3">Course & University
                        Information</a>
                    <a className="list-group-item list-group-item-action" href="#list-item-4">Motivational Videos</a>
                    <a className="list-group-item list-group-item-action" href="#list-item-5">Finding the Best Course
                    </a>
                    <a className="list-group-item list-group-item-action" href="#list-item-6">Support & Resources</a>


                </div>
            </div>
            <div className="col-8">
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true"
                    className="scrollspy-example" tabindex="0">
                    <h4 id="list-item-1">General Information</h4>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    Do you offer personalized counseling sessions?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Yes, we offer one-on-one counseling sessions with our expert
                                    advisors to help you with stream selection, course guidance, and university
                                    applications.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    Is your guidance applicable for international students?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Yes, our services cater to both domestic and international
                                    students. We provide information and guidance relevant to studying in various
                                    countries around the world.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    How do you ensure the information provided is up-to-date?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We regularly update our database with the latest information
                                    from universities, course providers, and educational authorities to ensure accuracy
                                    and relevance.</div>
                            </div>
                        </div>
                    </div>
                    <h4 id="list-item-2">Stream Guidance</h4>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseFour">
                                    How do I choose the right stream after high school?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We provide personalized stream guidance based on your
                                    interests, strengths, and career goals. You can take our aptitude test and consult
                                    with our career counselors.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFive" aria-expanded="false"
                                    aria-controls="flush-collapseFive">
                                    Can I change my stream after selecting one?
                                </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Yes, you can change your stream, but it’s important to
                                    consider the implications on your future academic and career plans. Our advisors can
                                    help you make an informed decision.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSix" aria-expanded="false"
                                    aria-controls="flush-collapseSix">
                                    What factors should I consider when choosing a stream?
                                </button>
                            </h2>
                            <div id="flush-collapseSix" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Consider your interests, strengths, future career
                                    opportunities, and the subjects you excel in. Our guidance tools can help you
                                    evaluate these factors.</div>
                            </div>
                        </div>
                    </div>
                    <h4 id="list-item-3">Course & University Information</h4>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSeven" aria-expanded="false"
                                    aria-controls="flush-collapseSeven">
                                    How do I find the right course for me?
                                </button>
                            </h2>
                            <div id="flush-collapseSeven" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Use our course finder tool to match your interests and
                                    academic background with the best courses available. Our platform provides detailed
                                    information on each course, including prerequisites and career prospects.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseEight" aria-expanded="false"
                                    aria-controls="flush-collapseEight">
                                    What universities do you recommend for [specific course]?
                                </button>
                            </h2>
                            <div id="flush-collapseEight" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We recommend universities based on factors like ranking,
                                    faculty, placement opportunities, and your specific preferences. You can view our
                                    curated list of top universities for each course.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseNine" aria-expanded="false"
                                    aria-controls="flush-collapseNine">
                                    How do I apply to universities abroad?
                                </button>
                            </h2>
                            <div id="flush-collapseNine" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We provide step-by-step guidance on the application process
                                    for universities abroad, including tips on writing a strong application, securing
                                    scholarships, and obtaining visas.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTen" aria-expanded="false"
                                    aria-controls="flush-collapseTen">
                                    Do you provide information on scholarships?
                                </button>
                            </h2>
                            <div id="flush-collapseTen" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Yes, we offer comprehensive information on scholarships
                                    available for various courses and universities. You can filter by country, course,
                                    and eligibility criteria.</div>
                            </div>
                        </div>
                    </div>
                    <h4 id="list-item-4">Motivational Videos</h4>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseEleven" aria-expanded="false"
                                    aria-controls="flush-collapseEleven">
                                    What kind of motivational content do you offer?
                                </button>
                            </h2>
                            <div id="flush-collapseEleven" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We offer a range of motivational videos, including success
                                    stories, expert talks, and tips on overcoming academic challenges. These are
                                    designed to inspire and guide you on your educational journey.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwelve" aria-expanded="false"
                                    aria-controls="flush-collapseTwelve">
                                    How can motivational videos help me in my studies?
                                </button>
                            </h2>
                            <div id="flush-collapseTwelve" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Our motivational videos are designed to boost your
                                    confidence, help you manage stress, and provide strategies for effective learning
                                    and time management.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThirteen" aria-expanded="false"
                                    aria-controls="flush-collapseThirteen">
                                    Where can I access the motivational videos?
                                </button>
                            </h2>
                            <div id="flush-collapseThirteen" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">You can access our motivational videos in the "Resources"
                                    section of our website or subscribe to our YouTube channel.</div>
                            </div>
                        </div>
                    </div>
                    <h4 id="list-item-5">Finding the Best Course</h4>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFourteen" aria-expanded="false"
                                    aria-controls="flush-collapseFourteen">
                                    How do I know if a course is right for me?
                                </button>
                            </h2>
                            <div id="flush-collapseFourteen" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Our platform provides detailed course descriptions,
                                    including learning outcomes, career prospects, and student reviews. You can also
                                    take our preference assessment to see which courses align with your goals.</div>
                            </div>
                        </div>
                    </div>
                    <h4 id="list-item-6">Support & Resources</h4>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFifteen" aria-expanded="false"
                                    aria-controls="flush-collapseFifteen">
                                    What kind of support is available to students?
                                </button>
                            </h2>
                            <div id="flush-collapseFifteen" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We offer academic support, career counseling, and technical
                                    assistance.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSixteen" aria-expanded="false"
                                    aria-controls="flush-collapseSixteen">
                                    Do you offer career services?
                                </button>
                            </h2>
                            <div id="flush-collapseSixteen" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Yes, we offer career services including resume guidance,
                                    interview preparation, and job placement assistance.</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
      {/* Contact Form Section */}
      <section className="contact-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="mb-4 font-weight-bold text-center inquire-form-title">
                Query <i className="fa fa-envelope col_oran"></i>
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3"></div>
                <div className="form-group text-center">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Write your query here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4"></div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit Request <i className="fa fa-long-arrow-right ms-1"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
