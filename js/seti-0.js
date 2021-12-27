// NB : Les 3 variables récupérées sont des constantes.
// PB : On teste de copier les données par une assignation avec le signe =
let antenne_1a = antenne_1;
    // Comparons les 2 tableaux antenne_1a et antenne_1
    console.log("antenne_1a et antenne_1 sont-ils identiques ? ")
    console.log (isTheSameArray(antenne_1, antenne_1a));

// si l'on tente d'oter les 30 erreurs après l'indice 402 pour les 2 tableaux identiques, 
// on s'attend à trouver le même résultat
	// removed_1a 	= antenne_1a.splice(402,30);

	// removed_1 	= antenne_1.splice(402,30);


// or :
  // Comparons les 2 tableaux des éléments supprimés
    // console.log("removed_1a et removed_1 sont-ils identiques ? ")
    // console.log (isTheSameArray(removed_1, removed_1a));

// lors de l'assignation, nous appelons le même espace mémoire.
// le même tableau est donc coupé 2 fois.
// illustration en observant la longueur de antenne_1


// SOLUTION en copiant les constantes autrement
// référence : https://holycoders.com/javscript-copy-array/