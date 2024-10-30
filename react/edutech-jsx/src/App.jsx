// src/App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from './webpages/Layout'; 
import Index from './webpages/index/Index';
import AboutPage from './webpages/About/AboutPage';
import TeamPage from './webpages/Team/TeamPage';
import ReviewPage from './webpages/Review/ReviewPage';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="index" element={<Index />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="review" element={<ReviewPage />} />
          {/* You can add a "Not Found" route here if desired */}
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
