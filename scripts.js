const texto = "Estudiante de ingeniería informática";
var i = 0;

function escribir() {
  if (i < texto.length) {
    document.getElementById("typewriter").textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 120); // velocidad de escritura (ms)
  }
}

window.onload = escribir; // empieza al cargar la página