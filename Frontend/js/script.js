const text = "Audio/Video Streaming, Music NFT Marketplace, SocialFi.";
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
}, 3000);

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

// Function to close the dropdown when clicking outside of it
window.onclick = function (event) {
  var dropdownMenu = document.getElementById("dropdown-menu");
  if (!event.target.matches(".toggle-btn")) {
    dropdownMenu.style.display = "none";
  }
};
// Get an array of audio elements and player controls
var audioElements = document.getElementsByClassName("my-audio");
var playBtns = document.getElementsByClassName("play-btn");
var pauseBtns = document.getElementsByClassName("pause-btn");

// Loop through each audio element and add event listeners to its player controls
for (var i = 0; i < audioElements.length; i++) {
  (function () {
    var audio = audioElements[i];
    var playBtn = playBtns[i];
    var pauseBtn = pauseBtns[i];

    playBtn.addEventListener("click", function () {
      // Pause all other audio elements before playing the current one
      for (var j = 0; j < audioElements.length; j++) {
        if (j !== i) {
          var otherAudio = audioElements[j];
          var otherPlayBtn = playBtns[j];
          var otherPauseBtn = pauseBtns[j];
          if (!otherAudio.paused) {
            otherAudio.pause();
            otherPlayBtn.style.display = "inline-block"; // Show the play button
            otherPauseBtn.style.display = "none"; // Hide the pause button
          }
        }
      }
      audio.play();
      playBtn.style.display = "none"; // Hide the play button
      pauseBtn.style.display = "inline-block"; // Show the pause button
    });

    pauseBtn.addEventListener("click", function () {
      audio.pause();
      pauseBtn.style.display = "none"; // Hide the pause button
      playBtn.style.display = "inline-block"; // Show the play button
    });

    audio.addEventListener("ended", function () {
      pauseBtn.style.display = "none"; // Hide the pause button
      playBtn.style.display = "inline-block"; // Show the play button
    });
  })();
}

