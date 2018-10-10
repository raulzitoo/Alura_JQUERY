function inserePlacar(){
    var tbory = $(".placar").find("tbody");
    var usuario = "Raul";
    var numeroPalavras = $("#contador-palavras").text();
    tbory.prepend(inserelinha(usuario,numeroPalavras));
}

function inserelinha(usuario,numeroPalavras){

    var linha = $("<tr>");
    var tdUsuario = $("<td>").text(usuario);
    var tdNumeroPalavras = $("<td>").text(numeroPalavras);
    var tdRemove = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete_forever");

    linha.append(tdUsuario);
    linha.append(tdNumeroPalavras);
    link.append(icone);
    tdRemove.append(link);
    linha.append(tdRemove);

    linha.find(".botao-remover").click(removerLinha)
    return linha;
}

$(".botao-remover").click(removerLinha);

function removerLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
}