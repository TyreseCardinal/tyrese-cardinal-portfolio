const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Remember user's theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "Light Mode" : "Dark Mode";
}

// Toggle between light and dark themes
themeToggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  themeToggle.textContent = nextTheme === "dark" ? "Light Mode" : "Dark Mode";
});
