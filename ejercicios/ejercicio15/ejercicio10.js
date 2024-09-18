//Definir variables
let precio = parseFloat(prompt("Ingrese el precio del ticket"));
let edad = prompt("Ingrese su edad para saber si tiene descuento");

//Realizar procedimiento
if (edad <= 12 ){
    let cantidad = precio *0.40;
    let descuento = precio - cantidad;
    document.write("Ya que usted tiene menos de 12 obtiene un descuento del 40% por lo tanto solo debe pagar ",descuento,"$");
}
else if (edad <= 21){
    let estudiante = prompt("Usted es un estudiante?")
    if (estudiante === "si") {
        let canti = precio *0.30;
        let des = precio - canti;
        document.write("Ya que usted tiene mas de 13 y menos de 21 y es estudiante obtiene un descuento del 30% por lo tanto solo debe pagar ",des,"$");
    }else {
        document.write("Lo siento pero usted no es estudiante por lo tanto no puede obtener este descuento por lo tanto tiene que pagar el precio normal que es de ",precio,"$");
    }
}
else if (edad >= 60){
    let cantid = precio *0.60;
    let descu = precio - cantid;
    document.write("Ya que usted tiene mas 60 obtiene un descuento del 60% por lo tanto solo debe pagar ",descu,"$");
}
else {
    document.write("Si usted no tiene menos de 21 o mas de 60 no obtiene ningun descuento por lo tanto tiene que pagar el ticket completo que serian ", precio,"$");
}