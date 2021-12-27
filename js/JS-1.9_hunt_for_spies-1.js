let suspects = [];

// fonction récursive
//   trouver les personnes du premier niveau avec for in
//   si l'objet personne.contact existe  
//   trouver les personnes dans ce niveau inférieur
//   et ainsi de suite

function findOnePerson(data) {
    for ( key in data ) {
        if ( typeof(data[key]) == "object" ) {        
            // pour chaque personne verifier
            //   SI taille >= 1.8
            //   ET  yeux == "vert"
            //   ET homme == true
            //   ALORS suspect
            if ( data[key].taille >= 1.8 && data[key].yeux == 'vert' && data[key].homme == true ){
                suspects.push(`{${data[key].nom}, ${data[key].taille}, ${data[key].yeux}}`);
                //console.log(key + ' est supect');
            }
            if ( data[key].contact != undefined ){
                //console.log("CONTAAACT");
                findOnePerson( data[key].contact );
            }
        }
    }
}


findOnePerson(personnes);
console.log(suspects);
 

