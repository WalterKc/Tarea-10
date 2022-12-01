
function CapturarNombre(){
    let nombre=document.formulario.nombre.value
    return nombre

}
function CapturarComportamiento(){
    let comportamiento=document.formulario.comportamiento.value
    return comportamiento

}
function CapturarCiudad(){
    let ciudad=document.formulario.ciudad.value
    return ciudad
    
}
function CapturarRegalo(){
    let Regalo=document.formulario["descripcion-regalo"].value
    return Regalo

}

function validarNombre (nombre) {
    if (0 === nombre.length) {
        return "Este campo debe tener al menos 1 caracter";
    }

    if (50 <= nombre.length) {
        return "Este campo debe tener menos de 50 caracteres";
    }

    return "";
}

function validarCiudad(ciudad) {
    if ("" === ciudad) {
        return "seleccione una opcion";
    }

    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (0 === descripcionRegalo.length) {
        return "Este campo debe tener al menos 1 caracter";
    }

    if (50 <= descripcionRegalo.length) {
        return "Este campo debe tener menos de 50 caracteres";
    }

    return "";
}

function CapturarErrorNombre(){
    return (!/^([a-z]){3,16}$/i.test(CapturarNombre()))

}
function CapturarErrorCiudad(){
    if(CapturarCiudad().length===0){
        return true
    }else{
        return false
    }

}
function CapturarErrorRegalo(){
    return (!/^([a-z]){3,50}$/i.test(CapturarRegalo()))

}

function pagina(){
    return window.location.href = 'wishlist.html'
}
let form=document.formulario;
function ControladorDeErrores(loQueMandaElHTML){
    
    let ArrayErrores=[CapturarErrorNombre(),
    CapturarErrorCiudad(),
    CapturarErrorRegalo()]
    let sinErrores=true
    
    for (x of ArrayErrores){
        if (x===true){
            loQueMandaElHTML.preventDefault()
            sinErrores=false
            break 
            
        }else{
            sinErrores=true 
            loQueMandaElHTML.preventDefault()
        }
        
    }
    
    if (sinErrores){
        let test=document.createAttribute("hidden")
        form.setAttributeNode(test)
        let oculto=document.querySelector("#exito")
        oculto.removeAttribute("hidden")
        loQueMandaElHTML.preventDefault()
        setTimeout(pagina,5000)

    }
}

form.onsubmit=ControladorDeErrores




