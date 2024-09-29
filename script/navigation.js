// function scrollPageTo(to, duration = 500) {
//   //t = current time
//   //b = start value
//   //c = change in value
//   //d = duration
//   const easeInOutQuad = function (t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   };

//   return new Promise((resolve, reject) => {
//     const element = document.scrollingElement;

//     if (typeof to === "string") {
//       to = document.querySelector(to) || reject();
//     }
//     if (typeof to !== "number") {
//       to = to.getBoundingClientRect().top + element.scrollTop;
//     }

//     let start = element.scrollTop,
//       change = to - start,
//       currentTime = 0,
//       increment = 20;

//     const animateScroll = function () {
//       currentTime += increment;
//       let val = easeInOutQuad(currentTime, start, change, duration);
//       element.scrollTop = val;
//       if (currentTime < duration) {
//         setTimeout(animateScroll, increment);
//       } else {
//         resolve();
//       }
//     };
//     animateScroll();
//   });
// }
// const triggerProjectLinks = document.querySelectorAll(".project-link");

// triggerProjectLinks.forEach((triggerProjectLink) => {
//   triggerProjectLink.addEventListener("click", (event) => {
//     event.preventDefault();
//     window.scrollPageTo("#projects", 2000);
//   });
// });

// const triggerServicesLinks = document.querySelectorAll(".services-link");
// triggerServicesLinks.forEach((triggerServiceLink) => {
//   triggerServiceLink.addEventListener("click", (event) => {
//     event.preventDefault();
//     window.scrollPageTo("#services-pricing", 2000);
//   });
// });

function scrollPageTo(to, duration = 500) {
  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  const easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return new Promise((resolve, reject) => {
    if (typeof document === "undefined") {
      // If document is undefined, reject the Promise for Node.js environment
      reject("Document object not available.");
      return;
    }

    const element = document.scrollingElement;

    if (typeof to === "string") {
      to = document.querySelector(to) || reject();
    }
    if (typeof to !== "number") {
      to = to.getBoundingClientRect().top + element.scrollTop;
    }

    let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    const animateScroll = function () {
      currentTime += increment;
      let val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      } else {
        resolve();
      }
    };
    animateScroll();
  });
}

// Only execute browser-specific code if the document object is available
if (typeof document !== "undefined") {
  const triggerProjectLinks = document.querySelectorAll(".project-link");

  triggerProjectLinks.forEach((triggerProjectLink) => {
    triggerProjectLink.addEventListener("click", (event) => {
      event.preventDefault();
      scrollPageTo("#projects", 2000);
    });
  });

  const triggerServicesLinks = document.querySelectorAll(".services-link");
  triggerServicesLinks.forEach((triggerServiceLink) => {
    triggerServiceLink.addEventListener("click", (event) => {
      event.preventDefault();
      scrollPageTo("#services-pricing", 2000);
    });
  });
}
