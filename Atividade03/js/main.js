
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
            "pergunta": "Traduza a palavra: <b class='complete-me'>[SLY]</b>",
            "resposta1": "Preguiçoso",
            "resposta2": "Esperto",
            "resposta3": "Malicioso",
            "resposta4": "Água",
            "resposta5": "Comida",
            "resposta6": "Manhoso",
            "opcao"    : "Manhoso"
        },
        {
            "pergunta": "Traduza a frase: <b class='complete-me'>[The sky is a neighborhood]</b>",
            "resposta1": "Existe um gato na calçada",
            "resposta2": "O céu é sua casa",
            "resposta3": "O céu é azul",
            "resposta4": "O céu é sua vizinhança",
            "resposta5": "Existe um cachorro na varanda",
            "resposta6": "Existe um lagarto na alface",
            "opcao"    : "O céu é sua vizinhança"
        },
        {
            "pergunta": "Traduza a frase: <b class='complete-me'>[Yeah, it's alright]</b>",
            "resposta1": "Sim, não está tudo bem",
            "resposta2": "Sim, está tudo bem",
            "resposta3": "Talvez esteja tudo bem",
            "resposta4": "Water",
            "resposta5": "Food",
            "resposta6": "Sim, estamos todos bem",
            "opcao"    : "Sim, está tudo bem"
        },
        {
            "pergunta": "Traduza a palavra: <b class='complete-me'>[BALL]</b>",
            "resposta1": "Sorvete",
            "resposta2": "Maionese",
            "resposta3": "Malicioso",
            "resposta4": "Panela",
            "resposta5": "Bola",
            "resposta6": "Iogurte",
            "opcao"    : "Bola"
        },
        {
            "pergunta": "Traduza a frase: <b class='complete-me'>[One of these days]</b>",
            "resposta1": "Cachorro",
            "resposta2": "Um dos dias",
            "resposta3": "Dias melhores virão",
            "resposta4": "Dias atrás",
            "resposta5": "Esses dias estão complicados",
            "resposta6": "Um destes dias",
            "opcao"    : "Um destes dias"
        },
        {
            "pergunta": "Traduza a frase: <b class='complete-me'>[When it comes around, then it's taken away]</b>",
            "resposta1": "Quando isso chega, e o tiram de mim",
            "resposta2": "Quando isso chega, e não sai de mim",
            "resposta3": "Quando isso chega, e o levam embora",
            "resposta4": "Quando isso chega, então ele vai embora",
            "resposta5": "Quando isso chega, então e eles vão embora",
            "resposta6": "Quando isso chega, então elas vão embora",
            "opcao"    : "Quando isso chega, então ele vai embora"
        },
        {
            "pergunta": "Traduza a frase: <b class='complete-me'>[It's the same as yesterday]</b>",
            "resposta1": "É a mesma coisa de semana passada",
            "resposta2": "É a mesma coisa de ontem a tarde",
            "resposta3": "É a mesma coisa de ontem",
            "resposta4": "É a mesma coisa de ontem de manhã",
            "resposta5": "Sempre é a mesma coisa",
            "resposta6": "Ontem foi um dia dificil",
            "opcao"    : "É a mesma coisa de ontem"
        },
        {
            "pergunta": "Traduza a frase: <b class='complete-me'>[Nothing in this world can take the place of persistence]</b>",
            "resposta1": "Nada neste mundo pode tomar o lugar da perenigração",
            "resposta2": "Nada neste mundo pode ser melhor que perenigração",
            "resposta3": "Nada neste mundo pode tomar o lugar da persistencia",
            "resposta4": "Nada neste mundo pode tomar o lugar da determinação",
            "resposta5": "Nada neste mundo pode tomar o lugar do trabalho",
            "resposta6": "Nada neste mundo é melhor que perenigração",
            "opcao"    : "Nothing in this world can take the place of persistence"
        },
        {
            "pergunta": "Traduza a frase: <b class='complete-me'>[A man is what he thinks about all day long]</b>",
            "resposta1": "O homem é o que ele costuma estudar durante todo o dia",
            "resposta2": "O homem é o que ele costuma praticar durante todo o dia",
            "resposta3": "O homem é o que ele costuma fazer durante todo o dia",
            "resposta4": "O homem é o que ele costuma pensar durante todo o dia",
            "resposta5": "O homem é o que ele costuma a pensar",
            "resposta6": "O homem é o que ele costuma a sonhar",
            "opcao"    : "O homem é o que ele costuma pensar durante todo o dia"
        }
    ]
};
}

function startGame(){
        
    listaPerguntas = retornaPerguntas().dados;
    countPerguntas = $(listaPerguntas).size();

    $("#btnsair").on("click", function() {
        window.location.href = "https://michelmanarin.github.io/portfolio.html";
    });

    $("#btnrecomecar").on("click", function() {
        location.reload();
    });

    $("[id^='resposta']").each(function(index, element) {
                
        $(element).parent().on("click", function() {
            finalizeRodada($(element));
        });
    });

    novaRodada();
}

function novaRodada(){

    console.log("novarodada");

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

