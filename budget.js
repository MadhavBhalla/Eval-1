// Hardcoded course data
const courses = [
    {
      id: 1,
      name: "Computer Science & Engineering",
      price: 1000,
      image: "images/budget/img_1.jpg",
      description:"The Computer Science Engineering course entails the study of computer hardware and software."
                        
    },
    {
      id: 2,
      name: "Bussiness Management",
      price: 1500,
      image: "images/budget/img_2.jpg",
      description:"This course provides versatile skill set covering strategic planning, leadership and problem-solving, all essential for navigating the corporate world."
    },
    {
      id: 3,
      name: "Finance and accounting",
      price: 2000,
      image: "images/budget/img_8.webp",
      description:"This course provides a foundation in financial management and accounting principles, preparing students for careers in finance, and accounting."
    },
    {
      id: 4,
      name: "Hospitality And Tourism",
      price: 2500,
      image: "images/budget/img_9.jpg",
      description:"This course offers training of hospitality services and tourism operations, preparing students for careers in hotels and travel agencies."
    },
    {
      id: 5,
      name: "Science And Research",
      price: 3000,
      image: "images/budget/img_7.jpeg",
      description: "This course delves into the core principles of experimental methodologies, preparing students for careers in research and innovation."
    },
    {
      id: 6,
      name: "Mechanical Engineering",
      price: 3500,
      image: "images/budget/img_3.jpeg",
      description: "It is the study of physical machines that combines engineering physics and mathematics principles to manufacture  mechanical systems."
    },
    {
      id: 7,
      name: "Medicine & Healthcare",
      price: 4000,
      image: "images/budget/img_4.avif",
      description: "TThis field is dedicated to improving human health and well-being through the prevention, diagnosis, treatment, and management of illnesses."
    },
    {
      id: 8,
      name: "Design and Creative Arts",
      price: 200,
      image: "images/budget/img_5.jpg",
      description: "This course offers a dynamic blend of creativity and technical skills, preparing students to excel in fields such as graphic design, fashion, and visual arts."
    },
  ];
  
  
  // Function to display courses
  const displayCourses = (coursesToDisplay) => {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = "";  // Clear previous courses
  
    if (coursesToDisplay.length > 0) {
      coursesToDisplay.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
         <img src="${course.image}" alt="${course.name}">
          <h3>${course.name}</h3>
          <p>Price: ${course.price}</p>
          <p> ${course.description}</p>
        `;
        courseList.appendChild(courseCard);
      });
    } else {
      courseList.innerHTML = "<p>No courses available within your budget.</p>";
    }
  };
  
  // Show all courses by default
  displayCourses(courses);
  
  // Filter courses by budget
  const filterCourses = () => {
    const budget = document.getElementById('budget-input').value;
    
    if (budget) {
      const filteredCourses = courses.filter(course => course.price <= budget);
      displayCourses(filteredCourses);
    } else {
      displayCourses(courses); // Show all courses if no budget is entered
    }
  };
  
  // Attach event listener to the search button
  document.getElementById('search-button').addEventListener('click', filterCourses);
  