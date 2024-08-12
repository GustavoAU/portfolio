document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".Header__fixed");
  const hero = document.querySelector(".hero");

  const heroHeight = hero.offsetHeight;

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > heroHeight) {
      header.classList.remove("hidden");
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      header.classList.add("hidden");
    }
  });
});
