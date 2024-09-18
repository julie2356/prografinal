//Calcular que categoria pertenece +35 A, >=21-<=34 B, <21 C

//solicitar Varibles
let nombre = prompt("Ingrese su nombre");
let asistencia = parseFloat(prompt("Ingrese su cantidad de asistencias"));

if (asistencia >= 35){
    document.write(nombre, " usted es un estudiante de categoria A");
}
else if (asistencia >  21 && asistencia < 35){
    document.write(nombre, " usted es un estudiante de categoria B");
}
else if (asistencia >= 0 && asistencia < 20){
    document.write(nombre, " usted es un estudiante de categoria C");
}
else{
    document.write("Unidad no valida")
}

