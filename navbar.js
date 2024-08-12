document.addEventListener("DOMContentLoaded", () => {
  handleHeader();
  window.addEventListener("scroll", () => {
    handleHeader();
  });
});

const handleHeader = () => {
  console.log("Gustavo");
  const header = document.querySelector(".Header__fixed");
  const scrollPosition = window.scrollY;
  if (scrollPosition > 300) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }
};
