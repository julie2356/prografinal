let numero = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar:"));

document.write("<h2>Tabla de Multiplicar del numero " + numero + "</h2>");
document.write("<table border='3'>");
document.write("<tr><th>Número</th><th>Resultado</th></tr>");

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write("<tr><td>" + numero + " x " + i + "</td><td>" + resultado + "</td></tr>");
}

document.write("</table>");