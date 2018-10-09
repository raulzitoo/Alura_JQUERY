var frase = $(".frase").text();
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
});




function atualizaTamanhoFrase(){
    var palavras = frase.split(" ").length;
    console.log(frase);
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
                    campo.toggleClass("campo-desativado");
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
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha"); 
    campo.removeClass("borda-verde"); 
}

function inicializaMarcadores(){
    campo.on("input",function(){
        var digitado = campo.val();
        var comparavel = frase.substr(0,digitado.length);
        if(comparavel == digitado)
        {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    
    });

}

