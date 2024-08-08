function procesarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var mensaje = '';

    if (edad >= 18) {
        mensaje = nombre + ', eres mayor de edad.';
    } else {
        mensaje = nombre + ', no eres mayor de edad.';
    }

    document.getElementById('resultado').innerText = mensaje;
}