const magias = [
    {
        nome: "Ataque Certeiro",
        nivel: 0,
        escola: "Adivinhação",
        descricao: "Você estende sua mão e aponta o dedo para um alvo no alcance. Sua magia garante a você uma breve intuição sobre as defesas do alvo. No seu próximo turno, você terá vantagem na primeira jogada de ataque contra o alvo, considerando que essa magia não tenha acabado.",
    },
    {
        nome: "Auxílio Divino",
        nivel: 1,
        escola: "Evocação",
        descricao: "Sua oração fortalece você com radiação divina. Até o fim da magia, seus ataques com arma causam 1d4 de dano radiante extra ao atingirem.",
    },
    {
        nome: "Ajuda",
        nivel: 2,
        escola: "Abjuração",
        descricao: "Sua magia inspira seus aliados com vigor e determinação. Escolha até três criaturas dentro do alcance. O máximo de pontos de vida e os pontos de vida atuais de cada alvo aumentam em 5, pela duração. Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, os pontos de vida dos alvos aumentam em 5 pontos adicionais para cada nível do espaço acima do o 2°.",
    },
    {
        nome: "Bola de Fogo",
        nivel: 3,
        escola: "Conjuração",
        descricao: "Um veio brilhante lampeja na ponta do seu dedo em direção a um ponto que você escolher, dentro do alcance, e então eclode com um estampido baixo, explodindo em chamas. Cada criatura em uma esfera de 6 metros de raio [20-foot radius], centrada no ponto, deve realizar um teste de resistência de Destreza. Um alvo sofre 8d6 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso O fogo se espalha, dobrando esquinas. Ele incendeia objetos inflamáveis na área que não estejam sendo vestidos ou carregados. Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°.",
    },
];

let input = document.querySelector("#input");
let inputNivel = document.querySelector("#inputNivel");
let div = document.querySelector("#container");
let alerta = document.createElement("p");
input.addEventListener("keyup", () => {
    alerta.style.display = "none";
    div.innerHTML = " ";
    let array = magias.filter((valor) => {
        return valor.nome
            .toLocaleUpperCase()
            .includes(input.value.toLocaleUpperCase());
    });

    if (input.value !== "") {
        for (let i = 0; i < array.length; i++) {
            let magia = document.createElement("p");
            magia.classList.add("magia");
            magia.innerHTML = `${array[i].nome} <br> Nível da Magia: ${array[i].nivel} <br> Escola de Magia: ${array[i].escola} <br> ${array[i].descricao}`;
            div.appendChild(magia);
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            div.removeChild(magia);
        }
    }
});

inputNivel.addEventListener("keyup", () => {
    div.innerHTML = "";
    let array = magias.filter((valor) => {
        return valor.nivel == inputNivel.value;
    });

    if (inputNivel.value !== "") {
        array.forEach((magia) => {
            let p = document.createElement("p");
            p.innerHTML = `${magia.nome} <br> Nível da Magia: ${magia.nivel} <br> Escola de Magia: ${magia.escola} <br> ${magia.descricao}`;
            p.classList.add("magia");
            div.appendChild(p);
        });
    } else {
        for (let i = 0; i < array.length; i++) {
            div.removeChild(magia);
        }
    }
});
