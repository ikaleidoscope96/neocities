const prefersDarkmode = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(option) {
  const data = document.documentElement.dataset;
  if (option === "system") {
    data.theme = prefersDarkmode.matches ? "dark" : "light";
  } else {
    data.theme = option;
  }

  localStorage.setItem("theme", data.theme);
}

document.addEventListener("DOMContentLoaded", ()=> {
  const select = document.querySelector("#theme-select");
  if (!select) return;

  select.value = localStorage.getItem("theme") ?? "system";

  select.addEventListener("change", (e) => {
    applyTheme(e.target.value);
  });

  prefersDarkmode.addEventListener("change", () => {
    if ((localStorage.getItem("theme") ?? "system") === "system") {
      applyTheme("system");
    }
  });
});
