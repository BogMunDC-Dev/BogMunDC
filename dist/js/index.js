let contador = 0;
document.getElementById("demo").innerHTML = contador + "min(s)";
setInterval(function () {
  contador++;
  console.log("El contador ahora es: " + contador);
  document.getElementById("demo").innerHTML = contador + "min(s)";
}, 60000); // 60000 milisegundos equivalen a 1 minuto


editBtnY = document.getElementById('editBtn1')
editBtnN = document.getElementById('editBtn0')
editCardBody = document.getElementById('editCardBody')

editBtnY.addEventListener("click", () => {
    editCardBody.innerHTML = "<h8 class='card-text'><strong>Selecciona la Imagen: </strong></h8>" + "<br>" + "<input type='file' id='imagen'>" + "<br>" + "<br>" + "<h8 class='card-text'><strong>Escribe el nuevo nombre y Fecha con el siguiente formato: </strong></h8>" + "<p class='card-text'>[Nombre del Modelo] [Fecha de modelo]</p>" + "<input type='text' id='titulo-fecha'></input>" + "<br>" + "<br>" + "<h9 class='card-text'><strong>Deseas cambiar la descripción del modelo?</strong></h9>" + "<br>" + "<input type='text' id='descripcion'></input>"
});