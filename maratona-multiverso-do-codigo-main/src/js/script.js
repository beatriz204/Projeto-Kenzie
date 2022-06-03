function pegarCardInformacoes() {
    //Procurar no meu documento HTML, um element com esse ID:""
    const cardInformacoes = document.getElementById("modulo_descricao")
    cardInformacoes.innerHTML = "";

    //Procurar meu documento HTML e criar nele um elemento: ""
    const meuHeader = document.createElement("h4");
    //Texto dentro do H4
    meuHeader.innerText = "HARD SKILLS";
    meuHeader.classList.add("importante");

    const listaHardSkills = [
        "JavaScript (ES6)",
        "Programação Orientada a Objetos",
        "Programação Funcional",
        "Metodologias Ágeis",
        "Qualidade",
        "TDD com Jest, BDD com Cucumber",
        "Noções de UX"
    ];



    const ul = document.createElement("ul");

    for (let contador = 0; contador < listaHardSkills.length; contador = contador + 1) {
        const li = document.createElement("li");
        li.innerText = listaHardSkills[contador];

        ul.append(li)
    }

    cardInformacoes.append(meuHeader, ul);


}

function adicionaClick() {
    const botao = document.getElementById("segundoBotao");
    botao.addEventListener("click", pegarCardInformacoes)
}

adicionaClick();


// MODULO 1




function pegarCardInformacoes2() {
    //Procurar no meu documento HTML, um element com esse ID:""
    const cardInformacoes2 = document.getElementById("modulo_descricao")
    cardInformacoes2.innerHTML = "";

    //Procurar meu documento HTML e criar nele um elemento: ""
    const meuHeader = document.createElement("h4");
    //Texto dentro do H4
    meuHeader.innerText = "HARD SKILLS";
    meuHeader.classList.add("importante");

    const listaHardSkills = [
        "HTML5 E CSS3 ",
        "Web Semântica",
        "JavaScript (ES6) ",
        "Lógica de programação ",
        "Controle de versão com git",

    ];

    const ul = document.createElement("ul");

    for (let contador = 0; contador < listaHardSkills.length; contador = contador + 1) {
        const li = document.createElement("li");
        li.innerText = listaHardSkills[contador];

        ul.append(li)
    }

    cardInformacoes2.append(meuHeader, ul);
}


function adicionaClick2() {
    const botao = document.getElementById("primeiroBotao");
    botao.addEventListener("click", pegarCardInformacoes2)
}

adicionaClick2();




// MODULO 3



function pegarCardInformacoes3() {
    //Procurar no meu documento HTML, um element com esse ID:""
    const cardInformacoes3 = document.getElementById("modulo_descricao")
    cardInformacoes3.innerHTML = "";

    //Procurar meu documento HTML e criar nele um elemento: ""
    const meuHeader = document.createElement("h4");
    //Texto dentro do H4
    meuHeader.innerText = "HARD SKILLS";
    meuHeader.classList.add("importante");

    const listaHardSkills = [
        "React",
        "Hooks ",
        "Programação Funcional",
        "State Management ",
        "Redux ",
        "Componentização, uso de bibliotecas de componentes",
        "Consumo de APIs",
        "Metodologias Ágeis",
    ];

    const ul = document.createElement("ul");

    for (let contador = 0; contador < listaHardSkills.length; contador = contador + 1) {
        const li = document.createElement("li");
        li.innerText = listaHardSkills[contador];

        ul.append(li)
    }

    cardInformacoes3.append(meuHeader, ul);
}


function adicionaClick3() {
    const botao = document.getElementById("terceiroBotao");
    botao.addEventListener("click", pegarCardInformacoes3)
}

adicionaClick3();


// MODULO 4


function pegarCardInformacoes4() {
    //Procurar no meu documento HTML, um element com esse ID:""
    const cardInformacoes4 = document.getElementById("modulo_descricao")
    cardInformacoes4.innerHTML = "";

    //Procurar meu documento HTML e criar nele um elemento: ""
    const meuHeader = document.createElement("h4");
    //Texto dentro do H4
    meuHeader.innerText = "HARD SKILLS";
    meuHeader.classList.add("importante");

    const listaHardSkills = [
        "NodeJs, Express",
        "TypeScript ",
        "Banco de dados SQL (PostgreSQL) ",
        "Construção de APIs RESTful ",
        "Programação assíncrona",
        "Metodologias Ágeis",
        
    ];

    const ul = document.createElement("ul");

    for (let contador = 0; contador < listaHardSkills.length; contador = contador + 1) {
        const li = document.createElement("li");
        li.innerText = listaHardSkills[contador];

        ul.append(li)
    }

    cardInformacoes4.append(meuHeader, ul);
}


function adicionaClick4() {
    const botao = document.getElementById("quartoBotao");
    botao.addEventListener("click", pegarCardInformacoes4)
}

adicionaClick4();


// MODULO 5

function pegarCardInformacoes5() {
    //Procurar no meu documento HTML, um element com esse ID:""
    const cardInformacoes5 = document.getElementById("modulo_descricao")
    cardInformacoes5.innerHTML = "";

    //Procurar meu documento HTML e criar nele um elemento: ""
    const meuHeader = document.createElement("h4");
    //Texto dentro do H4
    meuHeader.innerText = "HARD SKILLS";
    meuHeader.classList.add("importante");

    const listaHardSkills = [
        "Python",
        " Django",
        " ORM",
        " MongoDB ",
        "Amazon AWS",
        "Migrations",
        "Metodologias Ágeis"
    ];

    const ul = document.createElement("ul");

    for (let contador = 0; contador < listaHardSkills.length; contador = contador + 1) {
        const li = document.createElement("li");
        li.innerText = listaHardSkills[contador];

        ul.append(li)
    }

    cardInformacoes5.append(meuHeader, ul);
}


function adicionaClick5() {
    const botao = document.getElementById("quintoBotao");
    botao.addEventListener("click", pegarCardInformacoes5)
}

adicionaClick5();


// MODULO 6


function pegarCardInformacoes6() {
    //Procurar no meu documento HTML, um element com esse ID:""
    const cardInformacoes6 = document.getElementById("modulo_descricao")
    cardInformacoes6.innerHTML = "";

    //Procurar meu documento HTML e criar nele um elemento: ""
    const meuHeader = document.createElement("h4");
    //Texto dentro do H4
    meuHeader.innerText = "HARD SKILLS";
    meuHeader.classList.add("importante");

    const listaHardSkills = [
        " Trilha de empregabilidade",
        
    ];

    const ul = document.createElement("ul");

    for (let contador = 0; contador < listaHardSkills.length; contador = contador + 1) {
        const li = document.createElement("li");
        li.innerText = listaHardSkills[contador];

        ul.append(li)
    }

    cardInformacoes6.append(meuHeader, ul);
}


function adicionaClick6() {
    const botao = document.getElementById("sextoBotao");
    botao.addEventListener("click", pegarCardInformacoes6)
}

adicionaClick6();


