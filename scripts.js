const texto = "Computer Science student from Santiago de Compostela, Spain";
let i = 0;

function escribir() {
  if (i < texto.length) {
    document.getElementById("typewriter").textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 120); 
  }
}

window.onload = escribir;