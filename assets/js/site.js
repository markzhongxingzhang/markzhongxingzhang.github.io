/* Site behaviour: theme toggle, scroll progress, reveal-on-scroll, back-to-top,
   and active-section highlighting in the navbar. Progressive enhancement only —
   the page is fully readable without it. */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---- Theme toggle ------------------------------------------------------ */
  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0d1017" : "#ffffff");
    var btn = document.querySelector(".af-theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  var toggle = document.querySelector(".af-theme-toggle");
  if (toggle) {
    applyTheme(currentTheme());
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked */ }
    });
  }

  /* ---- Scroll progress bar ---------------------------------------------- */
  var bar = document.createElement("div");
  bar.className = "af-progress";
  document.body.appendChild(bar);

  /* ---- Back to top ------------------------------------------------------- */
  var top = document.createElement("button");
  top.className = "af-top";
  top.type = "button";
  top.setAttribute("aria-label", "Back to top");
  top.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
  top.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.body.appendChild(top);

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      var y = window.pageYOffset || document.documentElement.scrollTop;
      bar.style.width = (scrollable > 0 ? (y / scrollable) * 100 : 0) + "%";
      top.classList.toggle("is-visible", y > 500);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Reveal sections on scroll ---------------------------------------- */
  var reveals = document.querySelectorAll(".af-reveal");
  if (!("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add("is-in"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.05 });
    Array.prototype.forEach.call(reveals, function (el) { revealObserver.observe(el); });
  }

  /* ---- Smooth in-page navigation + active link --------------------------- */
  var navLinks = Array.prototype.filter.call(
    document.querySelectorAll("#site-nav a[href*='#']"),
    function (a) { return a.hash && document.querySelector(a.hash); }
  );

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var target = document.querySelector(link.hash);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history.replaceState) history.replaceState(null, "", link.hash);
    });
  });

  var sections = navLinks
    .map(function (l) { return document.querySelector(l.hash); })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (l) {
          l.classList.toggle("is-active", l.hash === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-15% 0px -70% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }
})();
