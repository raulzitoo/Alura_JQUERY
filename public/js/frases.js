$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $("#spinner").show();
    $.get("http://localhost:3000/frases",trocaFraseAleatoria)
    .fail(function(){
            $("#erro").show();
            setTimeout(function(){
                $("#erro").toggle();
            },1500);
        })
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