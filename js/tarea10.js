
function creadorDelista(max){
    
    if(ObtenerNumDeFamiliares()===0){
        alert("por favor, ingresa un numero de familiares")
    }
    else{
    for (i=0;i<max;i+=1){
        let li=document.createElement("li");
        let classT=document.createAttribute("class")
        classT.value="familiar"
        li.setAttributeNode(classT)
        let label=document.createElement("label");
        label.innerHTML="Familiar";
        let id=document.createAttribute("id")
        id.value="familiar"
        label.setAttributeNode(id)
        document.querySelector("#arrayFamilia").appendChild(li);  
    }
    ocultarBoton(true)
    }
};

function ObtenerArrayFamiliares(){
    let testArray = document.querySelector('#arrayFamilia').getElementsByClassName('familiar')
    return testArray
}


function creadorDeInputs(array,valor){
    for (i=valor;i<array.length;i+=1){
    let label=document.createElement("label");
    label.innerHTML="Familiar"+(i+1);
    let id=document.createAttribute("id")
    id.value="familiar"
    label.setAttributeNode(id)
    let input=document.createElement("input")
    let idA=document.createAttribute("id")
    let type=document.createAttribute("type")
    idA.value="familiarEdad"
    type.value="number"
    let placeholder=document.createAttribute("placeholder")
    placeholder.value="ingresar edad de familiar"

    
    let classT=document.createAttribute("class")
    classT.value="form-control"
    input.setAttributeNode(classT)

    input.setAttributeNode(placeholder)
    input.setAttributeNode(idA)
    input.setAttributeNode(type)
    array[i].appendChild(label)
    array[i].appendChild(input) 
    }
}



function crearMasFamiliares(cantidad){
    let FamiliaresIni=document.querySelector("#botonAgregarInicial")

    if (ObtenerArrayFamiliares().length===0){
        alert("por favor, ingresa un numero de familiares")
       

    }
    
    else{
    let contador=ObtenerArrayFamiliares().length
    for (i=0;i<cantidad;i+=1){
        let li=document.createElement("li");
        let classT=document.createAttribute("class")
        classT.value="familiar"
        li.setAttributeNode(classT)
        let familiar=document.querySelector(".familiar")
        let padre=familiar.parentNode
        padre.insertBefore(li,familiar[-1])
    }
    creadorDeInputs(ObtenerArrayFamiliares(),contador)
    }
}

function ocultarBoton(valor){
    let boton=document.querySelector("#botonAgregarInicial")
    let boton2=document.querySelector("#botonAgregarSecundario")
    let boton3=document.querySelector("#botonQuitarFamiliar")
    let hidden=document.createAttribute("hidden")
    let h2=document.querySelector("#textoH2")
    if (valor===true){
        boton.setAttributeNode(hidden)
        boton2.removeAttribute("hidden")
        boton3.removeAttribute("hidden")
        h2.innerHTML="ahora, te pedimos que rellenes la edad de tus familiares ,son necesarios al menos 2 para poder continuar, te dejamos 2 botones mas por si te equivocaste en el numero de familiares, celda sin valor = 0 "

    }else
    {
        boton.removeAttribute("hidden")
        boton2.setAttributeNode(hidden)
        hidden=document.createAttribute("hidden")
        boton3.setAttributeNode(hidden)
    }
}


function ObtenerEdadMaxima(array) {
    
    if (array.length<=2){
        let hidden=document.createAttribute("hidden")
        H2Cambiante2.setAttributeNode(hidden)
        alert(" es necesario al menos 3 familiares para poder calcular") 
    }else{
        H2Cambiante2.removeAttribute('hidden')
        return Math.max.apply(null, array);
    } 
}

function ObtenerEdadMinima(array) {
    if (array.length<=2){
    }else{
        return Math.min.apply(null, array);
    }
}

function ObtenerPromedio(array){
    if (array.length<=2){
       
    }else{
        let contador=0
        for (i of array){
            contador+=i
        }
        return (contador/array.length)
    }

}

function ObtenerNumDeFamiliares(){
    let numeroPersonas=document.querySelector("#edad")
    let edadNumero=Number(numeroPersonas.value)
    return edadNumero
}

function ObtenerEdadFamiliares(array){
    let arrayValores=[]
    for (i of array){
        arrayValores.push(Number(i.childNodes[1].value))
    }
    return arrayValores
}


function removerFamiliar(){
    let FamiliaresIni=document.querySelector("#botonAgregarInicial")
    let agregarFaSec=document.querySelector("#botonAgregarSecundario")
    let hidden=document.createAttribute("hidden")
    if(ObtenerArrayFamiliares().length===0&&FamiliaresIni.hidden){
        FamiliaresIni.removeAttribute("hidden")
        agregarFaSec.setAttributeNode(hidden)
    }else if (ObtenerArrayFamiliares().length>0){
    ObtenerArrayFamiliares()[ObtenerArrayFamiliares().length-1].remove()
    }
}

let H2Cambiante1=document.querySelector("#textoH2")
let H2Cambiante2=document.querySelector("#textoH2B")





