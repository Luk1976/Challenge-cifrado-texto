function seleccionarTexto() {
    let desde = msg.selectionStart;
    let hasta = msg.selectionEnd;
    let sel = msg.value.substring(desde, hasta);
  
    if (sel.length > 0) {// si hay algo seleccionado.
      return sel;
    } else { // de lo contrario selecciona todo el texto.
      return msg.select();
    }
  }
  
  var btncopiar = document.querySelector("#btn-copy");
  btncopiar.addEventListener("click", () => {  
    seleccionarTexto();
    try {
      let exito = document.execCommand("copy"); // devuelve true o false.
      // el mensaje a sacar en consola en caso de éxito o de error.
      let mensage = exito ? "\xe9xito" : "error";
    } catch (error) {
      let err = error;
    }
  });

