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

// function type() {
//   if (index < text.length) {
//     typingText.textContent += text.charAt(index);
//     index++;
//     setTimeout(type, 50);
//   }
// }

type();

const myButton = document.querySelector(".discover");

setTimeout(() => {
  myButton.style.display = "";
}, 3500);

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
}; // Get an array of audio elements and player controls
var audioElements = document.getElementsByClassName("my-audio");
var playBtns = document.getElementsByClassName("play-btn");
var pauseBtns = document.getElementsByClassName("pause-btn");

var currentAudio = null;
var currentPlayBtn = null;
var currentPauseBtn = null;

// Loop through each audio element and add event listeners to its player controls
for (var i = 0; i < audioElements.length; i++) {
  (function () {
    var audio = audioElements[i];
    var playBtn = playBtns[i];
    var pauseBtn = pauseBtns[i];

    playBtn.addEventListener("click", function () {
      if (currentAudio !== null && currentAudio !== audio) {
        currentAudio.pause();
        currentPlayBtn.style.display = "inline-block";
        currentPauseBtn.style.display = "none";
      }

      currentAudio = audio;
      currentPlayBtn = playBtn;
      currentPauseBtn = pauseBtn;

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
