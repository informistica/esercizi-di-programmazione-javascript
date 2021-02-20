//Questi sarebbero da memorizzare su un database e la password sarebbe da criptare.
//Non avendo fatto nè i server nè i database nè l'hashing li metto qui lato client.
const username="user";
const password="pass";

 function login() {
  const userInserito=document.getElementById("txtUsername").value;
  const passInserita=document.getElementById("txtPassword").value;
  if(userInserito==username && passInserita==password) {
    document.getElementsByTagName("form")[0].remove();
    const div=document.createElement("div");
    const h1=document.createElement("h1");
    h1.innerText="Benvenuto "+userInserito;
    div.appendChild(h1);
    document.getElementById("contenitore").append(div);
  }else{
    const div=document.createElement("div");
    div.classList.add("alert");
    div.classList.add("alert-danger");
    div.id="results";
    div.innerText="Username o password errata";
    document.getElementById("contenitore").append(div);
  }
} 

/*global $*/ //Per eslint

//  function login() {
//   const userInserito=$("#txtUsername").val();
//   const passInserita=$("#txtPassword").val();
//   if(userInserito==username && passInserita==password) {
//    alert("Login effettuato");
//    window.location.href="https://www.elexpo.net"
//   }else{
     
//      const div=$("<div id='results'></div>").addClass("alert alert-danger").attr("id","results").text("Username e/o password errati");
//     $("#contenitore").append(div);
    
//    }
// }
 