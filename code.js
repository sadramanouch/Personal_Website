const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');

// Function to stop the currently playing audio
function stopAudio(audio) {
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }
}

// Play audio 1
document.getElementById('playAudio1Button').addEventListener('click', function () {
    stopAudio(audio2); // Stop audio 2
    audio1.play(); // Play audio 1
});

// Play audio 2
document.getElementById('playAudio2Button').addEventListener('click', function () {
    stopAudio(audio1); // Stop audio 1
    audio2.play(); // Play audio 2
});