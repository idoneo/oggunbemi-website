document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('tropical-video');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playButton.textContent = 'Pause';
        } else {
            video.pause();
            playButton.textContent = 'Play';
        }
    });

    video.addEventListener('ended', function() {
        playButton.textContent = 'Play';
    });
});
