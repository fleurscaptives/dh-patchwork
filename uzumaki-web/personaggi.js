var indiceFoto;
var numeroFoto;
var nodoFoto;
var nodoTesto;
var nodoAvanti;
var nodoIndietro;

function gestoreClickAvanti() {
 try {
      cambiaFoto(+1); }
 catch ( e ) {
    alert("gestoreClickAvanti " + e);
  }
}

function gestoreClickIndietro() {
 try {
     cambiaFoto(-1); }
 catch ( e ) {
     alert("gestoreClickIndietro " + e);
 }
}

function cambiaFoto(x) {
 indiceFoto += x;
 if (indiceFoto == numeroFoto) {
 indiceFoto = 0;
   }
 if (indiceFoto < 0) {
   indiceFoto = numeroFoto-1;
   }
 nodoFoto.setAttribute("src", galleria[indiceFoto].foto);
 rimuoviFigli(nodoFoto);
 cambiaTesto(nodoTesto,indiceFoto);
   }

function rimuoviFigli(nodo){
 while (nodo.childNodes.length >0){
  nodo.removeChild(nodo.firstChild);
	}
}

function cambiaTesto(nodo, indice){
	rimuoviFigli(nodo);
	var nodoT = document.createElement("p");
	var nodoR = document.createElement("h3");
	nodo.appendChild(nodoR);
  nodo.appendChild(nodoT);
  var nodoN = document.createTextNode(galleria[indice].nome);
  var nodoS = document.createTextNode(galleria[indice].testo);
  nodoR.appendChild(nodoN);
  nodoT.appendChild(nodoS);
}

function gestoreLoad(){
  try {
    nodoAvanti = document.getElementById("avanti");
    nodoIndietro = document.getElementById("indietro");
    nodoFoto = document.getElementById("foto");
    nodoNome = document.getElementById("nome");
    nodoTesto = document.getElementById("testo");

    nodoAvanti.onclick = gestoreClickAvanti;
    nodoIndietro.onclick = gestoreClickIndietro;

    numeroFoto = galleria.length;
    indiceFoto = 0;
    cambiaFoto(0);
    cambiaTesto(nodoTesto, indiceFoto);
   }
  catch ( e ) {
   alert("gestoreLoad" + e);
 }
}

window.onload = gestoreLoad;

var galleria = [
  { foto:"foto0.png",
    nome: "Kirie Goshima",
    testo: "È la protagonista, studentessa del liceo di Kurozu-Cho, matura e riservata, sarà lei a raccontare in prima persona le vicende."
  },
  {
    foto: "foto1.png",
    nome: "Shuichi Saito",
    testo: "Fidanzato di Kirie, la maledizione lo porterà a perdere i suoi affetti più cari e a condurre una vita da recluso."
  },
  {
    foto: "foto2.png",
    nome:"Azami Kurotani",
    testo:"Amica e compagna di scuola di Kirie, sulla fronte mostra una cicatrice che, nel corso della storia, si espanderà fino a prendere la forma di una spirale."
  },
  {
    foto: "foto3.png",
    nome:"Signor Saito",
    testo:"È il padre di Shuichi, e anche il primo a cadere vittima della maledizione. La sua ossessione è tale da portarlo a mangiare solo cibo che presenti il motivo della spirale."
  },
  {
    foto: "foto4.png",
    nome:"Kyoko Sekino",
    testo:"Studentessa del liceo di Kurozu-Cho, la maledizione colpirà prima di tutto i suoi capelli, i quali inizieranno ad attorcigliarsi e a incantare chiunque li guardi."
  },
  {
    foto: "foto5.png",
    nome:"Chie Maruyama",
    testo:"Giornalista per Toyo TV, arriva a Kurozu-Cho per lavorare ad un reportage sulla città dopo che questa è stata colpita da violenti tornado."
  },
  {
    foto: "foto6.png",
    nome:"Yoriko e Kazunori",
    testo:"Sono due innamorati appartenenti a famiglie rivali. La maledizione li colpirà insieme: i loro corpi si uniranno in un vortice prima di scomparire per sempre nell'acqua del mare."
  }
]
