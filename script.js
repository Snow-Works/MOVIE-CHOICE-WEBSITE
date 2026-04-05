const toggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// Check for saved user preference
const savedTheme = localStorage.getItem("theme") || "light";
htmlElement.setAttribute("data-theme", savedTheme);
updateButtonText(savedTheme);

toggleBtn.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme); // Remember choice
  updateButtonText(newTheme);
});

function updateButtonText(theme) {
  toggleBtn.innerHTML = theme === "light" ? " Dark Mode" : " Light Mode";
}
