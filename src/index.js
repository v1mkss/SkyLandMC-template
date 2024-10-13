document.addEventListener("DOMContentLoaded", function () {
  const copyIPButton = document.getElementById("copyIP");

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
});
