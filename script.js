document.addEventListener('DOMContentLoaded', function() {
    var toggleMenu = document.getElementById('toggleMenu');
    var sideMenu = document.getElementById('sideMenu');

    toggleMenu.addEventListener('click', function() {
        sideMenu.classList.toggle('active');
        toggleMenu.classList.toggle('expanded');
    });
});
// Obtener todos los videos
const videos = document.querySelectorAll('.video video');

// Agregar evento click a cada video para pausar/reproducir
videos.forEach(video => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
