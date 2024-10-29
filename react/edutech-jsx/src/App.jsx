import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure the bundle is imported for dropdowns
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './webpages/About/AboutPage';
import './style.css';
import './App.css';
const App = () => {
  return (
    <div>
      <Header />
      {/* Main content goes here */}
      <AboutPage />
      <Footer />
    </div>
  );
};

export default App;