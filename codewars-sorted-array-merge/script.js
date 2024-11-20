const juntarArrays = (array1, array2) => {
    return array1.concat(array2);
}

const ordenarArray = (array) => {
    return array.sort((a,b) => a - b);
}

const eliminarDuplicadosArray = (array) => {
    return array.filter((value, index) => array.indexOf(value) === index);
}

const renderInDOM = (resultado) => {
    const resultadoField = document.getElementById('resultado');
    resultadoField.innerText = resultado.length > 0 ? `El resultado final es: ${resultado.join(", ")}` : "No has introducido números";
}


const formulario = document.getElementById('formulario');


formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    let formData = new FormData(formulario);

    formData = Object.fromEntries(formData);

    let array = juntarArrays(formData['array1'].split(',').map(Number), formData['array2'].split(',').map(Number));

    array = eliminarDuplicadosArray(ordenarArray(array));

    renderInDOM(array);
})

