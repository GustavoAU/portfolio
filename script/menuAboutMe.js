const triggerMenuAboutMe = document.querySelectorAll(".menu-about-me-trigger");
const menuAboutMe = document.getElementById("menu-about-me");

triggerMenuAboutMe.forEach((triggerMenuAboutMe) => {
  triggerMenuAboutMe.addEventListener("click", () => {
    menuAboutMe.classList.toggle("hidden");
    overlayAboutMe.classList.remove("hidden");
    body.classList.add("overflow-hidden");
  });
});
