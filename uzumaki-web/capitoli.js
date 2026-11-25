var nodoCap8;
var nodoCap10;
var nodoCap15;
var nodoCap0;
var nodoTesto8;
var nodoTesto10;
var nodoTesto15;
var nodoTesto0;
var tabellaId;


function gestoreTesto() {
  try {
    if (nodoScelto) {
      nodoScelto.setAttribute("class", "invisibile");
    }
    var idFoto = this.id;
    var nodoTesto = tabellaId[idFoto];
    nodoTesto.setAttribute("class","visibile");
    nodoScelto = nodoTesto;
  }
  catch ( e ) {
    alert ("gestoreTesto " + e);
  }
}

function gestoreLoad(){
  try {
    nodoCap8 = document.getElementById("cap8");
    nodoCap10 = document.getElementById("cap10");
    nodoCap15 = document.getElementById("cap15");
    nodoCap0 = document.getElementById("cap0");
    nodoTesto8 = document.getElementById("testo8");
    nodoTesto10 = document.getElementById("testo10");
    nodoTesto15 = document.getElementById("testo15");
    nodoTesto0 = document.getElementById("testo0");
    nodoCap8.onclick = gestoreTesto;
    nodoCap10.onclick = gestoreTesto;
    nodoCap15.onclick = gestoreTesto;
    nodoCap0.onclick = gestoreTesto;
    tabellaId = {
      "cap8": nodoTesto8,
      "cap10": nodoTesto10,
      "cap15": nodoTesto15,
      "cap0": nodoTesto0
    }
    nodoScelto = null;
   }
  catch ( e ) {
   alert("gestoreLoad" + e);
 }
}

window.onload = gestoreLoad;
