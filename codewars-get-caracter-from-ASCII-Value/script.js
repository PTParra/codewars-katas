const changeToCharacter = (number) => {
    
    if(number >= 33 && number <= 255){
        return String.fromCharCode(number)
    }
    return "No es un número válido"
}

const showInDOM = (value) => {
    const campoResultado = document.getElementById('resultado');

    campoResultado.innerText = value;
}

const inputNumero = document.getElementById('input-numero');

inputNumero.addEventListener('input', () => {
    showInDOM(changeToCharacter(+inputNumero.value));
})

