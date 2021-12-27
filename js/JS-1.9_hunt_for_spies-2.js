let suspects = [];

// fonction récursive
//   trouver les personnes du premier niveau avec for in
//   si l'objet personne.contact existe  
//   trouver les personnes dans le niveau inférieur
//   et ainsi de suite

function findOnePerson(data) {
    for ( key in data ) {
        if ( typeof(data[key]) == "object" ) {
            if ( isSuspect(data[key]) ){
                suspects.push( `${data[key].nom}` );
            }
            if ( data[key].contact != undefined ){
                findOnePerson( data[key].contact );
            }
        }
    }
    return suspects;
}

// pour chaque personne verifier
//   SI taille >= 1.8
//   ET  yeux == "vert"
//   ET homme == true
//   ALORS suspect

function isSuspect(somebody) {
    if(somebody.yeux == "vert" && somebody.taille >= 1.8 && somebody.homme == true) {
        return true;
    } else {
        return false;
    }
}
// findOnePerson(personnes);
// console.log(suspects);