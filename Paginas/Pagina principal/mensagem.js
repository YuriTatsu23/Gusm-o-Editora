// =========================
// PAINEL DE AVISO
// =========================

// Cria o painel
const painel = document.createElement("div");

// Conteúdo do painel
painel.innerHTML = `
    <div class="aviso-conteudo">

        <button id="fecharAviso">&times;</button>

        <h2>Aviso</h2>

        <p>
            Apesar do nome, por enquando 
            temos uma publicação amadora,
            sendo mais proximo de uma scan.
        
        </p>

        <button id="continuarAviso">
            Continuar
        </button>

    </div>
`;


// =========================
// ESTILO DO PAINEL
// =========================

painel.style.position = "fixed";
painel.style.top = "0";
painel.style.left = "0";
painel.style.width = "100%";
painel.style.height = "100%";

painel.style.backgroundColor = "rgba(0, 0, 0, 0.6)";

painel.style.display = "flex";
painel.style.alignItems = "center";
painel.style.justifyContent = "center";

painel.style.zIndex = "9999";


// =========================
// ESTILO DO CONTEÚDO
// =========================

const conteudo = painel.querySelector(".aviso-conteudo");

conteudo.style.position = "relative";
conteudo.style.width = "450px";
conteudo.style.maxWidth = "90%";

conteudo.style.padding = "40px";

conteudo.style.backgroundColor = "#fff";
conteudo.style.borderRadius = "10px";

conteudo.style.textAlign = "center";

conteudo.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";


// =========================
// BOTÃO FECHAR
// =========================

const fechar = painel.querySelector("#fecharAviso");

fechar.style.position = "absolute";
fechar.style.top = "10px";
fechar.style.right = "15px";

fechar.style.border = "none";
fechar.style.background = "none";

fechar.style.fontSize = "30px";

fechar.style.cursor = "pointer";


// =========================
// BOTÃO CONTINUAR
// =========================

const continuar = painel.querySelector("#continuarAviso");

continuar.style.padding = "12px 25px";

continuar.style.border = "none";
continuar.style.borderRadius = "5px";

continuar.style.backgroundColor = "#222";
continuar.style.color = "#fff";

continuar.style.cursor = "pointer";


// =========================
// FECHAR PAINEL
// =========================

fechar.addEventListener("click", function () {

    painel.remove();

});

continuar.addEventListener("click", function () {

    painel.remove();

});


// =========================
// MOSTRAR PAINEL
// =========================

document.body.appendChild(painel);