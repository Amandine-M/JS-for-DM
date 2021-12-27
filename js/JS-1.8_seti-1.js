// SOLUTION en copiant les constantes autrement
// référence : https://holycoders.com/javscript-copy-array/

let clone_1 = [...antenne_1],
clone_2 = antenne_1.slice(),
clone_3 = [].concat(antenne_1),
removed_1 =	clone_1.splice(402,30),
removed_2 =	clone_2.splice(402,30),
removed_3 =	clone_3.splice(402,30);
console.log( "removed_1 et removed_2 sont-ils identiques ? " )
console.log ( isTheSameArray(removed_1, removed_2) );
console.log( "removed_2 et removed_3 sont-ils identiques ? " )
console.log ( isTheSameArray(removed_2, removed_3) );

// Vérifions les longueurs dans la console