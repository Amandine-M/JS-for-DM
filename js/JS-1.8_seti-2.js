/**
 * COPY datas
 */
let antenne1 = [...antenne_1],
    antenne2 = [...antenne_2],
    antenne3 = [...antenne_3];


/** CLEAN datas
 *  -> from satelitte's datas, 
 *  -> antenna's error 
 *  -> and missile's waves
 * 
 *   1)    errors: to delete 30 datas after index 402  
 *              -> antenne1 ou antenne2 ou antenne3     (les 3? )                          
 *              -> .splice(index, howMany)
 * 
 * 
 * 
 *   2)    satellite: to delete those between 0.63 and 0.69 
 *              -> boucle sur les valeurs du tableau
 *              -> si condition .splice(i,1)
 * 
 * 
 *   3)     missile:  to delete 0.26168885291554034, 0.5412812635768205, 0.7692816550843418
 *              idem 2)
 *              
 * 
 */

// 1)
// antenne1.splice(402,30);
// antenne2.splice(402,30);
// antenne3.splice(402,30);


let start = 402;
let deleteCount = 30;
let errors = { 'start' : start, 'deleteCount' : deleteCount };


// En fonction de l'antenne défectueuse, nous n'aurons pas les mêmes résultats
// let badAntenna = antenne1;
// let badAntenna = antenne2;
// let badAntenna = antenne3;

let antennes = [];
let badAntenna = [1, 2, 3];
let x = prompt("Quelle antenne est défectueuse ? ( 1, 2 ou 3)", 1);
x = parseInt(x) - 1;

// x = 1;
switch (badAntenna[x]) {
    case 1:
        deleteDatas(antenne1, errors);
        antennes = [].concat(antenne1,antenne2,antenne3);
        console.log("antenne 1 défectueuse : " + antennes.length);
        break;

    case 2:
        deleteDatas(antenne2, errors);
        antennes = [].concat(antenne1,antenne2,antenne3);
        console.log("antenne 2 défectueuse : " + antennes.length);
        break;

    case 3:
        deleteDatas(antenne3, errors);
        antennes = [].concat(antenne1,antenne2,antenne3);
        console.log("antenne 3 défectueuse : " + antennes.length);
        break;

    default:
        antennes = [].concat(antenne1,antenne2,antenne3);
        break;
}


// for( var i = 0; i < antennes.length; i++ ){ 
//     condition1 = ( antennes[i] > 0.63 ) && ( antennes[i] < 0.69 );
//     condition2 = (antennes[i] == 0.26168885291554034 || antennes[i] == 0.5412812635768205 || antennes[i] ==  0.7692816550843418);
    
//     if ( condition1 || condition2) { 
//         antennes.splice(i, 1); 
//     }
// } 

// IDENTIQUE A :

for (const [index,value] of antennes.entries()) {
    let condition1 = (value > 0.63 && value < 0.69);
    let condition2 = (value == 0.26168885291554034 || value == 0.5412812635768205 || value ==  0.7692816550843418);
    if ( condition1 || condition2) { 
            antennes.splice(index, 1); 
    }
} 



// ***** //
// TESTS //
// ***** //

// antennes.unshift(0.5412812635768205);
// let ko = antennes.indexOf(0.5412812635768205);
// if (ko != -1) {
//     console.log(`Il reste une erreur.`);
// }


for( var i = 0; i < antennes.length; i++ ) {
    if (  (antennes[i] > 0.63 ) && (antennes[i] < 0.69) ) {
    console.log("il reste une erreur à l'indice : " + i);
    }
}
