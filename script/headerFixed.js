window.addEventListener("scroll", () => {
  handleScroll();
});

window.addEventListener("resize", () => {
  handleMenuNavSize();
});

const handleScroll = () => {
  const scrollPosition = window.scrollY;

  if (isScrollingTop() && scrollPosition > 300) {
    showHeaderFixed();
  } else {
    hideHeaderFixed();
  }
};

let previousScrollPosition = 0;

const isScrollingTop = () => {
  let goingUp = false;

  let scrollPosition = window.scrollY;

  if (previousScrollPosition > scrollPosition) {
    goingUp = true;
  }

  previousScrollPosition = scrollPosition;

  return goingUp;
};

const showHeaderFixed = () => {
  const header = document.getElementById("header-fixed");
  header.classList.remove("-translate-y-[200px]");
  header.classList.add("translate-y-0");
};

const hideHeaderFixed = () => {
  const header = document.getElementById("header-fixed");
  header.classList.remove("translate-y-0");
  header.classList.add("-translate-y-[200px]");
};

const handleMenuNavSize = () => {
  const menuNavigation = document.getElementById("menu-navigation");
  const widthPosition = window.innerWidth;

  if (widthPosition > 380) {
    menuNavigation.classList.remove("left-0", "mx-auto");
  } else {
    menuNavigation.classList.add("left-0", "mx-auto");
  }
};

handleMenuNavSize();
