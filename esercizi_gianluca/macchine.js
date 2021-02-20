const marche = [];
const modelli = [];
const colori = [];
const anni = [];
const targhe = [];
//Avviso eslint che uso jquery
/*global $*/
// const creaTd = testo => {
//   const td = document.createElement("td");
//   td.innerText = testo;
//   return td;
// };

function handleButton(evt) {
  const btn = evt.target; //Prendo il pulsante che ha generato l'evento
  //btn->colonna->riga
  let tr = btn.parentNode.parentNode;
  const indice = tr.children[0].innerText - 1;
  marche.splice(indice, 1);
  modelli.splice(indice, 1);
  colori.splice(indice, 1);
  anni.splice(indice, 1);
  targhe.splice(indice, 1);
  const tabella = tr.parentNode;
  tabella.removeChild(tr); //Elimino la riga da eliminare
  tr = tabella.children;
  for (let i = 1; i < tr.length; i++)
    tr[i].children[0].innerText = i;
}

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
    const tdElimina = document.createElement("td");
    const btnElimina = document.createElement("button");
    btnElimina.classList.add("btn");
    btnElimina.classList.add("btn-danger");
    btnElimina.innerText = "Elimina";
    btnElimina.addEventListener("click", handleButton);
    tdElimina.appendChild(btnElimina);
    const tr = document.createElement("tr");
    tr.appendChild(tdIndice);
    tr.appendChild(tdMarca);
    tr.appendChild(tdModello);
    tr.appendChild(tdColore);
    tr.appendChild(tdAnno);
    tr.appendChild(tdTarga);
    tr.append(tdElimina);
    //Altra versione
    // tr.appendChild(creaTd(indice));
    // tr.appendChild(creaTd(marca));
    // tr.appendChild(creaTd(modello));
    // tr.appendChild(creaTd(colore));
    // tr.appendChild(creaTd(anno));
    // tr.appendChild(creaTd(targa));
    // Il button è da fare comunque a se, però così il codice è più compatto e leggibile
    document.getElementById("tabella").appendChild(tr);
    $("input[type='text']").val("");
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
      if (Number(tr.children[0].innerText) == pos + 1) {
        tr.children[1].innerText = marca;
        tr.children[2].innerText = modello;
        tr.children[3].innerText = colore;
        tr.children[4].innerText = anno;
        tr.children[5].innerText = targa; //Non serve, tanto non cambia
      }
    $("input[type='text']").val("");
  }
}
/*
! Funzione necessaria per elimina()
function ricerca(vettore, elemento) {
  for (let i = 0; i < vettore.length; i++)
    if (vettore[i] == elemento)
      return i;
  return -1;
}
! Questa funzione esisteva perché c'era un solo pulsante per eliminare i dati. Ora ogni riga ha il suo pulsante, quindi questa funzione non serve più
function elimina() {
  const marca = $("#marca").val();
  const modello = $("#modello").val();
  const colore = $("#colore").val();
  const anno = $("#anno").val();
  const targa = $("#targa").val().toUpperCase();
  //Per la posizione usare solo uno dei tre modi qui sotto.
  const pos = ricerca(targhe,targa);
  const pos = targhe.findIndex(function(elemento) {
    return elemento==targa;
  });
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
      if(Number($(e).children().eq(0).text())==pos+1)
        $(e).remove();
    });
  }
}
*/