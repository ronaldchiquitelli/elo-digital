/* script.js ELO DIGITAL */

// 1. Menu responsivo (Mobile)
var btnMenu = document.getElementById("btnMenuMobile");
var navMenu = document.getElementById("navMenu");

if (btnMenu && navMenu) {
  btnMenu.addEventListener("click", function () {
    navMenu.classList.toggle("open");
  });
}

// 2. Destaque ativo na faixa superior de preview das telas
var miniaturas = document.querySelectorAll(".preview-thumb");

for (var i = 0; i < miniaturas.length; i++) {
  miniaturas[i].addEventListener("click", function () {
    for (var j = 0; j < miniaturas.length; j++) {
      miniaturas[j].classList.remove("active");
    }
    this.classList.add("active");
    if (navMenu) {
      navMenu.classList.remove("open");
    }
  });
}

// 3. Filtro de categoria na vitrine de serviços (RF2)
var filtroCategoria = document.getElementById("filtroCategoria");
var cardsServico = document.querySelectorAll(".gig-card");

if (filtroCategoria) {
  filtroCategoria.addEventListener("change", function () {
    var valorEscolhido = filtroCategoria.value;

    for (var i = 0; i < cardsServico.length; i++) {
      var categoriaCard = cardsServico[i].getAttribute("data-categoria");
      if (valorEscolhido === "todos" || categoriaCard === valorEscolhido) {
        cardsServico[i].style.display = "flex";
      } else {
        cardsServico[i].style.display = "none";
      }
    }
  });
}

// 4. Redirecionamento da busca para a seção de serviços
var formBuscaTopo = document.getElementById("formBuscaTopo");
if (formBuscaTopo) {
  formBuscaTopo.addEventListener("submit", function (evento) {
    evento.preventDefault();
    window.location.href = "#sec-servicos";
  });
}

var formBuscaHero = document.getElementById("formBuscaHero");
if (formBuscaHero) {
  formBuscaHero.addEventListener("submit", function (evento) {
    evento.preventDefault();
    window.location.href = "#sec-servicos";
  });
}

// 5. Simulação básica do protótipo de login (RF3) e impressão PDF (RNF1)
var formLogin = document.getElementById("formLogin");
if (formLogin) {
  formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();
    alert("Login validado no protótipo do 1º Semestre DSM (RF3)!");
  });
}

var btnLoginFatec = document.getElementById("btnLoginFatec");
if (btnLoginFatec) {
  btnLoginFatec.addEventListener("click", function () {
    alert("Acesso institucional @fatec.sp.gov.br simulado com sucesso!");
  });
}

var btnLoginGoogle = document.getElementById("btnLoginGoogle");
if (btnLoginGoogle) {
  btnLoginGoogle.addEventListener("click", function () {
    alert("Acesso Google para empresas/ONGs simulado com sucesso!");
  });
}

var btnImprimirPdf = document.getElementById("btnImprimirPdf");
if (btnImprimirPdf) {
  btnImprimirPdf.addEventListener("click", function () {
    window.print();
  });
}

// 6. Responsividade menu mobile ao clicar em um link ou ao ampliar a tela
if (btnMenu && navMenu) {
  var linksMenu = navMenu.querySelectorAll("a");

  for (var k = 0; k < linksMenu.length; k++) {
    linksMenu[k].addEventListener("click", function () {
      navMenu.classList.remove("open");
    });
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("open");
    }
  });
}

/* Autores: Ronald Chiquitelli, Wilder Mateus Pavini, Weliton Osti e Anna Clara da Silva Guerra  */
