var dias;
for (dias = 1; dias < 7; dias += 1) {
    switch (dias) {
    case 1:
        alert("Lunes");
        break
    case 2:
        alert("Martes");
        break
    case 3:
        alert("Miércoles");
        break
    case 4:
        alert("Jueves");
        break
    case 5:
        alert("Viernes");
        break
    case 6:
        alert("Sábado");
    case 7:
        alert("Domingo");
        break
    default:
        alert("Ese día no existe");
    }
};