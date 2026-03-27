const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  const syncNavState = (isOpen) => {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.textContent = isOpen ? "Fermer" : "Menu";
    siteNav.classList.toggle("is-open", isOpen);
  };

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    syncNavState(!expanded);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => syncNavState(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      syncNavState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      syncNavState(false);
    }
  });
}

const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
