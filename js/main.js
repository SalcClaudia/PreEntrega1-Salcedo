
/*function celsiusToFahrenheit() {
    const celsius = (celsius * 9 / 5) + 32;
    alert("Hoy estamos a" + " " + firstTemp + "ºC");

}

function fahrenheitToCelsius() {
    const fahrenheit = (fahrenheit - 32) * 5 / 9;
    alert("Hoy estamos a" + " " + secondTemp + "ºF");

}*/

function temperature1 (celsius){
    alert("Hoy estamos a" + " " + celsius + "ºC");
}

function temperature2 (fahrenheit){
    alert("Hoy estamos a" + " " + fahrenheit + "ºF");
}

alert("Se bienvenido al conversor de temperatura ºC a ºF");

let tempSelection = parseInt(prompt("Por favor escoja de la lista la opción que desea convertir: \n\.1 Celsius \n\.2 Fahrenheit \n\.0 Salir"));

switch (tempSelection) {
    case 0:
        alert ("Muchas gracias por usar The Thermostat.");
        break;
        case 1:
            let celsius = (celsius * 9 / 5) + 32;
            celsius = parseInt(prompt("Ingrese su cantidad en Celsius"));
            temperature1 (celsius); 
        
        break;
        case 2:
            let fahrenheit = (fahrenheit - 32) * 5 / 9;
            fahrenheit = parseInt(prompt("Ingrese su cantidad en Fahrenheit"));
            temperature2 (fahrenheit);
        break;

    default:
        alert ("Lo sentimos pero esa opción no es válida. Intente usando 1, 2 o 0");
        break;
}

/*alert("Se bienvenido al conversor de temperatura ºC a ºF")

const tempSelection = parseInt(prompt("Por favor escoja de la lista la opción que desea convertir: \n\.1 Celsius \n\.2 Fahrenheit \n\.0 Salir"));
*/

















/*let petSelection;

alert("Bienvenido o bienvenida a Find Me A Pet, donde te hacemos match con tu mejor amigo");

let welcomeUser = prompt("¿Podría escribir su nombre?");


if (welcomeUser) {
    let petSelection = parseInt(prompt("Bienvenid@ " + welcomeUser + ". ¿Qué tipo de compañero estás buscando? Elige un número de la lista: \n\n1. Perro\n2. Gato\n3. Loro"));

    switch (petSelection.toLowerCase) {
        case 1:
            alert("El mejor amigo del hombre. Tenemos desde pequeños senior hasta cachorros");
            break
        case 2:
            alert("gato");
            break
        case 3:
            alert("el loro");
            break
        default:
            alert("Lo sentimos, por los momentos no tenemos a ese companero en adopcion");
            break
    }


};*/


