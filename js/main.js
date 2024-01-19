document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from data.json using JavaScript
    fetch('./data/data.json')
      .then(response => response.json())
      .then(data => {
        // Handle the data and display it on the page
        const courseContainer = document.getElementById('course-container');
  
        data.forEach(course => {
          const courseCard = createCourseCard(course);
          courseContainer.appendChild(courseCard);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  
    function createCourseCard(course) {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = course.title;
  
      const registerElement = document.createElement('p');
      registerElement.textContent = course.register;
  
      const imgElement = document.createElement('img');
      imgElement.src = course.img;
      imgElement.classList.add('course-img'); 
  
      // Append elements to the course card
      courseCard.appendChild(imgElement);
      courseCard.appendChild(titleElement);
      courseCard.appendChild(registerElement);
  
      return courseCard;
    }
  });
  