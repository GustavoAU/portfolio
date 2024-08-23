document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementsByTagName("video")[0];
  video.muted = true;
  video.play();

  handleHeader();
});

window.addEventListener("scroll", () => {
  handleHeader();
});

const handleHeader = () => {
  console.log("Gustavo");
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
