document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('tropical-video');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    video.addEventListener('play', function() {
        playButton.innerHTML = '❚❚';  // Pause symbol
    });

    video.addEventListener('pause', function() {
        playButton.innerHTML = '▶';  // Play symbol
    });
});
