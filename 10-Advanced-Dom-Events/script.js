"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

// Scroll to Section 1 effect

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  /*
  scrollTo takes the coords in X in this case both are 0. The left of s1 and the scrollX of the window.
  But s1 top is related to the viewport and scrollY is related to the window.
  So the top position of the section in that moment and the scroll that I've done adding together.
  */

  // scrollTo(s1coords.left + scrollX, s1coords.top + scrollY);

  // window.scrollTo({
  //   left: s1coords.left + scrollX,
  //   top: s1coords.top + scrollY,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// const h1 = document.querySelector("h1");

// const showAlert = () => {
//   alert("mouseenter");
//   h1.removeEventListener("mouseenter", showAlert);
// };

// h1.addEventListener("mouseenter", showAlert);

/*
const createRgbInts = () => {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return [randomInt(0, 255), randomInt(0, 255), randomInt(0, 255)];
};

const getRandomColor = () => {
  const [a, b, c] = createRgbInts();
  return `rgb(${a}, ${b}, ${c})`;
};
 */

/*
 * this => The element where the event was attached.
 * e.target => The element who really triggers the eventListener
 * e.currentTarget => same as this
 */

// Event propagation demo

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.setProperty("background-color", `${getRandomColor()}`);
//   console.log("LINK", e.target, e.currentTarget);
//   e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.setProperty("background-color", `${getRandomColor()}`);
//   console.log("CONTAINER", e.target, e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.setProperty("background-color", `${getRandomColor()}`);
//   console.log("NAV", e.target, e.currentTarget);
// });
