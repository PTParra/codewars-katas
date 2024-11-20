const comprobarSiLlegas = (gasolina, gasolinaPorLitro, distancia) => {
    
    return distancia < (gasolina * gasolinaPorLitro);
}

const renderInDOM = (resultado) => {
    const resultadoField = document.getElementById('resultado');
    resultadoField.innerText = resultado ? "Llegas a la gasolinera" : "No llegas a la gasolinera";
}


const formulario = document.getElementById('formulario');


formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    let formData = new FormData(formulario);

    formData = Object.fromEntries(formData);

    renderInDOM(comprobarSiLlegas(+formData['gasolina'], +formData['gpl'], +formData['gasolinera']));
})

