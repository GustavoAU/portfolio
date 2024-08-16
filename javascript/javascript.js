let hamburger = document.getElementById("hamburger");
let menuNavigation = document.getElementById("menu-navigation");
let overlayNavigation = document.getElementById("overlay-navigation");
let headerFixed = document.getElementById("header-fixed");
let body = document.getElementById("body");
let menuContact = document.getElementById("menu-contact");
let overlayContact = document.getElementById("overlay-contact");

document.getElementById("hamburger").addEventListener("click", () => {
  menuNavigation.classList.toggle("hidden");
  overlayNavigation.classList.toggle("hidden");
  body.classList.add("overflow-hidden");
  headerFixed.classList.add("hidden");
});

document.getElementById("header-contact").addEventListener("click", () => {
  menuNavigation.classList.add("hidden");
  menuContact.classList.toggle("hidden");
  overlayNavigation.classList.add("hidden");
  overlayContact.classList.toggle("hidden");
  headerFixed.classList.add("hidden");
  body.classList.add("overflow-hidden");
});

document.getElementById("header-contact-menu").addEventListener("click", () => {
  menuNavigation.classList.add("hidden");
  menuContact.classList.toggle("hidden");
  overlayNavigation.classList.add("hidden");
  overlayContact.classList.toggle("hidden");
  headerFixed.classList.add("hidden");
  body.classList.add("overflow-hidden");
});

document.getElementById("close-contact").addEventListener("click", () => {
  menuContact.classList.add("hidden");
  overlayContact.classList.add("hidden");
  body.classList.remove("overflow-hidden");
});

document.getElementById("overlay-contact").addEventListener("click", () => {
  menuContact.classList.add("hidden");
  overlayContact.classList.add("hidden");
  body.classList.remove("overflow-hidden");
});

document.getElementById("overlay-navigation").addEventListener("click", () => {
  menuNavigation.classList.add("hidden");
  overlayNavigation.classList.add("hidden");
  body.classList.remove("overflow-hidden");
});

document.getElementById("close-navigation").addEventListener("click", () => {
  overlayNavigation.classList.add("hidden");
  menuNavigation.classList.add("hidden");
  body.classList.remove("overflow-hidden");
});

document.getElementById("hamburger-fixed").addEventListener("click", () => {
  menuNavigation.classList.toggle("hidden");
  overlayNavigation.classList.toggle("hidden");
  body.classList.add("overflow-hidden");
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
    body.classList.add("overflow-hidden");
  });

document
  .getElementById("Header__contact-bar-nav")
  .addEventListener("click", () => {
    menuNavigation.classList.add("hidden");
    menuContact.classList.toggle("hidden");
    overlayNavigation.classList.add("hidden");
    overlayContact.classList.toggle("hidden");
    headerFixed.classList.add("hidden");
    body.classList.add("overflow-hidden");
  });
