var btnencriptar = document.querySelector("#btn-encriptar");
var textoencriptado = "";
btnencriptar.addEventListener("click",function(event){  
    event.preventDefault();

    var formulario = document.querySelector("#formulario");
    var textocapturado = formulario.inputtexto.value.toLowerCase();
    var caracteractual; 

    if (validartexto(textocapturado)){
        for (var i = 0; i < textocapturado.length ; i++){
            caracteractual=textocapturado.charAt(i);
            if (caracteractual=="e"){ 
                textoencriptado = textoencriptado + 'enter';
            }
            else{      
                if (caracteractual=="i"){ 
                textoencriptado = textoencriptado + 'imes';
                }
                else{
                    if (caracteractual=="o"){ 
                        textoencriptado = textoencriptado + 'ober';
                     }
                     else{
                        if (caracteractual=="u"){ 
                            textoencriptado = textoencriptado + 'ufat';
                         }
                         else{
                            if (caracteractual=="a"){ 
                                textoencriptado = textoencriptado + 'ai';
                             }
                             else{
                                textoencriptado = textoencriptado + caracteractual;
                             };
                         };
                     };
                };
            };
        };

    }
    var msjencriptado = document.querySelector("#msg");
    msjencriptado.value = textoencriptado;
    var cabiatexto = document.querySelector("#mensaje-desencriptado");
    cabiatexto.textContent="Mensaje encriptado:"
    textocapturado='';
    textoencriptado=''; 
    formulario.reset();     
});