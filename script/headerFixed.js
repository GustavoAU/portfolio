document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementsByTagName("video")[0];
  video.muted = true;
  video.play();

  handleHeader();
});

window.addEventListener("scroll", () => {
  handleHeader();
});

window.addEventListener("resize", () => {
  handleMenuNavSize();
});

const handleHeader = () => {
  const header = document.getElementById("header-fixed");
  const scrollPosition = window.scrollY;
  if (scrollPosition > 300) {
    header.classList.remove("opacity-0", "-translate-y-full", "top-0");
    header.classList.add(
      "opacity-100",
      "transform",
      "translate-y-0",
      "transition",
      "duration-700",
      "ease-in-out"
    );
  } else {
    header.classList.remove("opacity-100", "translate-y-0");
    header.classList.add(
      "opacity-0",
      "-translate-y-full",
      "transition",
      "duration-700",
      "ease-in-out",
      "top-0"
    );
  }
};

const handleMenuNavSize = () => {
  const menuNavigation = document.getElementById("menu-navigation");
  const widthPosition = window.innerWidth;

  if (widthPosition > 380) {
    menuNavigation.classList.remove("left-0", "mx-auto");
  } else {
    menuNavigation.classList.add("left-0", "mx-auto");
  }
};

handleMenuNavSize();
