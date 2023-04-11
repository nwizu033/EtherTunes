const text = "Find the right music collections to buy within the platform.";
const typingText = document.querySelector(".typing-text");
let index = 0;

function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}

function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}

type();

const myButton = document.querySelector(".my-button");

setTimeout(() => {
  myButton.style.display = "";
}, 4000);

function toggleDropdown() {
  var dropdownMenu = document.getElementById("dropdown-menu");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}

// Function to close the dropdown when clicking outside of it
window.onclick = function (event) {
  var dropdownMenu = document.getElementById("dropdown-menu");
  if (!event.target.matches(".toggle-btn")) {
    dropdownMenu.style.display = "none";
  }
};
