
var countRodada = 1;
var countPerguntas = 0;
var acertadas = 0;
var erradas = 0;
var posicao = 0;
var listaPerguntas = null;
var elementsOptions = null;

// Metodo principal
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
        
    listaPerguntas = retornaPerguntas().dados;
    countPerguntas = $(listaPerguntas).size();
    novaRodada();
}

function novaRodada(){

    
    ajustarInfo();

    posicao = Math.floor(Math.random()*$(listaPerguntas).size());

    $("[id^='resposta']").each(function(index, element) {
                
        $(".pergunta").html(listaPerguntas[posicao].pergunta);

        if (index == 0){
            $(element).text(listaPerguntas[posicao].resposta1);
        } else if (index == 1){
            $(element).text(listaPerguntas[posicao].resposta2);
        } else if (index == 2){
            $(element).text(listaPerguntas[posicao].resposta3);
        } else if (index == 3){
            $(element).text(listaPerguntas[posicao].resposta4);
        } else if (index == 4){
            $(element).text(listaPerguntas[posicao].resposta5);
        } else if (index == 5){
            $(element).text(listaPerguntas[posicao].resposta6);
        }

        $(element).parent().on("click", function() {
            finalizeRodada($(element));
        });

    });

   
}

function ajustarInfo(){
    $("#questao").text(countPerguntas - ($(listaPerguntas).size()) + 1 + "ª QUESTÃO");
    $("#respondidas").text(  countPerguntas - ($(listaPerguntas).size()) + "/" + countPerguntas);
}

function finalizaGame(){
    $("#game").css("display","none");    
    $("#resultado").css("display","block");    
    $("#acertos").text(acertadas.toString());  
    $("#erros").text(erradas.toString());  


    if (acertadas == 0)
        $("#aproveitamento").text(0);
    else {
        let percentual = (acertadas*100) /(acertadas + erradas);
        $("#aproveitamento").text(percentual);  
    }    
}

function finalizeRodada(element){
    
   

    countRodada += 1;

    if ($(element).text() == listaPerguntas[posicao].opcao){
        acertadas += 1;
    } else {
        erradas += 1;
    }
    listaPerguntas.splice(posicao, 1);

    
    ajustarInfo();

    if ($(listaPerguntas).size() == 0){
        finalizaGame();
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