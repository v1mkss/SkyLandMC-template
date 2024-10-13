document.addEventListener("DOMContentLoaded", function () {
  const copyIPButton = document.getElementById("copyIP");
  const header = document.querySelector("header");
  const navUl = document.querySelector("nav ul");

  copyIPButton.addEventListener("click", function (e) {
    e.preventDefault();
    const serverIP = "play.skyland.com";
    navigator.clipboard.writeText(serverIP).then(
      function () {
        alert("IP серверу скопійовано: " + serverIP);
      },
      function (err) {
        console.error("Помилка копіювання: ", err);
      },
    );
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const animatedElements = document.querySelectorAll(".feature-item");
  animatedElements.forEach((el) => observer.observe(el));

  header.addEventListener("click", function () {
    navUl.classList.toggle("show");
  });

  navUl.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navUl.classList.remove("show");
    }
  });

  window.addEventListener("scroll", function () {
    if (navUl.classList.contains("show")) {
      navUl.classList.remove("show");
    }
  });

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (scrollPosition >= sectionTop) {
        section.classList.add("active");
      }
    });
  });
});
