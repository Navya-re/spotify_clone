function toggleAudio(item) {
  const audioPlayer = item.querySelector('.audio-player');
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reset audio to the beginning
  }
}

// Function to add click event listener to play/stop buttons
function setupButtons() {
  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    const playStopButton = item.querySelector('.play-stop-btn');

    playStopButton.addEventListener('click', function () {
      toggleAudio(item);
    });
  });
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  setupButtons();
});