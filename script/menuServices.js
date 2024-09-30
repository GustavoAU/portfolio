const servicesMenuUxDesign = document.getElementsByClassName(
  "Services__menu-ux-design"
)[0];
const servicesMenuWebsite = document.getElementsByClassName(
  "Services__menu-website"
)[0];
const servicesMenuFrontend = document.getElementsByClassName(
  "Services__menu-front-end"
)[0];
const servicesMenuUxAudit = document.getElementsByClassName(
  "Services__menu-ux-audit"
)[0];

const overlayServices = document.getElementById("overlay-services");

const servicesCards = document.querySelectorAll(".trigger-menu-services");
const servicesMenus = {
  uxDesign: document.getElementsByClassName("Services__menu-ux-design")[0],
  website: document.getElementsByClassName("Services__menu-website")[0],
  frontend: document.getElementsByClassName("Services__menu-front-end")[0],
  uxAudit: document.getElementsByClassName("Services__menu-ux-audit")[0],
};

const hideAllMenus = () => {
  Object.values(servicesMenus).forEach((menu) => menu.classList.add("hidden"));
};

const showMenu = (menuType) => {
  hideAllMenus();
  servicesMenus[menuType].classList.remove("hidden");
  overlayServices.classList.remove("hidden");
  body.classList.add("overflow-hidden");
  headerFixed.classList.add("hidden");
};

servicesCards.forEach((card) => {
  card.addEventListener("click", () => {
    const cardId = card.id;
    switch (cardId) {
      case "services-card-ux-design":
        showMenu("uxDesign");
        break;
      case "services-card-website":
        showMenu("website");
        break;
      case "services-card-front-end":
        showMenu("frontend");
        break;
      case "services-card-ux-audit":
        showMenu("uxAudit");
        break;
      default:
        hideAllMenus();
    }
  });
});
