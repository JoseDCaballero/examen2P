document.getElementById('iniciarCalculadora').addEventListener('click', function() {
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    let operacion = prompt("Escribe el numero de la operación a realizar:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\nC. Limpiar");

    let resultado;

    if(operacion == "1"){
        resultado = num1 + num2;
    }
    else if(operacion == "2"){
        resultado = num1 - num2;
    }
    else if(operacion == "3"){
        resultado = num1 * num2;
    }
    else if(operacion == "4"){
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = "No se puede dividir entre cero";
        }
    }
    else if(operacion == 'c' || operacion == 'C'){
        resultado = "Memoria limpiada";
    }
    else if(operacion !== "1" || operacion !== "2" || operacion !== "3" || operacion !== "4" || operacion !== 'C', operacion !== 'c'){
        resultado = "Operación no válida";
    }

    document.getElementById('resultado').innerText = "Resultado: " + resultado;
});