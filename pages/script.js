document.addEventListener('DOMContentLoaded', function() {
    var toggleMenu = document.getElementById('toggleMenu');
    var sideMenu = document.getElementById('sideMenu');
    var submenus = document.querySelectorAll('.submenu');

    toggleMenu.addEventListener('click', function() {
        sideMenu.classList.toggle('active');
        toggleMenu.classList.toggle('expanded');
    });

    // Agregar evento de clic para mostrar/ocultar submenús
    submenus.forEach(function(submenu) {
        var submenuTitle = submenu.previousElementSibling;
        submenuTitle.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar que se siga el enlace al hacer clic en el título del submenú
            submenu.classList.toggle('show-submenu');
        });
    });

    // Agregar funcionalidad para cerrar el menú cuando se hace clic en un enlace

    // Verificar si estamos en la página del "Glosario" y mostrar el submenú automáticamente
    if (window.location.href.includes("glosario.html")) {
        subMenu.classList.add('show-submenu');
    }

    // Obtener todos los botones de preguntas frecuentes
    const btnsPregunta = document.querySelectorAll('.btn-pregunta');

    // Agregar evento click a cada botón para redireccionar
    btnsPregunta.forEach(btn => {
        btn.addEventListener('click', function() {
            const destino = this.getAttribute('data-destino');
            window.location.href = destino; // Redireccionar al archivo especificado
        });
    });
});
