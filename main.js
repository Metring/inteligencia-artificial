const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com qual desses super-heróis você mais se identifica?",
        alternativas: [
            {
                texto: "Homem-Aranha.",
                afirmacao: "Você parece ser alguém com grandes responsabilidades, além de empático e altruísta!"
            },
            {
                texto: "Batman.",
                afirmacao: "Você parece ser alguém mais introvertido, mas que sempre está pronto para defender a justiça!."
            }
        ]
    },
    {
        enunciado: "O que você faria se tivesse que esconder um segredo de toda a sua família?",
        alternativas: [
            {
                texto: "Não me aguentaria e contaria rapidamente.",
                afirmacao: "Isso poderia trazer graves consequências à sua família, um herói deve lembrar que com grandes poderes vem grandes responsabilidades."
            },
            {
                texto: "Eu guardaria o segredo com toda a minha vida.",
                afirmacao: "Você mostra ser uma pessoa confiável e empática."
            }
        ]
    },
    {
        enunciado: "Se você fosse um animal, qual desses seria?",
        alternativas: [
            {
                texto: "Uma coruja.",
                afirmacao: "Você é uma pessoa mais observadora, mas não hesitaria em ajudar os outros."
            },
            {
                texto: "Um dragão.",
                afirmacao: "Você gosta de sonhar e sempre está perdido em seus próprios pensamentos, o que pode te fazer uma pessoa desatenta às vezes."
            }
        ]
    },
    {
        enunciado: "O que seria mais importante para sua carreira?",
        alternativas: [
            {
                texto: "Segurança e bom salário.",
                afirmacao: "Você é uma pessoa que prefere sempre ter total certeza das opções e os problemas que viriam com suas decisões."
            },
            {
                texto: "Ajudar outras pessoas.",
                afirmacao: "Você é uma pessoa empática, que pode acabar se envolvendo em problemas por sempre colocar os outros na frente de si mesmo."
            }
        ]
    },
    {
        enunciado: "Que tipo de profissional você acha que combina mais com você?",
        alternativas: [
            {
                texto: "Intelectuais.",
                afirmacao: "Você é uma pessoa que sempre está descobrindo coisas novas e fazendo perguntas."
            },
            {
                texto: "Disciplinados e inovadores, tipo Steve Jobs.",
                afirmacao: "Você tem uma ânsia por descobrir coisas novas e ama aprender diferentes conteúdos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você seria...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();