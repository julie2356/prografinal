let numeroSecreto = Math.floor(Math.random()*100)+1;
let intentos = 0;

function adivinaNumero(){
    const intento = parseInt(document.getElementById('intento').value);
    intentos++;
    const pista = document.getElementById('pista');

    if (intento < numeroSecreto){
        pista.textContent = 'Mas alto';
    } else if (intento > numeroSecreto){
        pista.textContent = 'Mas bajo'
    } else {
        pista.textContent = `Felicidades, adivinaste el numero en ${intentos} intentos.`;
    }
}