/** Tri des données
 */
antennes = antennes.sort();


/** 
 * Contient le nombre 24
 * 24 à la fin
 */
let isContaining24 = [],
   isContaining24atTheEnd = [],
   preparedValuesForSum61 = [],
   hasSum61 = [];

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
      hasSum61 = [].concat(sequence);
   }
}

// AFFICHER
fnDisplayDataAsAList('ordinate', antennes);
// fnDisplayDataAsAList('tests', isContaining24atTheEnd, 'orange');
// fnDisplayDataAsAList('final', hasSum61, 'red');

