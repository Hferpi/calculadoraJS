const cantidad = document.getElementById('cantidad'); 
const botones = document.querySelectorAll("button[data-percent]");
const resultado = document.getElementById('total');


botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const porcentaje = parseFloat(boton.getAttribute('data-percent'));
        let dinero = parseFloat(document.getElementById('dinero').value);

        const total = dinero * porcentaje;

        cantidad.textContent = '$' + total.toFixed(2);

        const personas = parseFloat(document.getElementById('personas').value);
       

        const aDividir = total / personas;

        resultado.textContent = '$' + aDividir.toFixed(2);
    });
});
