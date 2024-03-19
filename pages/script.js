document.addEventListener('DOMContentLoaded', function() {
    var toggleMenu = document.getElementById('toggleMenu');
    var sideMenu = document.getElementById('sideMenu');

    toggleMenu.addEventListener('click', function() {
        sideMenu.classList.toggle('active');
        toggleMenu.classList.toggle('expanded');
    });
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
