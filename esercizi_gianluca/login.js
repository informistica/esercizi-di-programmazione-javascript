//Questi sarebbero da memorizzare su un database e la password sarebbe da criptare.
//Non avendo fatto nè i server nè i database nè l'hashing li metto qui lato client.
const username="user";
const password="pass";

//  function login() {
//   const userInserito=document.getElementById("txtUsername").value;
//   const passInserita=document.getElementById("txtPassword").value;
//   if(userInserito==username&&passInserita==password) {
//     document.getElementsByTagName("form")[0].remove();
//     document.getElementById("alert").remove();
//     const div=document.createElement("div");
//     const h1=document.createElement("h1");
//     h1.innerText="Benvenuto "+userInserito;
//     div.appendChild(h1);
//     document.getElementById("contenitore").append(div);
//   }else{
//     const div=document.createElement("div");
//     div.classList.add("alert");
//     div.classList.add("alert-danger");
//     div.role="alert";
//     div.id="alert";
//     div.innerText="Username o password errata";
//     document.getElementById("contenitore").append(div);
//   }
// } 

/*global $*/ //Per eslint
function login() {
  const userInserito=$("#txtUsername").val();
  const passInserita=$("#txtPassword").val();
  if(userInserito==username && passInserita==password) {
    $("form").remove();
    $("#alert").remove();
    const div=$("<div></div>").append($("<h1></h1>").text("Benvenuto "+username));
    $("#contenitore").append(div);
  }else{
    const div=$("<div></div>").addClass("alert alert-danger").attr("role","alert").attr("id","alert").text("Username e/o password errati");
    $("#contenitore").append(div);
  }
}