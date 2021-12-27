/** SORT datas
 * 
 */

antennes = antennes.sort();


/** CONTAIN 24
 * 
 */
let isContaining24 = [],
   isContaining24atTheEnd = [],
   hasSum61 = [];

for (value of antennes) {

    if (value.toString().match(/24/)) { 
       isContaining24.push(value);
    }
    if (value.toString().match(/24$/)) { 
        isContaining24atTheEnd.push(value);
        value = value.toString().replace(".","");
        value = value.toString().replace("-","");
        hasSum61.push(parseInt(value));
     }
}


// une séquence dont la somme des chiffres vaut 61 
// supprimer le . et le -
// convertir chaque caractère en nombres 
// for (number of isContaining24atTheEnd) {
//     //transformer la chaine en tableau et supprimer le . et le -
    
//     // additionner
// }

// document.getElementById("result").innerHTML = myFunction();
let stringOfNum,
sumArr = [];
let sum = 0;
for (i = 0; i < hasSum61.length; i++) {
   stringOfNum = hasSum61[i].toString().split(""); // suite de chiffre


   for (j = 0; j <stringOfNum.length; j++) {
      sum += stringOfNum[j];
      if (j == stringOfNum.length - 1){
         if (sum == 61) {
            sumArr.push(sum);
            console.log("va dormir");
         }
      }
   }
  
}

while (j < stringOfNum.length){
   j++;
}