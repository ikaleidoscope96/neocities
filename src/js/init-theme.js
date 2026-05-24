(() => {
  const prefersDarkmode = window.matchMedia("(prefers-color-scheme: dark)");
  const saved = localStorage.getItem("theme") ?? "system";
  const data = document.documentElement.dataset;

  if (saved === "system") {
  data.theme = prefersDarkmode.matches ? "dark" : "light";
  } else {
  data.theme = saved;
  }
})();
