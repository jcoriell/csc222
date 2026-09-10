document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector("nav#quarto-sidebar");
  if (sidebar && !sidebar.hasAttribute("aria-label")) {
    sidebar.setAttribute("aria-label", "Sidebar navigation");
  }

  const toc = document.querySelector("nav#TOC, nav#quarto-toc");
  if (toc && !toc.hasAttribute("aria-label")) {
    toc.setAttribute("aria-label", "Table of contents");
  }

  const navbar = document.querySelector("nav.navbar");
  if (navbar && !navbar.hasAttribute("aria-label")) {
    navbar.setAttribute("aria-label", "Top navigation");
  }
});