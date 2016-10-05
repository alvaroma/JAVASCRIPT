/*jslint browser: true*/
/*global prompt,alert,window,parseInt,length,is_integer*/
var jugador1 = window.prompt("Jugador 1", "Tabaco, Papel o Mechero");
var jugador2 = window.prompt("Jugador 2", "Tabaco, Papel o Mechero");

if (jugador1 === jugador2) {
    window.alert("Empate, si los dos solo teneis " + jugador1 + " vais jodiiiiidos");
} else if (jugador1 === "Tabaco" && jugador2 === "Papel") {
    window.alert(jugador1 + " vs " + jugador2 + ", gana el jugador2 porque sin papel no lias machote.");
} else if (jugador1 === "Tabaco" && jugador2 === "Mechero") {
    window.alert(jugador1 + " vs " + jugador2 + ", gana el jugador1 porque es más facil que te dejen fuego a que te den un piti.");
} else if (jugador1 === "Papel" && jugador2 === "Mechero") {
    window.alert(jugador1 + " vs " + jugador2 + ", gana el jugador2 porque el papel se quema soliiiiito.");
} else if (jugador1 === "Papel" && jugador2 === "Tabaco") {
    window.alert(jugador1 + " vs " + jugador2 + ", gana el jugador1 porque sin papel no lias machote.");
} else if (jugador1 === "Mechero" && jugador2 === "Tabaco") {
    window.alert(jugador1 + " vs " + jugador2 + ", gana el jugador2 porque es más facil que te dejen fuego a que te den un piti.");
} else if (jugador1 === "Mechero" && jugador2 === "Papel") {
    window.alert(jugador1 + " vs " + jugador2 + ", gana el jugador1 porque el papel se quema soliiiiito.");
} else {
    window.alert("Vas de listillo metiendo cosas raras y claro no funciona...");
}




