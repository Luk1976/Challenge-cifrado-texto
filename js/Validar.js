function validartexto(texto){
    var caractervalido = new RegExp("[áéíóúÁÉÍÓÚ]|[0-9]","g");
    var caracter = texto;
    var esvalido = false;
    if (texto==""){
        alert("Debe ingresar un caracter");
        return false;
    }
    else{
        if (!caractervalido.test(caracter)){
            return true;
        }
        else{
            alert("No se pueden ingresar acentos o números")
            return false;
        }
    }

}
