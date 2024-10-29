import React from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure the bundle is imported for dropdowns
import './style.css';
import './App.css';
const App = () => {
  return (
    <div>
      <Header />
      {/* Main content goes here */}
      <Footer />
    </div>
  );
};

export default App;
