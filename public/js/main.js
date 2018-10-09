var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
});


$("#botao-reiniciar").click(reiniciaJogo);


function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var palavras = frase.split(" ").length;
    $("#tamanho-frase").text(palavras);
}

function inicializaContadores(){
    campo.on("input",function(){
        console.log(campo.val());
        $("#contador-caracteres").text(campo.val().length);
        $("#contador-palavras").text(campo.val().split(/\S+/).length -1);
    });
}

function inicializaCronometro(){
    
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus",function(){ 
        var cronometroId = setInterval(function(){
                tempoRestante --;
                $("#tempo-digitacao").text(tempoRestante);
                if (tempoRestante < 1){
                    campo.attr("disabled",true);
                    clearInterval(cronometroId);
                }else{
                        
                }        
            },1000);    
    });
}


function reiniciaJogo(){
    campo.attr("disabled",false);
    campo.val("");
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
}