function seleccionarTexto() {
  let desde = msg.selectionStart;
  let hasta = msg.selectionEnd;
  let sel = msg.value.substring(desde, hasta);

  if (sel.length > 0) {// si hay algo seleccionado.
    navigator.clipboard.writeText(sel.value);
    return sel;
  } else { // de lo contrario selecciona todo el texto.
    navigator.clipboard.writeText(msg.value);
    return msg.select(); 
  }
}

var btncopiar = document.querySelector("#btn-copy");
btncopiar.addEventListener("click", () => {  
  seleccionarTexto();
});
