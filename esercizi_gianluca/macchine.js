const marche = [];
const modelli = [];
const colori = [];
const anni = [];
const targhe = [];
//Avviso eslint che uso jquery
/*global $*/
function inserisci() {
  const marca = $("#marca").val();
  const modello = $("#modello").val();
  const colore = $("#colore").val();
  const anno = $("#anno").val();
  const targa = $("#targa").val().toUpperCase();
  if (targhe.filter(e => e == targa).length)
    alert("Targa già inserita");
  else if (!marca || !modello || !colore || !anno || !targa)
    alert("Non hai compilato tutti i campi");
  else {
    marche.push(marca);
    modelli.push(modello);
    colori.push(colore);
    anni.push(anno);
    targhe.push(targa);
    alert("Macchina aggiunta con successo");
    const indice = targhe.length;
    const tdIndice = document.createElement("td");
    tdIndice.innerText = indice;
    const tdMarca = document.createElement("td");
    tdMarca.innerText = marca;
    const tdModello = document.createElement("td");
    tdModello.innerText = modello;
    const tdColore = document.createElement("td");
    tdColore.innerText = colore;
    const tdAnno = document.createElement("td");
    tdAnno.innerText = anno;
    const tdTarga = document.createElement("td");
    tdTarga.innerText = targa;
    const tr = document.createElement("tr");
    tr.appendChild(tdIndice);
    tr.appendChild(tdMarca);
    tr.appendChild(tdModello);
    tr.appendChild(tdColore);
    tr.appendChild(tdAnno);
    tr.appendChild(tdTarga);
    document.getElementById("tabella").appendChild(tr);
  }
}

function aggiorna() {
  const marca = $("#marca").val();
  const modello = $("#modello").val();
  const colore = $("#colore").val();
  const anno = $("#anno").val();
  const targa = $("#targa").val().toUpperCase();
  const pos = targhe.findIndex(e => e == targa);
  if (pos == -1)
    alert("Targa non esistente");
  else if (!marca || !modello || !colore || !anno || !targa)
    alert("Non hai compilato tutti i campi");
  else {
    marche[pos] = marca;
    modelli[pos] = modello;
    colori[pos] = colore;
    anni[pos] = anno;
    targhe[pos] = targa; //Non serve, tanto non cambia
    const elencoTr = document.getElementsByTagName("tr");
    for (const tr of elencoTr)
      if (tr.children[0].innerText == pos) {
        tr.children[1] = marca;
        tr.children[2] = modello;
        tr.children[3] = colore;
        tr.children[4] = anno;
        tr.children[5] = targa; //Non serve, tanto non cambia
      }

  }
}

function elimina() {
  const marca = $("#marca").val();
  const modello = $("#modello").val();
  const colore = $("#colore").val();
  const anno = $("#anno").val();
  const targa = $("#targa").val().toUpperCase();
  const pos = targhe.findIndex(e => e == targa);
  if (pos == -1)
    alert("Targa non esistente");
  else if (!marca || !modello || !colore || !anno || !targa)
    alert("Non hai compilato tutti i campi");
  else {
    marche.splice(pos, 1);
    modelli.splice(pos, 1);
    colori.splice(pos, 1);
    anni.splice(pos, 1);
    targhe.splice(pos, 1);
    $("tr").each((i,e)=>{
      if($(e).children().eq(0).text()==pos)
        $(e).remove();
    });
  }
}