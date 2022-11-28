
function creadorDelista(max){
    
    if(capturarNumero()===0){
        alert("por favor, ingresa un numero de familiares")
    }
    else{
    for (x=0;x<max;x+=1){
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
    ocultadorBoton(true)
    }
};

function arrayTrabajo(){
    let testArray = document.querySelector('#arrayFamilia').getElementsByClassName('familiar')
    return testArray
}


function creadorDeInputs(array,valor){
    for (x=valor;x<array.length;x+=1){
    let label=document.createElement("label");
    label.innerHTML="Familiar"+(x+1);
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
    array[x].appendChild(label)
    array[x].appendChild(input) 
    }
}



function crearMasFamiliares(cantidad){
    let FamiliaresIni=document.querySelector("#botonAgregarInicial")

    if (arrayTrabajo().length===0){
        alert("por favor, ingresa un numero de familiares")
       

    }
    
    else{
    let contador=arrayTrabajo().length
    for (x=0;x<cantidad;x+=1){
        let li=document.createElement("li");
        let classT=document.createAttribute("class")
        classT.value="familiar"
        li.setAttributeNode(classT)
        let familiar=document.querySelector(".familiar")
        let padre=familiar.parentNode
        padre.insertBefore(li,familiar[-1])
    }
    creadorDeInputs(arrayTrabajo(),contador)
    }
}

function ocultadorBoton(valor){
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


function maximoArray(array) {
    
    if (array.length<=2){
        let hidden=document.createAttribute("hidden")
        H2Cambiante2.setAttributeNode(hidden)
        alert(" es necesario al menos 3 familiares para poder calcular")
        
        
    }else{
        H2Cambiante2.removeAttribute('hidden')
        return Math.max.apply(null, array);
        
        
    } 
}

function minimoArray(array) {
    if (array.length<=2){
       
    }else{
        
        return Math.min.apply(null, array);
    }
}

function promedio(array){
    if (array.length<=2){
       
    }else{
        let contador=0
        for (x of array){
            contador+=x
        }
        return (contador/array.length)
    }

}

function capturarNumero(){
    let numeroPersonas=document.querySelector("#edad")
    let edadNumero=Number(numeroPersonas.value)
    return edadNumero
}

function arrayValoresFamiliares(array){
    let arrayValores=[]
    for (x of array){
        arrayValores.push(Number(x.childNodes[1].value))
    }
    return arrayValores
}


function removerFamiliar(){
    let FamiliaresIni=document.querySelector("#botonAgregarInicial")
    let agregarFaSec=document.querySelector("#botonAgregarSecundario")
    let hidden=document.createAttribute("hidden")
    if(arrayTrabajo().length===0&&FamiliaresIni.hidden){
        FamiliaresIni.removeAttribute("hidden")
        agregarFaSec.setAttributeNode(hidden)
    }else if (arrayTrabajo().length>0){
    arrayTrabajo()[arrayTrabajo().length-1].remove()
    }
}

let H2Cambiante1=document.querySelector("#textoH2")
let H2Cambiante2=document.querySelector("#textoH2B")





