export const prefersDarkmode = window.matchMedia("(prefers-color-scheme: dark)");
export const data = document.documentElement.dataset;

export function applyTheme(option) {
  if (option === "system") {
    data.theme = prefersDarkmode.matches ? "dark" : "light";
  } else {
    data.theme = option;
  }

  localStorage.setItem("theme", data.theme);
}
