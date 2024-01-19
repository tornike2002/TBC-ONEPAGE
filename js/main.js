document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const courseContainer = document.getElementById("course-container");

      data.forEach((course) => {
        const courseCard = createCourseCard(course);
        courseContainer.appendChild(courseCard);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));

  function createCourseCard(course) {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("course-title");
    titleElement.textContent = course.title;

    const registerElement = document.createElement("p");
    registerElement.classList.add("course-register");
    registerElement.textContent = course.register;

    const detailsElement = document.createElement("p");
    detailsElement.innerHTML = `<span class="arrow">➔</span> ${course.details}`;
    detailsElement.classList.add("course-details");

    const imgElement = document.createElement("img");
    imgElement.src = course.img;
    imgElement.classList.add("course-img");

    courseCard.appendChild(imgElement);
    courseCard.appendChild(titleElement);
    courseCard.appendChild(registerElement);
    courseCard.appendChild(detailsElement);

    return courseCard;
  }
});
