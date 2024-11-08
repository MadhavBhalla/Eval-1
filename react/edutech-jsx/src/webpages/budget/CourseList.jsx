import React, { useState } from 'react';
import "./CourseList.css"
const coursesData = [
  { id: 1, name: "Computer Science & Engineering", price: 1000, image: "images/budget/img_1.jpg", description: "The Computer Science Engineering course entails the study of computer hardware and software." },
  { id: 2, name: "Business Management", price: 1500, image: "images/budget/img_2.jpg", description: "Provides skills in strategic planning, leadership, and problem-solving for corporate roles." },
  { id: 3, name: "Finance and Accounting", price: 2000, image: "images/budget/img_8.webp", description: "Covers financial management and accounting principles for finance careers." },
  { id: 4, name: "Hospitality And Tourism", price: 2500, image: "images/budget/img_9.jpg", description: "Focuses on hospitality services and tourism operations." },
  { id: 5, name: "Science And Research", price: 3000, image: "images/budget/img_7.jpeg", description: "Explores experimental methodologies for research and innovation careers." },
  { id: 6, name: "Mechanical Engineering", price: 3500, image: "images/budget/img_3.jpeg", description: "Covers engineering principles for mechanical systems." },
  { id: 7, name: "Medicine & Healthcare", price: 4000, image: "images/budget/img_4.avif", description: "Dedicated to human health through diagnosis, treatment, and prevention." },
  { id: 8, name: "Design and Creative Arts", price: 200, image: "images/budget/img_5.jpg", description: "Offers skills in graphic design, fashion, and visual arts." },
];

function CourseList() {
  const [budget, setBudget] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  const handleSearch = () => {
    const filtered = budget ? coursesData.filter(course => course.price <= budget) : coursesData;
    setFilteredCourses(filtered);
  };

  return (
    <>
    <div id="center" className="box">
    <div className="container-xl">
      <div className="boxa">
        <div className="col-md-12">
          <h1 className="boxb">Courses</h1>
          <h6 className="boxc">
            <a className="b" href="#">Home |</a> Courses
          </h6>
        </div>
      </div>
    </div>
  </div>
    <div className="container">
       
      <h1>Find Your Course</h1>
      <div className="filter-section">
        <input
          type="number"
          id="budget-input"
          placeholder="Enter your budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <button id="search-button" onClick={handleSearch}>Search</button>
      </div>
      <div className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.name} />
              <h3>{course.name}</h3>
              <p>Price: ${course.price}</p>
              <p>{course.description}</p>
            </div>
          ))
        ) : (
          <p>No courses available within your budget.</p>
        )}
      </div>
    </div>
    
      </>
  );
}

export default CourseList;
