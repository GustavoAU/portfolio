const menuNavigation = document.getElementById("menu-navigation");
const overlayNavigation = document.getElementById("overlay-navigation");
const body = document.body;
const menuContact = document.getElementById("menu-contact");
const overlayContact = document.getElementById("overlay-contact");
const triggerMenuContact = document.querySelectorAll(".menu-contact-trigger");
const overlayMenus = document.querySelectorAll(".overlay-menus");
const hamburgerIcons = document.querySelectorAll(".hamburger");
const closeMenuIcons = document.querySelectorAll(".close-menus");

const removeFunction = (menuNavigation) => {
  menuNavigation.classList.remove(
    "opacity-100",
    "transform",
    "-translate-x-0",
    "right-6"
  );
};

triggerMenuContact.forEach((triggerMenuContact) => {
  triggerMenuContact.addEventListener("click", () => {
    menuNavigation.classList.add("opacity-0", "translate-x-full", "right-6");
    removeFunction(menuNavigation);
    overlayNavigation.classList.add("hidden");
    menuContact.classList.toggle("hidden");
    overlayNavigation.classList.add("hidden");
    overlayContact.classList.toggle("hidden");
    body.classList.add("overflow-hidden");
  });
});

hamburgerIcons.forEach((hamburgerIcon) => {
  hamburgerIcon.addEventListener("click", () => {
    menuNavigation.classList.remove("opacity-0", "translate-x-full");
    menuNavigation.classList.add(
      "opacity-100",
      "transform",
      "-translate-x-0",
      "right-6"
    );
    overlayNavigation.classList.remove("hidden");
    body.classList.add("overflow-hidden");
  });
});

closeMenuIcons.forEach((closeMenuIcon) => {
  closeMenuIcon.addEventListener("click", () => {
    menuContact.classList.add("hidden");
    overlayContact.classList.add("hidden");
    menuNavigation.classList.add("opacity-0", "translate-x-full");
    removeFunction(menuNavigation);
    overlayNavigation.classList.add("hidden");
    body.classList.remove("overflow-hidden");
  });
});

overlayMenus.forEach((overlayMenu) => {
  overlayMenu.addEventListener("click", () => {
    menuContact.classList.add("hidden");
    overlayContact.classList.add("hidden");
    body.classList.remove("overflow-hidden");
    menuNavigation.classList.add("opacity-0", "translate-x-full");
    removeFunction(menuNavigation);
    overlayNavigation.classList.add("hidden");
  });
});

// triggerMenuContact[0].addEventListener("click", () => {
//   menuNavigation.classList.add("opacity-0");
//   menuNavigation.classList.add("translate-x-full");
//   menuNavigation.classList.remove("opacity-100");
//   menuNavigation.classList.remove("transform");
//   menuNavigation.classList.remove("-translate-x-0");
//   menuNavigation.classList.remove("transition");
//   menuNavigation.classList.remove("duration-700");
//   menuNavigation.classList.remove("ease-in-out");
//   menuNavigation.classList.remove("right-6");
//   overlayNavigation.classList.add("hidden");
//   menuContact.classList.remove("hidden");
//   overlayNavigation.classList.add("hidden");
//   overlayContact.classList.toggle("hidden");
//   body.classList.add("overflow-hidden");
// });
