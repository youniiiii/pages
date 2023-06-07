function sendText() {
  var textInput = document.getElementById('textInput').value;
  window.location.href = 'another-page.html?text=' + encodeURIComponent(textInput);
}
/** SECTOR DE LOS AÑOS AUTOMATICA PARA EL FOOTER **/
const año = document.getElementById("copi");
año.innerHTML = new Date().getFullYear();




let btn = document.getElementById("btn"),
  on = document.querySelectorAll(".on")
function intercambiarClases(array, clase) {
  array.forEach(element => {
    element.classList.toggle(clase);
  })
}/* 
let nombre = document.getElementById("first_name").value;
let apellido = document.getElementsById("last_name").value;
let nombres = document.querySelector("");
nombres.innerHTML = "<h4>nombre  +apellido</h4>"; */



btn.addEventListener("click", (e) => {
  e.preventDefault()
  intercambiarClases(on, "none");

})