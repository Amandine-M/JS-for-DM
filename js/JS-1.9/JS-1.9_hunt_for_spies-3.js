let suspects = [];

// fonction récursive
//   TROUVER les personnes du premier niveau avec for in
//   SI l'objet personne.contact existe  
//   TROUVER les personnes dans le niveau inférieur
//   et ainsi de suite

function findOnePerson(data) {
    for ( key in data ) {
        if ( typeof(data[key]) == "object" ) {
            //SI suspect
            if ( isSuspect(data[key]) ){
                //AJOUTER au tableau des suspects
                suspects.push( `${data[key].nom}` );
            }
            // SI niveau inférieur existe
            if ( data[key].contact != undefined ){
                findOnePerson( data[key].contact );
            }
        }
    }
    return suspects;
}

// VERIFIER pour chaque personne
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
findOnePerson(personnes);

// Afficher

let result = document.getElementById('result');

for ( let i = 0; i < suspects.length; i++) {
    let li = document.createElement('li');
    li.textContent = suspects[i];
    result.appendChild(li);
}

let btn = document.getElementById('show-hide-btn');

btn.addEventListener('click', 
function(e) { 
    e.preventDefault();
    console.log('click');
    
});
