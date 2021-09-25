function acciones_onsubmit() {
    alert("sdfasdg");
    var valor_cajatexto = document.getElementById("caja_texto").value;
    var valor_textarea = document.getElementById("descripcion").value;
    console.log(valor_cajatexto, valor_textarea);
    var elementos_rb = document.getElementsByName("pregunta");
    for (var i = 0; i < elementos_rb.length; i++) {
        console.log(" Elemento: " + elementos_rb[i].value + "\n Seleccionado: " + elementos_rb[i].checked);
    }
    var elemento_cb = document.getElementById("condiciones");
    console.log(" Elemento: " + elemento_cb.value + "\n Seleccionado: " + elemento_cb.checked);
    var elemento_cb = document.getElementById("privacidad");
    console.log(" Elemento: " + elemento_cb.value + "\n Seleccionado: " + elemento_cb.checked);
    var lista = document.getElementById("opciones");
    var indiceSeleccionado = lista.selectedIndex;
    var opcionSeleccionada = lista.options[indiceSeleccionado];
    var textoSeleccionado = opcionSeleccionada.text;
    var valorSeleccionado = opcionSeleccionada.value;
    var valorSeleccionado = lista.options[lista.selectedIndex].value;
}
function focusFunction() {
    document.getElementById("descripcion");
    console.log("onfocus");
}
function blurFunction() {
    document.getElementById("descripcion");
    console.log("onblur");
}