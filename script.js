document.addEventListener('DOMContentLoaded', function() {
    var toggleMenu = document.getElementById('toggleMenu');
    var sideMenu = document.getElementById('sideMenu');

    toggleMenu.addEventListener('click', function() {
        sideMenu.classList.toggle('active');
        toggleMenu.classList.toggle('expanded');
    });
});
