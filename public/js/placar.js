$("#botao-placar").click(mostraPlacar);

function mostraPlacar(){
    $(".placar").stop().slideToggle(600);                
}

function inserePlacar(){
    var tbory = $(".placar").find("tbody");
    var usuario = "Raul";
    var numeroPalavras = $("#contador-palavras").text();
    tbory.prepend(inserelinha(usuario,numeroPalavras));
    scrollPLacar();
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
    $(".placar").slideDown(500);
    
    return linha;
    
}

function scrollPLacar(){
    var posicaoPlacar = $(".placar").offset().top;
    $("html,body").animate(
    {
        scrollTop:  posicaoPlacar + "px"
    }, 1000);

    console.log($("body"));
}

$(".botao-remover").click(removerLinha);

function removerLinha(event){
    event.preventDefault();
    var linha =  $(this).parent().parent();
    linha.fadeOut(1000);

    setTimeout(function(){

        linha.remove();
    },1000);
}


$("#botao-sync").click(sincronizaPlacar);


function sincronizaPlacar(){

    var placar = [];
    var linhas = $("tbody>tr");
    console.log(linhas);
    linhas.each(function() {
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        var score = {
            usuario : usuario,
            pontos : palavras
        };

        placar.push(score);
    });

    var dados = {
        placar : placar
    };
    $.post("http://localhost:3000/placar",dados,function(){
        console.log("Placar sincronizado com sucesso!");
    });
};

function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(data){
        $(data).each(function(){
            var linha  = inserelinha(this.usuario,this.pontos);
            $("tbody").append(linha);
        });
    });
};