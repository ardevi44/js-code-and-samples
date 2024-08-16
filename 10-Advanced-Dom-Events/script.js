"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
// All the buttons that creates the modal effect
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
// "Learn more" Button
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
// Variables for the section 2 functionality, operations content
const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Add the openModal function to the UI elements
btnsOpenModal.forEach(el => el.addEventListener("click", openModal));

// Add the closeModal function to the UI elements
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Listen for the "Escape" key to close the modal
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/*
* Scroll to Section 1 effect from the "Learn more" button to features section.
* using getBoundingClientRect() then using scrollIntoView.

scrollTo takes the coords in X in this case both are 0. The left of s1 and the scrollX of the window.
But s1 top is related to the viewport and scrollY is related to the window.
So the top position of the section in that moment and the scroll that I've done adding together.
*/

btnScrollTo.addEventListener("click", function (e) {
  // const s1coords = section1.getBoundingClientRect();

  // scrollTo(s1coords.left + scrollX, s1coords.top + scrollY);

  // window.scrollTo({
  //   left: s1coords.left + scrollX,
  //   top: s1coords.top + scrollY,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

/*
* Page navigation without delegation event

document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});
 */

/*
* Changing the color of the h1 element

const h1El = document.querySelector("h1");

const h1BackgroundColor = getComputedStyle(h1El).backgroundColor;

h1El.addEventListener("mouseover", function (e) {
  this.style.setProperty("background-color", "orangered");
});

h1El.addEventListener("mouseleave", function (e) {
  this.style.setProperty("background-color", h1BackgroundColor);
});
*/

/*
* This structure here is important to remove the event listeners.

const showAlert = () => {
  alert("mouseenter");
  h1.removeEventListener("mouseenter", showAlert);
};

h1.addEventListener("mouseenter", showAlert);
*/

/*
* Event propagation demo

 * this => The element where the event was attached.
 * e.target => The element who really triggers the eventListener
 * e.currentTarget => same as this
 
const createRgbInts = () => {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return [randomInt(0, 255), randomInt(0, 255), randomInt(0, 255)];
};

const getRandomColor = () => {
  const [a, b, c] = createRgbInts();
  return `rgb(${a}, ${b}, ${c})`;
};

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.setProperty("background-color", `${getRandomColor()}`);
  console.log("LINK", e.target, e.currentTarget);
  e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.setProperty("background-color", `${getRandomColor()}`);
  console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.setProperty("background-color", `${getRandomColor()}`);
  console.log("NAV", e.target, e.currentTarget);
});

 */

/* Event delegation
1. Add event listener to common parent element
2. Determine what element originated the event

Page navigation function from nav links to respective section.
*/

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  const rootReference = "#";
  if (
    e.target.classList.contains("nav__link") &&
    e.target.getAttribute("href") !== rootReference
  ) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

tabContainer.addEventListener("click", function (e) {
  const tabClicked = e.target.closest(".operations__tab");
  // Guard clause
  if (!tabClicked) return;

  // Removing all the active classes
  tabs.forEach(t => t.classList.remove("operations__tab--active"));
  tabsContent.forEach(contentArea =>
    contentArea.classList.remove("operations__content--active")
  );

  tabClicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${tabClicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
