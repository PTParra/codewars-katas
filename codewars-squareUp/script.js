const generarLista = (numero) => {
    let numeroVerificado = Math.min(Math.max(numero, 0), 1000);
    let output = [];

    let count = 1;

    for (let i = 0; i < numeroVerificado; i++) {
        const fila = Array(numeroVerificado).fill(0);
        
        let numberToIntroduce = 1;
        let j = fila.length - 1;
        while (j >= 0 && numberToIntroduce <= count) {
            fila[j] = numberToIntroduce;
            numberToIntroduce++;
            j--;
        }

        output.push(...fila);
        count++;
    }

    return output;
}

const renderInDOM = (resultado) => {
    const resultadoField = document.getElementById('resultado');
    resultadoField.innerText = resultado.length > 0 ? resultado.join(", ") : "0";
}


const formulario = document.getElementById('formulario');


formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    let formData = new FormData(formulario);

    formData = Object.fromEntries(formData);

    

    renderInDOM(generarLista(+formData['numero']));
})