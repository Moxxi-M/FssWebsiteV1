const navList = document.getElementById("navList");

// Function to set the color mode preference in local storage
function setColorModePreference(mode) {
  localStorage.setItem("color-mode", mode);
}

// Function to get the color mode preference from local storage
function getColorModePreference() {
  return localStorage.getItem("color-mode");
}

// Function to set the initial color mode based on the user's preference or system settings
function setInitialColorMode() {
  const savedColorMode = getColorModePreference();
  if (savedColorMode) {
    document.body.classList.toggle("dark-mode", savedColorMode === "dark");
  } else {
    // If no preference is saved, check the user's system preference
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.body.classList.toggle("dark-mode", prefersDarkMode);
    setColorModePreference(prefersDarkMode ? "dark" : "light");
  }
}

function setDarkmodeBtn() {
  const savedColorMode = getColorModePreference();
  if (savedColorMode === "dark") {
    // select the div and add the darkmode btn class
  } else {
    // opposite
  }
}

// Call the function to set the initial color mode when the page loads
setInitialColorMode();

// Get the modeSwitch and dynamicText elements from the DOM
const modeSwitch = document.getElementById("modeSwitch");
const dynamicText = document.getElementById("dynamicText");

// Add an event listener to the modeSwitch to toggle dark mode
modeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  updateDynamicText();
  const currentColorMode = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  setColorModePreference(currentColorMode);
});

// Function to toggle the navigation menu visibility
function toggleNav() {
  navList.style.display = navList.style.display === "none" ? "flex" : "none";
}

// Function to toggle dark mode manually (for a separate dark mode button)
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const darkModeBtn = document.getElementById("darkModeBtn");
  darkModeBtn.innerText = body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
}

// Function to animate the chat button with a chat bubble
function animateChat() {
  const chatButton = document.querySelector(".chat-button");
  const chatBubble = document.createElement("div");
  chatBubble.classList.add("chat-bubble");
  chatButton.appendChild(chatBubble);
  setTimeout(() => {
    chatButton.removeChild(chatBubble);
  }, 800);
}
