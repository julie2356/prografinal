function calcularFactorial(n){
    if (n === 0 || n === 1){
        return 1;
    }

    let resultado = 1;
    for (let i = n; i > 1; i--){
        resultado *= i;
    }
    return resultado;
}

function mostrarFactoriales(){
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = calcularFactorial(numero);
    document.getElementById('resultado').textContent = `El factorial de ${numero} es ${resultado}`;
}