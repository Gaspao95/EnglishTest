function mostrarDatos(){
    let nombre = prompt("Como te llamas? ");
    let edad = prompt("Cual es tu edad? ");
    let nacionalidad = prompt("De que pais sos? ");
    alert(`Tu nombre es ${nombre}, tenes ${edad} años y sos de ${nacionalidad}`);
    }
    mostrarDatos()
let respuesta = parseInt(prompt("Desea realizar un cuestionario? Responda 1 si o 0 no"));
while (respuesta != 0){
    alert("Como dirias: Guadalupe y Juana son de Mexico ?");
    let res  = parseInt(prompt("Selecciones la respuesta correcta 1Guadalupe and Juana is from Mexico 2Guadalupe and Juana are Mexican 3Guadalupe and Juana are from Mexico 4Guadalupe and Juana is Mexican"));
    if (res == 3){
        alert("Correcto");
    } else {
        alert("Incorrecto");
    }
    respuesta = parseInt(prompt("Desea realizar un cuestionario? Responda 1 si o 0 no"));
    if (respuesta ==  0){
        break;
    }
    alert("¿Cómo dirías:Ramón trabaja en una fábrica?");
    res  = parseInt(prompt("Selecciones la respuesta correcta 1Ramón works in a factory, 2Ramón work in a factory 3Ramón work in a fabric 4Ramón works in a fabric"));
    if (res == 1){
        alert("Correcto");
    } else {
        alert("Incorrecto");
    }
    respuesta = parseInt(prompt("Desea realizar un cuestionario? Responda 1 si o 0 no"));
    if (respuesta ==  0){
        break;
    }
    alert("¿Cómo dirías?: Es mi coche. Tu coche es el otro.");
    res  = parseInt(prompt("Selecciones la respuesta correcta 1He is my car. Your car is the other one, 2It is my car. Your car is the other one. 3Its my car. Your car is the other one 4It is my car. Its car is the other one"));
    if (res == 3){
        alert("Correcto");
    } else {
        alert("Incorrecto");
    }
    respuesta = parseInt(prompt("Desea realizar un cuestionario? Responda 1 si o 0 no"));
    if (respuesta ==  0){
        break;
    }
    alert("Completa la frase: Rome is famous for _ monuments.");
    res  = parseInt(prompt("Selecciones la respuesta correcta 1her, 2his 3its 4it"));
    if (res == 3){
        alert("Correcto");
    } else {
        alert("Incorrecto");
    }
    respuesta = parseInt(prompt("Desea realizar un cuestionario? Responda 1 si o 0 no"));
    if (respuesta ==  0){
        break;
    }
    alert("Cómo dirías: Hay tres lápices, dos relojes y cuatro diccionarios");
    res  = parseInt(prompt("Selecciones la respuesta correcta 1There are three pencils, two watches and four dictionaries, 2There are three pencils, two watchs and four dictionaries 3There are three pencils, two watches and four dictionarys 4There are three penciless, two watches and four dictionaries"));
    if (res == 1){
        alert("Correcto");
    } else {
        alert("Incorrecto");
    }
    respuesta = parseInt(prompt("Desea realizar un cuestionario? Responda 1 si o 0 no"));
    if (respuesta ==  0){
        break;
    }
    alert("¿Cómo sería la forma negativa de esta frase: She plays tennis with her father");
    res  = parseInt(prompt("Selecciones la respuesta correcta 1She don't play tennis with her father 2She not play tennis with her father 3She doesn't plays tennis with her father 4She doesn't play tennis with her father"));
    if (res == 4){
        alert("Correcto");
    } else {
        alert("Incorrecto");
    }
    respuesta = parseInt(prompt("Desea realizar un cuestionario? Responda 1 si o 0 no"));
    if (respuesta ==  0){
        break;
    }
    alert("¿Cómo se dice Tus pantalones no están aquí ");
    res  = parseInt(prompt("Selecciones la respuesta correcta 1Your pants are not here 2Your pants is not here 3Your pants don't are here 4Your pants not are here"));
    if (res == 1){
        alert("Correcto");
    } else {
        alert("Incorrecto");
    }
    respuesta = parseInt(prompt("Desea realizar un cuestionario? Responda 1 si o 0 no"));
    if (respuesta ==  0){
        break;
    }
    alert("¿Qué pregunta te tendrían que hacer para que la respuesta sea I am from Spain?");
    res  = parseInt(prompt("Selecciones la respuesta correcta 1Were are you from? 2Where are you from? 3Where from you are? 4What is your nationality?"));
    if (res == 2){
        alert("Correcto");
    } else {
        alert("Incorrecto");
    }
    respuesta = parseInt(prompt("Desea realizar un cuestionario? Responda 1 si o 0 no"));
    if (respuesta ==  0){
        break;
    }
    alert("¿Cómo dirías Te gustan mis dibujos ?");
    res  = parseInt(prompt("Selecciones la respuesta correcta 1Are you like my drawings?, 2Do You like mys drawings? 3Do you like my drawings? 4Does you like my drawings?"));
    if (res == 3){
        alert("Correcto");
    } else {
        alert("Incorrecto");
    }
    respuesta = parseInt(prompt("Desea realizar un cuestionario? Responda 1 si o 0 no"));
    if (respuesta ==  0){
        break;
    }
    alert("Cómo dirías 5,321?");
    res  = parseInt(prompt("Selecciones la respuesta correcta 1Five thousand three hundred twenty-one, 2Five miles three hundred twenty-one 3Five thousands three hundreds twenty-one 4Five hundred three thousand twenty-one"));
    if (res == 1){
        alert("Correcto");
    } else {
        alert("Incorrecto");
    }
    respuesta = parseInt(prompt("Desea realizar un cuestionario? Responda 1 si o 0 no"));
}