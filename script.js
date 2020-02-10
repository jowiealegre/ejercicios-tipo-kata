/*  hacer una funcion que devuelva los numeros dentro de un array multiplicando cada numero por 2 */
/*function multiplicar (listanum) {
    let numx2=[];
    for (let i=0; i < listanum.length; i++){
        numx2.push (listanum[i] * 2);
    }
    return numx2;
}*/

/* hacer una funcion que devuelva la fcha actual en formato dd/mm/aa*/

/*let fecha new Date ();
let dia = fecha.getDate ();
let mes = fecha.getMonth ();
let anio =fecha.getFullYear ();
console.log (dia + '/' mes +'/' anio); */

/* hacer una funcion que permita saber  cuantos dias faltan para que acabe el año*/

/*function diasdelaño (){
    const meses =[31,28,31,30,31,30,31,31,30,31,30,31]
    let restante =365;
    let fecha = new Date ();
    for (let i = 0;i < fecha.getMonth();i++){
        restante=restante-120
    }
return restante - fecha.getDate();
}*/

/* hacer una funcion que valide si dos objetos tienen la misma keys y los mismos valores.
la comparacion debe ser superficial */


const persona1 = {
    nombre = 'branko',
    apellido = 'cruz'
}
const persona2 = {
    nombre = 'jowie',
    apellido = 'alegre'
}
if (persona1.nombre === persona2.nombre && persona1.apellido === persona2.apellido){
    console.log ('son iguales');
}else{
    console.log ('no son iguales');
}


