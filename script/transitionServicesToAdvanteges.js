// const transitionServicesToAdvanteges = document.getElementById(
//   "services-overF-advanteges"
// );
// const servicesTitle = document.getElementById("services-title");
// const serviceOpacity = document.getElementById("services-opacity");

// const triggerTransition = (entries, observer) => {
//   // console.log(entries);
//   // console.log(observer);
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log("estamos lograndolo");

//       serviceOpacity.classList.remove("opacity-100");
//       serviceOpacity.classList.add("opacity-0");

//       servicesTitle.classList.remove("opacity-0");
//       servicesTitle.classList.add("opacity-100");
//     } else {
//       serviceOpacity.classList.remove("opacity-0");
//       serviceOpacity.classList.add("opacity-100");

//       servicesTitle.classList.remove("opacity-100");
//       servicesTitle.classList.add("opacity-0");
//     }
//   });
// };

// const observer = new IntersectionObserver(triggerTransition, {
//   root: null,
//   rootMargin: "0px",
//   threshold: 1,
// });

// observer.observe(transitionServicesToAdvanteges);
