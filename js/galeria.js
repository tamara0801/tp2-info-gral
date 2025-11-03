const carrusel = document.querySelector('#carruselBorromini');
const descripciones = document.querySelectorAll('.slide-descripcion');

if (carrusel && descripciones.length > 0) {
    
    carrusel.addEventListener('slide.bs.carousel', function (event) {

        descripciones.forEach(function(desc) {
            desc.classList.add('d-none');
        });
        
        const descripcionActiva = document.querySelector('#slide-desc-' + event.to);
        
        if (descripcionActiva) {
            descripcionActiva.classList.remove('d-none');
        }
    });
}