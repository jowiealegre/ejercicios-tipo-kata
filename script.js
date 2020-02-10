/*  hacer una funcion que devuelva los numeros dentro de un array multiplicando cada numero por 2 */
/*function multiplicar (listanum) {
    let numx2=[];
    for (let i=0; i < listanum.length; i++){
        numx2.push (listanum[i] * 2);
    }
    return numx2;
}*/

/* hacer una funcion que devuelva la fcha actual en formato dd/mm/aa*/
let fecha new Date ();
let dia = fecha.getDate ();
let mes = fecha.getMonth ();
let anio =fecha.getFullYear ();
console.log (dia + '/' mes +'/' anio);

