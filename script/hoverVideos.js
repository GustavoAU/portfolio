const triggerVideos = document.querySelectorAll(".trigger-video");

triggerVideos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });

  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
