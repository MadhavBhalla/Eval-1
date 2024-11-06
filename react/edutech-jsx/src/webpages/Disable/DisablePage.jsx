import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Disable.css'; // Import your CSS styles

const DisablePage = () => {
  const disabilities = [
    {
      title: "Visual Impairment",
      description: "Limited or no sight affecting daily activities and navigation.",
      imageUrl: "images/disable/visual.jpg",
      link: "/disabledetails/VisualImpairmentDetail", // Ensure this path matches your route
    },
    {
      title: "Hearing Impairment",
      description: "Causing physical limitations and health management challenges.",
      imageUrl: "images/disable/Hearing.jpg",
      link: "/disabledetails/HearingImpairmentDetail",
    },
    {
      title: "Mobility Impairment",
      description: "Difficulty with movement or physical tasks, requiring assistance.",
      imageUrl: "images/disable/mobility.jpg",
      link: "/disabledetails/MobilityDetail",
    },
    {
      title: "Cognitive Disabilities",
      description: "Challenges in learning, thinking, or processing information effectively.",
      imageUrl: "images/disable/Cognitive.jpg",
      link: "/disabledetails/CognitiveDetail",
    },
    {
      title: "Mental Health Conditions",
      description: "Challenges affecting daily functioning.",
      imageUrl: "images/disable/mental.jpg",
      link: "/disabledetails/MentalHealthDetail",
    },
    {
      title: "Chronic Health Conditions",
      description: "Disorders affecting mood and behavior, daily functioning.",
      imageUrl: "images/disable/Chronic.jpg",
      link: "/disabledetails/ChronicHealthDetail",
    },
  ];

  return (
    <>
      <section id="center" className="box">
        <div className="container-xl">
          <div className="boxa">
            <div className="col-md-12">
              <h1 className="boxb">Disable</h1>
              <h6 className="boxc">
                <Link className="b" to="/">Home &nbsp;|</Link>&nbsp;Disable
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section id="disable">
        <div className="container">
          <div className="disable-row">
            {disabilities.map((disability, index) => (
              <div className="disable-card" key={index}>
                <div className="image-container">
                  <Link to={disability.link}>
                    <img src={disability.imageUrl} alt={disability.title} />
                  </Link>
                </div>
                <div className="disable-info">
                  <h5>
                    <Link to={disability.link}>{disability.title}</Link>
                  </h5>
                  <p>{disability.description}</p>
                  <Link className="button_1" to={disability.link}>Let's Start</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DisablePage;
