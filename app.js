function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    
    if (isNaN(resultado))
    resultado = 'la operacion no incluye numeros'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`resultado: ${resultado}`);
}

function restar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];    
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if (isNaN(resultado))
    resultado = 'la operacion no incluye numeros'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`resultado: ${resultado}`);
}

function dividir(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if (isNaN(resultado))
    resultado = 'la operacion no incluye numeros'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`resultado: ${resultado}`);
}

function multiplicar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    
    if (isNaN(resultado))
    resultado = 'la operacion no incluye numeros'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`resultado: ${resultado}`);
}