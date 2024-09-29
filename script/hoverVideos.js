// const { JSDOM } = require("jsdom");

// // Create a fake DOM environment using JSDOM
// const dom = new JSDOM(`
//   <!DOCTYPE html>
//   <html>
//     <body>
//       <div id="header-fixed"></div>
//       <div id="menu-navigation"></div>
//       <div id="overlay-navigation"></div>
//       <div id="menu-contact"></div>
//       <div id="overlay-contact"></div>
//       <div class="menu-contact-trigger"></div>
//       <div class="overlay-menus"></div>
//       <div class="hamburger"></div>
//       <div class="close-menus"></div>
//       <div class="projects-nav-section"></div>
//       <video class="trigger-video"></video>
//     </body>
//   </html>
// `);

// if (!global.window) {
//   global.window = dom.window;
// }
// if (!global.document) {
//   global.document = dom.window.document;
// }

const triggerVideos = document.querySelectorAll(".trigger-video");

triggerVideos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    // Assuming video is defined correctly
    video.play();
  });

  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
