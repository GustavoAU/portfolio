

const triggerVideos = document.querySelectorAll(".trigger-video");
const projectsVideos = document.getElementsByClassName("projects-videos");

triggerVideos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });

  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
