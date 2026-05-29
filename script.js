
const btnSaludar = document.getElementById('btn-Saludar');

let mensajeMostrado = false;

console.log('btn-Saludar');


btnSaludar.addEventListener('click', function() {

    console.log('click!');

    if(!mensajeMostrado){
        const sectionContacto = document.getElementById('contacto');

    const mensajes = document.createElement('p');
    mensajes.textContent = 'Gracias por tu visita!!! ';
    mensajes.style.color = '#000000';
    mensajes.style.fontWeight = 'bold';

    sectionContacto.appendChild(mensajes);
    mensajeMostrado = true;
    btnSaludar.textContent = 'Mensaje enviado';
    btnSaludar.style.backgroundColor = '#bdc3c7';
    }

    

})

