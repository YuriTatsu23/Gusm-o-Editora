const btnNFpagina = document.getElementById("btnNFpagina");

btnNFpagina.addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../NewFantasy/nfprincipal.html";

});



const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", function () {
    window.location.href = "../Login/cadastro.html";
});



const btnbooks = document.getElementById("btnbooks");

btnbooks.addEventListener("click", function (event) {

    event.preventDefault();

    window.location.href = "../livros/livrosprincipal.html";

});