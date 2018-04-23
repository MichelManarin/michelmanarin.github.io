var perguntas = [
    {
        "pergunta": "Monday, Tuesday,<b class='complete-me'>[?]</b>.",
        "resposta1": "Friday",
        "resposta2": "Wednesday",
        "resposta3": "Saturday",
        "resposta4": "Yesterday",
        "resposta5": "Good",
        "resposta6": "Thursday"
    },
    {
        "pergunta": "Monday, Tuesday,<b class='complete-me'>[?]</b>.",
        "resposta1": "Friday",
        "resposta2": "Wednesday",
        "resposta3": "Saturday",
        "resposta4": "Yesterday",
        "resposta5": "Good",
        "resposta6": "Thursday"
    },
    {
        "pergunta": "Monday, Tuesday,<b class='complete-me'>[?]</b>.",
        "resposta1": "Friday",
        "resposta2": "Wednesday",
        "resposta3": "Saturday",
        "resposta4": "Yesterday",
        "resposta5": "Good",
        "resposta6": "Thursday"
    },
    {
        "pergunta": "Monday, Tuesday,<b class='complete-me'>[?]</b>.",
        "resposta1": "Friday",
        "resposta2": "Wednesday",
        "resposta3": "Saturday",
        "resposta4": "Yesterday",
        "resposta5": "Good",
        "resposta6": "Thursday"
    },
    {
        "pergunta": "Monday, Tuesday,<b class='complete-me'>[?]</b>.",
        "resposta1": "Friday",
        "resposta2": "Wednesday",
        "resposta3": "Saturday",
        "resposta4": "Yesterday",
        "resposta5": "Good",
        "resposta6": "Thursday"
    },
    {
        "pergunta": "Monday, Tuesday,<b class='complete-me'>[?]</b>.",
        "resposta1": "Friday",
        "resposta2": "Wednesday",
        "resposta3": "Saturday",
        "resposta4": "Yesterday",
        "resposta5": "Good",
        "resposta6": "Thursday"
    },
    {
        "pergunta": "Monday, Tuesday,<b class='complete-me'>[?]</b>.",
        "resposta1": "Friday",
        "resposta2": "Wednesday",
        "resposta3": "Saturday",
        "resposta4": "Yesterday",
        "resposta5": "Good",
        "resposta6": "Thursday"
    },
    {
        "pergunta": "Monday, Tuesday,<b class='complete-me'>[?]</b>.",
        "resposta1": "Friday",
        "resposta2": "Wednesday",
        "resposta3": "Saturday",
        "resposta4": "Yesterday",
        "resposta5": "Good",
        "resposta6": "Thursday"
    },
    {
        "pergunta": "Monday, Tuesday,<b class='complete-me'>[?]</b>.",
        "resposta1": "Friday",
        "resposta2": "Wednesday",
        "resposta3": "Saturday",
        "resposta4": "Yesterday",
        "resposta5": "Good",
        "resposta6": "Thursday"
    },
    {
        "pergunta": "Monday, Tuesday,<b class='complete-me'>[?]</b>.",
        "resposta1": "Friday",
        "resposta2": "Wednesday",
        "resposta3": "Saturday",
        "resposta4": "Yesterday",
        "resposta5": "Good",
        "resposta6": "Thursday"
    },
    {
        "pergunta": "Monday, Tuesday,<b class='complete-me'>[?]</b>.",
        "resposta1": "Friday",
        "resposta2": "Wednesday",
        "resposta3": "Saturday",
        "resposta4": "Yesterday",
        "resposta5": "Good",
        "resposta6": "Thursday"
    }
];

var countRodada = 0;
var acertadas = 0;
var erradas = 0;

var listaRespostas = $("#resposta");

$(function() {
    //inicializaContadores();
});


function iniciarRodada(){

    $.each(perguntas, function() {
        $.each(this, function(index, value) {
                console.log(index + '=' + value);
        });
    });
        


}

function inicializaContadores() {

    countRodada = 0;
    acertadas = 0;
    erradas = 0;

    listaRespostas
    

    listaRespostas

    campo.on("input", function() {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}