import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './webpages/index/Index';
import AboutPage from './webpages/About/AboutPage';
import TeamPage from './webpages/Team/TeamPage';
import VisualImpairmentDetail from './webpages/disabledetails/VisualImpairmentDetail';
import HearingImpairmentDetail from './webpages/disabledetails/HearingImpairmentDetail';
import MobilityDetail from './webpages/disabledetails/MobilityDetail';
import CognitiveDetail from './webpages/disabledetails/CognitiveDetail';
import MentalHealthDetail from './webpages/disabledetails/MentalHealthDetail';
import ChronicHealthDetail from './webpages/disabledetails/ChronicHealthDetail';
import DisablePage from './webpages/Disable/DisablePage';
import ReviewPage from './webpages/Review/ReviewPage';
import FaqPage from './webpages/Faq/FaqPage';
import './style.css';
import TermsAndCondition from './webpages/termsandcondition/TermsAndCondition';
import Contact from './webpages/contactus/Contact';
import CourseList from './webpages/budget/CourseList';
import CoursePage from './webpages/courses/CoursePage';
import CourseDetail from './webpages/coursedetail/CourseDetail';
import CourseDetailB from './webpages/coursedetail/CourseDetailB';
import CourseDetailM from './webpages/coursedetail/CourseDetailM';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="disabledetails/VisualImpairmentDetail" element={<VisualImpairmentDetail />} />
          <Route path="disabledetails/HearingImpairmentDetail" element={<HearingImpairmentDetail />} />
          <Route path="disabledetails/MobilityDetail" element={<MobilityDetail />} />
          <Route path="disabledetails/CognitiveDetail" element={<CognitiveDetail />} />
          <Route path="disabledetails/MentalHealthDetail" element={<MentalHealthDetail />} />
          <Route path="disabledetails/ChronicHealthDetail" element={<ChronicHealthDetail />} />
          <Route path="review" element={<ReviewPage />} />
          <Route path="disable" element={<DisablePage />} />
          <Route path="faq" element={<FaqPage/>} />
          <Route path="course" element={<CoursePage/>} />
          <Route path="termsandcondition" element={<TermsAndCondition/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="budget"  element={<CourseList/>}/>
          <Route path="coursedetail" element={<CourseDetail/>} />
          <Route path="coursedetailb" element={<CourseDetailB/>} />
          <Route path="coursedetailm" element={<CourseDetailM/>} />
          <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
