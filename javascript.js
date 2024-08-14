let hamburger = document.getElementById("hamburger");
let menuNavigation = document.getElementById("Menu__navigation");
let overlayNavigation = document.getElementById("overlay-navigation");
let headerFixed = document.getElementById("Header__fixed");
let body = document.getElementById("body");
let menuContact = document.getElementById("Menu__contact");
let overlayContact = document.getElementById("overlay__contact");

document.getElementById("hamburger").addEventListener("click", () => {
  menuNavigation.classList.toggle("hidden");
  overlayNavigation.classList.toggle("hidden");
  body.classList.toggle("overflow");
  headerFixed.classList.add("hidden");
  
});

document.getElementById("Header__contact").addEventListener("click", () => {
  menuNavigation.classList.add("hidden");
  menuContact.classList.toggle("hidden");
  overlayNavigation.classList.add("hidden");
  overlayContact.classList.toggle("hidden");
  headerFixed.classList.add("hidden");
  body.classList.add("overflow");
});

document
  .getElementById("Header__contact-menu")
  .addEventListener("click", () => {
    menuNavigation.classList.add("hidden");
    menuContact.classList.toggle("hidden");
    overlayNavigation.classList.add("hidden");
    overlayContact.classList.toggle("hidden");
    headerFixed.classList.add("hidden");
    body.classList.add("overflow");
  });

document.getElementById("close-contact").addEventListener("click", () => {
  menuContact.classList.add("hidden");
  overlayContact.classList.add("hidden");
  body.classList.remove("overflow");
});

document.getElementById("overlay__contact").addEventListener("click", () => {
  menuContact.classList.add("hidden");
  overlayContact.classList.add("hidden");
  body.classList.remove("overflow");
});

document.getElementById("overlay-navigation").addEventListener("click", () => {
  menuNavigation.classList.add("hidden");
  overlayNavigation.classList.add("hidden");
  body.classList.remove("overflow");
});

document.getElementById("close-navigation").addEventListener("click", () => {
  overlayNavigation.classList.add("hidden");
  menuNavigation.classList.add("hidden");
  body.classList.remove("overflow");
});

document.getElementById("hamburger-fixed").addEventListener("click", () => {
  menuNavigation.classList.toggle("hidden");
  overlayNavigation.classList.toggle("hidden");
  body.classList.toggle("overflow");
  headerFixed.classList.add("hidden");
});

document
  .getElementById("Header__contact-fixed")
  .addEventListener("click", () => {
    menuNavigation.classList.add("hidden");
    menuContact.classList.remove("hidden");
    overlayNavigation.classList.add("hidden");
    overlayContact.classList.toggle("hidden");
    headerFixed.classList.add("hidden");
    body.classList.add("overflow");
  });

document
  .getElementById("Header__contact-bar-nav")
  .addEventListener("click", () => {
    menuNavigation.classList.add("hidden");
    menuContact.classList.toggle("hidden");
    overlayNavigation.classList.add("hidden");
    overlayContact.classList.toggle("hidden");
    headerFixed.classList.add("hidden");
    body.classList.add("overflow");
  });
