"use strict";

///////////////////////////////////////
// Modal window
const nav = document.querySelector(".nav");
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

/*
Making the tab functionality for the operations content

Section 2 functionality.
It changes the content while the user tab over the different options.
*/

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

/*
* DOM traversing

const h1 = document.querySelector("h1");

console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)";

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// nextSibling considers even the text nodes like the Enter or new line code
// The first nextSibling based on our code is a break line textNode
// Then the h4 element
console.log(h1.nextSibling.nextSibling);
console.log(h1.previousSibling.previousSibling); // still null

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(el => {
  // All the elements that aren't the h1 will be small
  if (el !== h1) el.style.transform = "scale(0.5)";
});

*/

// nav bar fade animation
const fadeNavLinks = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    // Select all the brothers of the link target
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    // also the logo
    // const logo = link.closest(".nav").querySelector("img");

    // Set all links to opacity 0.5 except the target
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    // Set the logo also opacity 0.5
    // logo.style.opacity = 0.5;
  }
};

nav.addEventListener("mouseover", fadeNavLinks.bind(0.5));
nav.addEventListener("mouseout", fadeNavLinks.bind(1));
