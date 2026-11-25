var nodoFinestra;
var nodoPulsante;
var nodoChiudi;

function gestorePulsante() {
  try {
  nodoFinestra.style.display = "block";
 }
 catch ( e ) {
  alert("gestorePulsante" + e);
 }
}

function gestoreChiudi() {
  try {
  nodoFinestra.style.display = "none";
  }
 catch ( e ) {
  alert("gestoreChiudi" + e);
 }
}

function gestoreLoad(){
  try {
    nodoFinestra = document.getElementById("mdl");
    nodoPulsante = document.getElementById("btn");
    nodoChiudi = document.getElementsByClassName("close")[0];
    nodoPulsante.onclick = gestorePulsante;
    nodoChiudi.onclick = gestoreChiudi;
   }
  catch ( e ) {
   alert("gestoreLoad" + e);
 }
}

window.onload = gestoreLoad;
