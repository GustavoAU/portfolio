document.addEventListener("DOMContentLoaded", () => {
  console.log("domLoaded");
  const video = document.getElementsByTagName("video")[0];
  video.muted = true;
  video.play();
});
