//Metros a centimetros y viceversa

//Declarar variables

let cantidad = parseFloat(prompt("Ingrese la cantidad a convertir: "));
let unidad = prompt("Ingrese la unidad que desea convertir (m para metros, cm para centimetros)");

//Realizar procedimiento
if (unidad === "m"){
    let cm = cantidad * 100;
    document.write(cantidad, " metros equivalen a ",cm," centimetros");
}else if (unidad === "cm"){
    let m = cantidad / 100;
    document.write(cantidad , " centimetros equivalen a ",m,"metros");
}else {
    document.write("Unidad de medida no valida");
}


