


const servicesCardsBg = document.querySelectorAll(".trigger-hover-cards");
servicesCardsBg.forEach((cardOut) => {
  cardOut.addEventListener("mouseover", () => {
    servicesCardsBg.forEach((cardIn) => {
      cardIn.classList.remove("--active");
    });
    cardOut.classList.add("--active");
  });
});
