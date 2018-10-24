$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $("#spinner").show();
    $.get("http://localhost:3000/frases",trocaFraseAleatoria)
    .fail(falha)
    .always(function(){
                $("#spinner").toggle();
            });    
    console.log("Cliquei");
};


function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    console.log(data);
    frase.text(data[numeroAleatorio].texto);
    fraseInicial = data[numeroAleatorio].texto;
    atualizaTamanhoFrase(data[numeroAleatorio].texto);
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function atualizaTempoInicial(tempo){
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}

$("#botao-frase-id").click(buscaFrase);

function buscaFrase(){
    
    $("#spinner").show();
    var fraseId = $("#frase-id").val();
    var dados = {id : fraseId};

    $.get("http://localhost:3000/frases",dados,trocaFrase)
     .fail(falha)
     .always(function(){
        $("#spinner").toggle();
     });
};

function falha(){
    $("#erro").show();
    setTimeout(function(){
        $("#erro").toggle();
    },1500);
}


function trocaFrase(data){
    var frase = $(".frase");
    console.log(data);
    frase.text(data.texto);
    fraseInicial = data.texto;
    atualizaTamanhoFrase(data.texto);
    atualizaTempoInicial(data.tempo);
}