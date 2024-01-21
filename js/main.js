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

// carousel
const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0],
  arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;
const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14;

    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});
const autoSlide = () => {
  if (
    carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    carousel.scrollLeft <= 0
  )
    return;
  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth + 14;

  let valDifference = firstImgWidth - positionDiff;
  if (carousel.scrollLeft > prevScrollLeft) {
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }

  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};
const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};
const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

// questions side
function toggleContent(element) {
  element.classList.toggle('active');
}
// navbar
document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.querySelector("#navbar-scroll");
  
  window.addEventListener("scroll", function() {
    navbar.classList.toggle('sticky', window.scrollY > 0);
  });
});

