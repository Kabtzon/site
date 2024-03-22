document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('#menu > ul > li');

    // Agregar evento de clic para mostrar submenú
    menuItems.forEach(function(item) {
        var submenu = item.querySelector('.submenu');
        if (submenu) {
            item.addEventListener('click', function(event) {
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                event.stopPropagation(); // Evitar que se propague el clic al elemento padre
            });
        }
    });

    // Ocultar submenú si se hace clic fuera del menú
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#menu')) {
            var submenus = document.querySelectorAll('.submenu');
            submenus.forEach(function(submenu) {
                submenu.style.display = 'none';
            });
        }
    });
});
