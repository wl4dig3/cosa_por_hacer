import opciones from './Opciones'

opcioness.addEventListener('change', function(){
    switch (opcioness.value){
        case "Musica": resultados.innerHTML = opciones.Musica();
        break;
        case "Cine": resultados.innerHTML = opciones.Cine();
        break;
        case "Comida": resultados.innerHTML = opciones.Comida();
        break;
        case "Nada":
            resultados.innerHTML = resultado.noSeleccionado();
            break;

            
    }
});