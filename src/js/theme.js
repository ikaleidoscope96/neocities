const select = document.querySelector("#theme-select");
const prefersDarkmode = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(option) {
  const root = document.documentElement;
  if (option === "system") {
    root.dataset.theme = prefersDarkmode.matches ? "dark" : "light";
  } else {
    root.dataset.theme = option;
  }

  localStorage.setItem("theme", option);
}

const saved = localStorage.getItem("theme") ?? "system";
select.value = saved;
applyTheme(saved);

select.addEventListener("change", (e) => {
  applyTheme(e.target.value);
});

prefersDarkmode.addEventListener("change", () => {
  if ((localStorage.getItem("theme") ?? "system") === "system") {
    applyTheme("system");
  }
});
