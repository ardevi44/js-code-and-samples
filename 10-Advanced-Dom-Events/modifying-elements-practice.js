// This script will keep here just for reference

// Creating and inserting elements

// This is not in the dom actually
const message = document.createElement("div");
console.log(Object.getPrototypeOf(message));
message.classList.add("cookie-message");
// console.log(message.classList.value);
message.innerHTML = `We use cookies for improve functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

const header = document.querySelector(".header");
header.append(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// Working styles in JavaScript
// This two bellow, will be inline styles in the html, because the style property
message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

console.log(message.style.height); // This doesn't work
// But this two does
console.log(message.style.backgroundColor);
// console.log(message.style.width);

// There is a way to get all the properties but is not capable to set cause getComputedStyle is read only
console.log(getComputedStyle(message).backgroundColor); // Read only
// console.log((getComputedStyle(message).height = "34px")); // Error

// Another way to set a property
// message.style.setProperty("height", "40px");

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

console.log(logo.designer); // undefined cause not standard property
// This works for not standard attributes
console.log(logo.getAttribute("designer")); // "ardevi"
logo.setAttribute("company", "Bankist");

console.log(logo.src); // Absolute url
console.log(logo.getAttribute("src"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Checking classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");
