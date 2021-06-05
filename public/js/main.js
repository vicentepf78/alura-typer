var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");


$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);    

});

function atualizaTamanhoFrase(params) {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}


function inicializaContadores() {
    campo.on("input", function() {
    
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);
    
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    
    });
}


function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function() {
        $("#botao-reiniciar").attr("disabled",true);

        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
    
            if(tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
            }
            
        }, 1000);
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);
    $("#botao-reiniciar").attr("disabled",false);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}


function inicializaMarcadores() {
    var frase = $(".frase").text();
    campo.on("input", function () {
        
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);
    
        if(digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
    
} 



function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
}



// Exercicios 

function exercicio0301() {
    var mae = $("#nome-mae");
    var pai = $("#nome-pai");
    
    mae.on("input", function() {
        pai.attr("disabled", true);
    });
    
    pai.on("input", function() {
        mae.attr("disabled", true);
    });
}

function exercicio0303() {
    $(".titulo").text("Meu primeiro blog");
    $("#autor").val("Daniel");
    $("textarea").attr("cols", 40);
    $("textarea").attr("rows", 10);
}

