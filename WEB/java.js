// script.js

// Mostrar alerta de bienvenida
window.addEventListener('load', () => {
    alert('¡Bienvenido a la página!');
});

// Scroll suave al hacer clic en los enlaces del nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Botón para volver arriba
const btnArriba = document.createElement('button');
btnArriba.textContent = "↑ Volver arriba";
btnArriba.style.position = 'fixed';
btnArriba.style.bottom = '20px';
btnArriba.style.right = '20px';
btnArriba.style.display = 'none';
btnArriba.style.padding = '10px';
btnArriba.style.backgroundColor = '#333';
btnArriba.style.color = '#fff';
btnArriba.style.border = 'none';
btnArriba.style.borderRadius = '5px';
btnArriba.style.cursor = 'pointer';
document.body.appendChild(btnArriba);

window.addEventListener('scroll', () => {
    btnArriba.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btnArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Lista de colores posibles
const colores = ['#ADD8E6', '#FFC0CB', '#FFD700', '#98FB98', '#E6E6FA', '#F08080', '#D3D3D3', '#AFEEEE'];

const botonFondo = document.getElementById('cambiar-fondo');

botonFondo.addEventListener('click', () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});
