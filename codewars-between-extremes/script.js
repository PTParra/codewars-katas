const devolverDiferenciaMinimoMaximo = (array) => {
    if(array.length <= 1){
        return "No has metido al menos 2 números";
    }
    let min = Math.min(...array);
    let max = Math.max(...array);
    return `La diferencia entre el menor y el mayor es: ${max - min}`;
}

const renderInDOM = (resultado) => {
    const resultadoField = document.getElementById('resultado');
    resultadoField.innerText = resultado;
}


const formulario = document.getElementById('formulario');


formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    let formData = new FormData(formulario);

    formData = Object.fromEntries(formData);

    let array = formData['array'].split(',').map(Number);

    if(array.every(number => !Number.isNaN(number)))
        renderInDOM(devolverDiferenciaMinimoMaximo(array));
    else
        renderInDOM("De los valores introducidos, no todos son números")
})