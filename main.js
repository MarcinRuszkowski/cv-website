// ------HIGHLIGHT ACTIVE NAVBAR's HEADERS--------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });
  // ------STICKY NAVBAR--------
  const header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};
// ------SCROLL REVEAL--------
ScrollReveal({
//   reset: true,
  distance: "80px",
  duration: 1700,
  delay: 500,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".about-text, .skills-container, .projects-box, .contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content", {
  origin: "right",
});
