const menuNavigation = document.getElementById("menu-navigation");
const overlayNavigation = document.getElementById("overlay-navigation");
const body = document.body;
const menuContact = document.getElementById("menu-contact");
const overlayContact = document.getElementById("overlay-contact");
const triggerMenuContact = document.querySelectorAll(".menu-contact-trigger");
const overlayMenus = document.querySelectorAll(".overlay-menus");
const hamburgerIcons = document.querySelectorAll(".hamburger");
const closeMenuIcons = document.querySelectorAll(".close-menus");
const triggerProjects = document.querySelectorAll(".projects-nav-section");
const headerFixed = document.getElementById("header-fixed");
const projectsSectionTitle = document.getElementById("projects-section-title");

const removeNavClasses = (menuNavigation) => {
  menuNavigation.classList.remove(
    "opacity-100",
    "transform",
    "-translate-x-0",
    "right-6"
  );
};

triggerProjects.forEach((triggerProject) => {
  triggerProject.addEventListener("click", () => {
    menuNavigation.classList.add("opacity-0", "translate-x-full");
    removeNavClasses(menuNavigation);
    overlayNavigation.classList.add("hidden");
    body.classList.remove("overflow-hidden");
    headerFixed.classList.remove("hidden");
  });
});

triggerMenuContact.forEach((triggerMenuContact) => {
  triggerMenuContact.addEventListener("click", (event) => {
    event.stopPropagation();
    menuNavigation.classList.add("opacity-0", "translate-x-full");
    removeNavClasses(menuNavigation);
    overlayNavigation.classList.add("hidden");
    menuContact.classList.toggle("hidden");
    overlayContact.classList.toggle("hidden");
    body.classList.add("overflow-hidden");
    headerFixed.classList.add("hidden");
  });
});

hamburgerIcons.forEach((hamburgerIcon) => {
  hamburgerIcon.addEventListener("click", () => {
    menuNavigation.classList.remove("opacity-0", "translate-x-full");
    menuNavigation.classList.add("opacity-100", "transform", "-translate-x-0");
    headerFixed.classList.add("hidden");
    handleMenuNavClass();
    overlayNavigation.classList.remove("hidden");
    body.classList.add("overflow-hidden");
  });
});

closeMenuIcons.forEach((closeMenuIcon) => {
  closeMenuIcon.addEventListener("click", () => {
    menuContact.classList.add("hidden");
    overlayContact.classList.add("hidden");
    overlayNavigation.classList.add("hidden");
    overlayServices.classList.add("hidden");
    menuNavigation.classList.add("opacity-0", "translate-x-full", "right-0");
    removeNavClasses(menuNavigation);

    body.classList.remove("overflow-hidden");
    headerFixed.classList.remove("hidden");
    servicesMenuUxDesign.classList.add("hidden");
    servicesMenuWebsite.classList.add("hidden");
    servicesMenuFrontend.classList.add("hidden");
    servicesMenuUxAudit.classList.add("hidden");
  });
});

overlayMenus.forEach((overlayMenu) => {
  overlayMenu.addEventListener("click", () => {
    menuContact.classList.add("hidden");
    overlayContact.classList.add("hidden");
    overlayNavigation.classList.add("hidden");
    overlayServices.classList.add("hidden");
    body.classList.remove("overflow-hidden");
    menuNavigation.classList.add("opacity-0", "translate-x-full");
    removeNavClasses(menuNavigation);
    servicesMenuUxDesign.classList.add("hidden");
    servicesMenuWebsite.classList.add("hidden");
    servicesMenuFrontend.classList.add("hidden");
    servicesMenuUxAudit.classList.add("hidden");
    headerFixed.classList.remove("hidden");
  });
});

const handleMenuNavClass = () => {
  const menuNavigation = document.getElementById("menu-navigation");
  const widthPosition = window.innerWidth;

  if (widthPosition > 380) {
    menuNavigation.classList.add("right-6");
  } else {
    menuNavigation.classList.remove("right-6");
  }
};
