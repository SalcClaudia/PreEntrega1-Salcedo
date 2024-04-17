

function temperature1(celsius) {
    let celsiusToFahrenheit = (celsius * 9 / 5) + 32;
    alert("Hoy estamos a" + " " + Math.round(celsiusToFahrenheit) + "ºF");
}

function temperature2(fahrenheit) {
    let fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
    alert("Hoy estamos a" + " " + Math.round(fahrenheitToCelsius) + "ºC");
}


do {
    alert("Se bienvenido al conversor de temperatura ºC a ºF");
    let tempSelection = parseInt(prompt("Por favor escoja de la lista la opción que desea convertir: \n\.1 Celsius a Fahrenheit \n\.2 Fahrenheit a Celsius \n\.0 Salir"));

    switch (tempSelection) {
        case 0:
            alert("Muchas gracias por usar The Thermostat.");
            break;
        case 1:
            let celsius;
            celsius = parseInt(prompt("Ingrese su cantidad en Celsius"));
            temperature1(celsius);

            break;
        case 2:
            let fahrenheit;
            fahrenheit = parseInt(prompt("Ingrese su cantidad en Fahrenheit"));
            temperature2(fahrenheit);
            break;

        default:
            alert("Lo sentimos pero esa opción no es válida. Intente usando 1, 2 o 0");
            break;
    }



} while (tempSelection !==0);








