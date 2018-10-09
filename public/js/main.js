var frase = $(".frase").text();
var palavras = frase.split(" ").length;
$("#tamanho-frase").text(palavras);
var campo = $(".campo-digitacao");
campo.on("input",function(){
    console.log(campo.val());
    $("#contador-caracteres").text(campo.val().length);
    $("#contador-palavras").text(campo.val().split(/\S+/).length -1);
});

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