//Definir variable 
let edad = parseFloat(prompt("Ingrese su Edad"));


if(edad >= 18){
    let sn = prompt("Usted Tiene Licencia?");
    if( sn === "si"){
        document.write("Ya que usted tiene la edad adecuada y tiene licencia usted esta autorizado para conducir");
    }
    else{
        document.write("Ya que usted tiene la edad adecuada pero no licencia usted no esta autorizado para conducir ");
    }
}
else if(edad <= 17){
    document.write("Disculpe pero usted no tiene la edad suficiente para tener licencia y peor para estar autorizado aconducir")
}
else{
    document.write("Ingrese un valor adecuado");
}