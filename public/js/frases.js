$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $.get("http://localhost:3000/frases",trocaFraseAleatoria)
    console.log("Cliquei");
};


function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    console.log(data);
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase(data[numeroAleatorio].texto);
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function atualizaTempoInicial(tempo){
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}