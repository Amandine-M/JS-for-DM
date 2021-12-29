// fonction récursive
//   trouver les personnes du premier niveau avec for in
//   si l'objet personne.contact existe  
//   trouver les personnes dans ce niveau inférieur
//   et ainsi de suite

function findOnePerson(data) {
    for (key in data) {
        if (typeof(data[key]) == "object") {
             console.log(key + ' : ' + data[key].nom);
            if (data[key].contact != undefined){
                //console.log("CONTAAACT");
                findOnePerson(data[key].contact);
            }
        }
        else {
            console.log(`Pas un objet ${key} : ${data[key]}`);
        }
    }
}

findOnePerson(personnes);