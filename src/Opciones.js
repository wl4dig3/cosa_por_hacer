const opciones = (() => {
    return {
        Cine: () => {
            return resultados.innerHTML = ` 
            <h5>Pocahontas<h5/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6_85wiWesY0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `
        },
        Musica: () => {
            return resultados.innerHTML = ` 
            <h5>Chicas Bond</h5>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LNy8r-ZgKgQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `
        },
        Comida: () => {
            return resultados.innerHTML = ` 
            <h5>Rissoto</h5>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cMBDj-2y5Nk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            `
        },

        noSeleccionado: () => {
            return "Hola, por favor seleccina algo, gracias... la gerencia"
        },
    }
})();
console.log(opciones);
// funcion detectora de evento




export default opciones