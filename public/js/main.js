var frase = $(".frase").text();
var palavras = frase.split(" ").length;
$("#tamanho-frase").text(palavras);
var campo = $(".campo-digitacao");
campo.on("input",function(){
    console.log(campo.val());
    $("#contador-caracteres").text(campo.val().length);
    $("#contador-palavras").text(campo.val().split(/\S+/).length -1);
});
