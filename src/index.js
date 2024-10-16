document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;

  function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  const navLinks = document.querySelectorAll("nav a, .cta-button");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      smoothScroll(target, 1000);
    });
  });

  window.addEventListener("scroll", function () {
    if (window.innerWidth <= 768) {
      if (window.scrollY > lastScrollY) {
        header.classList.add("header--hidden");
      } else {
        header.classList.remove("header--hidden");
      }
      lastScrollY = window.scrollY;
    } else {
      header.classList.remove("header--hidden");
    }
  });

  const copyIPButton = document.getElementById("copyIP");
  if (copyIPButton) {
    copyIPButton.addEventListener("click", function (e) {
      e.preventDefault();
      const serverIP = "play.skyland.com";
      navigator.clipboard.writeText(serverIP).then(
        function () {
          alert("IP copied: " + serverIP);
        },
        function (err) {
          console.error("Failed to copy text: ", err);
        },
      );
    });
  }
});
