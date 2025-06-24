// script.js

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

// Botón para ir abajo
const btnAbajo = document.createElement('button');
btnAbajo.textContent = "↓ Ir abajo";
btnAbajo.style.position = 'fixed';
btnAbajo.style.bottom = '60px'; // un poco más arriba que el de "volver arriba"
btnAbajo.style.right = '20px';
btnAbajo.style.display = 'none';
btnAbajo.style.padding = '10px';
btnAbajo.style.backgroundColor = '#333';
btnAbajo.style.color = '#fff';
btnAbajo.style.border = 'none';
btnAbajo.style.borderRadius = '5px';
btnAbajo.style.cursor = 'pointer';
document.body.appendChild(btnAbajo);

// Mostrar el botón solo si no estamos ya cerca del fondo
window.addEventListener('scroll', () => {
    const alturaTotal = document.documentElement.scrollHeight;
    const alturaVisible = window.innerHeight;
    const desplazamientoActual = window.scrollY;

    // Mostrar si no está casi al final
    btnAbajo.style.display = (desplazamientoActual + alturaVisible < alturaTotal - 100) ? 'block' : 'none';
});

// Evento click: ir al final de la página
btnAbajo.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});


// Lista de colores posibles
const colores = ['#ADD8E6', '#FFC0CB', '#FFD700', '#98FB98', '#E6E6FA', '#F08080', '#D3D3D3', '#AFEEEE'];

const botonFondo = document.getElementById('cambiar-fondo');

botonFondo.addEventListener('click', () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});
