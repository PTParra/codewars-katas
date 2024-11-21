const sonidosReloj = (hora) => {
    let output = [];
    if(hora.length != 2)
        return "Formato de hora incorrecto";
    let horas = Math.max(Math.min(hora[0], 23), 0);
    let minutos = Math.max(Math.min(hora[1], 59), 0);
    if(horas > 12){
        horas -= 12;
    }

    switch (minutos) {
        case 30:
            output.push("Cuckoo");
            break;
        case 0:
            output = devolverCucos(horas)
            break;
        default:
            if(minutos % 3 === 0 || minutos % 5 === 0){
                if(minutos % 3 === 0)
                    output.push("Fizz");
                if(minutos % 5 === 0)
                    output.push("Buzz");
            }else{
                output.push("tick")
            }
            break;
    }
    return output.join(" ");
}

const devolverCucos = (horas) => {
    let cucos = [];
    let cantidadCucos = horas === 0 ? 12 : horas;

    for (let i = 0; i < cantidadCucos; i++) {
        cucos.push("Cuckoo");
    }

    return cucos;
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

    let horaDescompuesta = formData['hora'].split(":").map(Number);

    if (horaDescompuesta.every(value => !Number.isNaN(value))) {
        renderInDOM(sonidosReloj(horaDescompuesta));
    } else {
        renderInDOM("La hora no puede contener letras")
    }
    
})