let diaSemana = prompt ("¿Qué día es hoy?");
switch (diaSemana) {
    case "lunes":

        alert("buen dia !! hoy tienes que hacer 30 flexiones de brazos.");

        break;
    case "martes":

        alert("buen dia !! hoy tienes que correr 10 km.");

        break;
    case "miércoles":

        alert("buen dia !! hoy tienes que hacer 20 minutos de soga.");

        break;
    case "jueves":

        alert("buen dia !! hoy tienes que hacer 100 abdominales.");

        break;
    case "viernes":

        alert("buen dia !! hoy tienes que hacer 20 km de bicicleta.");

        break;
    case "sábado":

        alert("buen dia !! hoy tienes que hacer 100 sentadillas");

        break;
    case "domingo":

        alert(" buen dia !! hoy tienes que hacer 50 burpes");

        break;
    default:

        alert("Escribe el día de la semana en minúsculas.");
}



for (i = 20; i <= 70; i++) {

    document.write("El número es: " + i + "<br>");

}

let count = prompt("colocar cantidad de veces:")
for (let i = 0; i < count; i++) {
    document.write("Hola MUNDO" + "<br>")
    
}