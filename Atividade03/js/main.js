
var countRodada = 1;
var acertadas = 0;
var erradas = 0;
var posicao = 0;
var perguntas = null;
var elementsOptions = null;

$(document).ready(function(){
    
    var elementsOptions = $("[id^='resposta']")
    startGame();
    

});

function retornaPerguntas(){
    return {"dados":[
        {
            "pergunta": "Monday, Tuesday,<b class='complete-me'>[?]</b>.",
            "resposta1": "Friday",
            "resposta2": "Wednesday",
            "resposta3": "Saturday",
            "resposta4": "Yesterday",
            "resposta5": "Good",
            "resposta6": "Thursday",
            "opcao"    :  "Wednesday"
        },
        {
            "pergunta": "Tradução a palavra: <b class='complete-me'>[SLY]</b>",
            "resposta1": "Preguiçoso",
            "resposta2": "Esperto",
            "resposta3": "Malicioso",
            "resposta4": "Água",
            "resposta5": "Comida",
            "resposta6": "Manhoso",
            "opcao"    : "Manhoso"
        }
    ]
};
}

function startGame(){
    
    perguntas = retornaPerguntas().dados;
    novaRodada();
    FinalizaJogo();
}

function novaRodada(){

    posicao = Math.floor(Math.random()*$(perguntas).size());

    $("[id^='resposta']").each(function(index, element) {
                
        $(".pergunta").html(perguntas[posicao].pergunta);

        if (index == 0){
            $(element).text(perguntas[posicao].resposta1);
        } else if (index == 1){
            $(element).text(perguntas[posicao].resposta2);
        } else if (index == 2){
            $(element).text(perguntas[posicao].resposta3);
        } else if (index == 3){
            $(element).text(perguntas[posicao].resposta4);
        } else if (index == 4){
            $(element).text(perguntas[posicao].resposta5);
        } else if (index == 5){
            $(element).text(perguntas[posicao].resposta6);
        }

        $(element).parent().on("click", function() {
            finalizeRodada($(element));
        });

    });

   
}

function AjustarInfo(){
    let percentual = ((acertadas + erradas) / acertadas * 100);
    $("#percentual").text(percentual.toString());
}

function FinalizaJogo(){

}

function finalizeRodada(element){
    
   

    countRodada += 1;

    if ($(element).text() == perguntas[posicao].opcao){
        acertadas += 1;
    } else {
        erradas += 1;
    }
    perguntas.splice(posicao, 1);

    AjustarInfo();

    if ($(perguntas).size() == 0){
        return "";
    } else {
        //alert("novarodada");
        novaRodada();
    }

}

function inicializaMarcadores() {

    var frase = $("#resposta").text();
    campo.on("input", function() {
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);

        if (digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
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