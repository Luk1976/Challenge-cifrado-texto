var btndesencriptar = document.querySelector("#btn-desencriptar");
var textodesencriptado = "";
btndesencriptar.addEventListener("click",function(event){  
    event.preventDefault();
    var formulario = document.querySelector("#formulario");
    var textocapturado = formulario.inputtexto.value.toLowerCase();
    var expresion1 = new RegExp("enter","g");
    var expresion2 = new RegExp("imes","g");
    var expresion3 = new RegExp("ober","g");
    var expresion4 = new RegExp("ufat","g");
    var expresion5 = new RegExp("ai","g");

    if (validartexto(textocapturado)){
        textodesencriptado = textodesencriptado + textocapturado.replace(expresion1,"e");
        textocapturado = textodesencriptado;
        textodesencriptado = textocapturado.replace(expresion2,"i");
        textocapturado = textodesencriptado;
        textodesencriptado = textocapturado.replace(expresion3,"o");
        textocapturado = textodesencriptado;
        textodesencriptado = textocapturado.replace(expresion4,"u");
        textocapturado = textodesencriptado;
        textodesencriptado = textocapturado.replace(expresion5,"a");
        var msjencriptado = document.querySelector("#msg");
        msjencriptado.value = textodesencriptado;
    
        var cabiatexto = document.querySelector("#mensaje-desencriptado");
        cabiatexto.textContent="Mensaje desencriptado:"
    }
    textocapturado='';
    textodesencriptado=''; 
    formulario.reset();

});