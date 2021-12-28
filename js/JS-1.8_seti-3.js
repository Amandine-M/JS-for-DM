/** Tri des données
 */
antennes = antennes.sort();


/** 
 * Contient le nombre 24
 * 24 à la fin
 */
let isContaining24 = [],
   isContaining24atTheEnd = [],
   preparedValuesForSum61 = [];

for (value of antennes) {
    if (value.toString().match(/24/)) { 
       isContaining24.push(value);
    }
    if (value.toString().match(/24$/)) { 
        isContaining24atTheEnd.push(value);
     }
}

/* Séquence dont la somme des chiffres vaut 61
*  A partir du dernier tableau de résultats
*  Supprimer le . et le -
*  Additionner chaque nombre de chaque entrée
*/

for ( sequence of isContaining24atTheEnd ) {
   nb = sequence.toString().replace(".","");
   nb = nb.toString().replace("-","");
   nb = nb.toString().split("");
   // console.log(sumOfArr(nb));
   if (sumOfArr(nb) == 61){
      console.log(sequence);
   }
}


// document.getElementById("result").innerHTML = myFunction();


/** Add all entries of an array
 * @param {array} arr - array of entries to add
 * @returns {number} - sum of entries
 */

function sumOfArr(arr) {
   let sum = 0;
   for ( i = 0 ; i < arr.length; i++ ){
      sum = sum + parseInt(arr[i]);
   }
   return sum;
}

/** Display results
 * @param {string} id - id of HTML element where to display results
 * @param {array} - datas to display
 * @returns {}
 */