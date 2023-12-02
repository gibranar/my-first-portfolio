// TYPEWRITER
const textElement = document.getElementById("passion");
const texts = ["Coding", "Problem Solving", "Teamwork"];
let currentIndex = 0;

function changeText() {
  textElement.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
  setTimeout(changeText, 4000);
}
changeText();

// SCROLL POSITION
const homeLink = document.querySelector('a[href="#home"]');
const aboutLink = document.querySelector('a[href="#about"]');
const projectsLink = document.querySelector('a[href="#projects"]');

const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const projectsSection = document.getElementById("projects");
const header = document.querySelector("header");

// CLICK ABOUT
aboutLink.addEventListener("click", function (event) {
  event.preventDefault();

  header.style.boxShadow = "0 0 10px red, 0 0 20px red, 0 0 30px red";

  const yOffset = aboutSection.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yOffset, behavior: "smooth" });
});

// CLICK PROJECTS
projectsLink.addEventListener("click", function (event) {
  event.preventDefault();

  const yOffset =
    projectsSection.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yOffset, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  let homePosition = homeSection.offsetTop;
  let aboutPosition = aboutSection.offsetTop;
  let projectsPosition = projectsSection.offsetTop;

  if (scrollPosition <= homePosition) {
    homeLink.classList.add("active");
    aboutLink.classList.remove("active");
    projectsLink.classList.remove("active");
    header.style.boxShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff";
  } else if (
    scrollPosition >= aboutPosition &&
    scrollPosition < projectsPosition
  ) {
    aboutLink.classList.add("active");
    homeLink.classList.remove("active");
    projectsLink.classList.remove("active");
    header.style.boxShadow = "0 0 10px red, 0 0 20px red, 0 0 30px red";
  } else if (scrollPosition >= projectsPosition) {
    projectsLink.classList.add("active");
    homeLink.classList.remove("active");
    aboutLink.classList.remove("active");
    header.style.boxShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff";
  }
});

// SOCIAL
const likeImages = document.getElementsByClassName("like");
const commentInput = document.getElementsByClassName("comment-input");
const postComment = document.getElementsByClassName("post-comment");

for (let i = 0; i < likeImages.length; i++) {
  likeImages[i].addEventListener("click", function () {
    this.classList.toggle("pink");
  });
}

for (let i = 0; i < commentInput.length; i++) {
  commentInput[i].addEventListener("input", function () {
    if (commentInput[i].value !== "") {
      postComment[i].style.opacity = "100%";
      postComment[i].style.cursor = "pointer";
      postComment[i].style.pointerEvents = "all";
    } else {
      postComment[i].style.opacity = "50%";
    }
  });
}

for (let i = 0; i < postComment.length; i++) {
  postComment[i].addEventListener("click", function () {
    const index = Array.from(postComment).indexOf(this);
    const relatedInputValue = commentInput[index].value;
    alert(`Komentar Anda: ${relatedInputValue}`);
    commentInput[i].value = "";
    postComment[i].style.opacity = "50%";
    postComment[i].style.pointerEvents = "none";
  });
}
