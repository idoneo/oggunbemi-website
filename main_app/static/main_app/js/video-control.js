document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.querySelector('iframe');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function() {
        // This assumes the video is hosted on a platform that supports postMessage API
        // You might need to adjust this based on where your video is hosted
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        playButton.style.display = 'none';
    });
});
