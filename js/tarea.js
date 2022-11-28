//pregunta_user_salarioA=prompt("¿cuanto cobras por año?");
function calcular_salario(mensual,diario,hora,salario,dias_trabajados_semana,horas_ala_semana)
 {
    let dias_trabajado_por_semana=dias_trabajados_semana
    let horas_al_dia=horas_ala_semana
    let dias_al_año=dias_trabajado_por_semana*52.14285714
    let horas_al_año=dias_al_año*horas_al_dia
    if(mensual){
        return (salario/12)
    }
    if(diario){
        return (salario/dias_al_año)
    }if(hora){
        return (salario/horas_al_año )
    }
};
//console.log(calcular_salario(true,false,false,pregunta_user_salarioA,7,8));
//console.log(calcular_salario(false,true,false,pregunta_user_salarioA,7,8));
//console.log(calcular_salario(false,false,true,pregunta_user_salarioA,7,8));

//let test=document.querySelector("#name")
//let test2=Number(test.value)
//test2
/*
const test3=document.querySelector("#un_boton")
test3.onClick=function(){
    alert("desu")
};

function test() {
    alert("desu")
}

let test4 =document.getElementById("otro_boton")
test4.onclick=function(){
    alert("desu")
};

document.getElementById("un_botoncito").onclick=function(){
    alert("desu")
};
const test5=document.querySelector("#un_botoncito_mas")
test5.onclick=function(){
    alert("desu")
};
//cuidado con el onclick, no funciona en mayuscula "onClick"(esto esta mal)
//"onclick"(esto esta bien)
let test6=document.querySelector("#un_botoncito_diferente")
test6.onclick=function(){
    alert("desu")
};
*/
// ok, aca tenemos muchas formas de llamar a un boton con js(y aplicarle codigo)
//todos son intercambiables , por lo que, si queres en el input directamente la funcion test()
//mandale el onClick alla(en html, si va con mayuscula), creo que es lo mas facil(a menos por ahora), aca solo hice todas para que quede claro
//vamos a hacerla facil, vamos a escribir aca lo que tenemos que hacer, y lo hacemos, 
//no hay que pensar mucho, solo ordenar lo que ya tenemos
//tenemos que calcular el sueldo de alguien, y esto lo hacemos al tocar un boton
//por lo que tenemos que , capturar los valores del formulario, y mostrarlos, en algun lado
//ya tenemos todo, solo tenemos que hacer el boton, las capturas
//luego, hay que mostrarlo en la pantalla, en el tag que quieras
//bueno, primero tenemos que capturar el nombre , el sueldo anual,los flags, y los dias y horas trabajadas
//luego, hay que ponerlas en una variable.
//luego, usando esas bariables, las usamos en la funcion sueldo
//creamos un botos para llamar a la funcion sueldo
//y los mostramos en la pagina , con un H

let nombre=document.querySelector("#nombre");
let sueldo=document.querySelector("#sueldo");
let dias_trabajados=document.querySelector("#dias");
let horas_trabajadas=document.querySelector("#horas");


let array_flags=document.querySelector("#array_flags");
function flags_selector(){
    let flag_mes=false
    let flag_dia=false
    let flag_hora=false
    
    if (array_flags.value==="mes"){
        //console.log("año");
        //console.log("no mes");
        //console.log("no dia");
        flag_mes=true
        flag_dia=false
        flag_hora=false
    }else if(array_flags.value==="dia"){
        //console.log("no año");
        //console.log("mes");
        //console.log("no dia");
        flag_mes=false
        flag_dia=true
        flag_hora=false
    }else{
        //console.log("no año");
        //console.log("no mes");
        //console.log("dia");
        flag_mes=false
        flag_dia=false
        flag_hora=true
    }
    let array=[flag_mes,flag_dia,flag_hora]
    return array
    
}
let H2=document.querySelector("#texto_que_cambia")


//calcular_salario(flags_selector()[0],flags_selector()[1],flags_selector()[2],Number(sueldo.value),
//      Number(dias_trabajados.value),Number(horas_trabajadas.value)
//)

