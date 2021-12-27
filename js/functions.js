/** Compare 2 arrays
 * @param {array} arr1 - first array to compare
 * @param {array} arr2 - second array to compare
 * @returns {boolean}
 */
function isTheSameArray(arr1, arr2) {
    // console.log(`Est-ce que ${nameof(arr1)} et ${nameof(arr2)} contiennent les mêmes valeurs ? \n Réponse :`);
	return ( JSON.stringify(arr1) === JSON.stringify(arr2) ) ? true : false;
}


/**
 * Delete datas in Array
 * @param {array} targetedArray - The array to check
 * @param {object} datasToDelete - The object of datas to delete
 * @returns {array} - array of deleted datas
 */
function deleteDatas ( targetedArray, datasToDelete ) {
    return targetedArray.splice(datasToDelete.start, datasToDelete.deleteCount);
}



/**
 * Check if field is empty
 * @param {string} field - The field to check.
 * @return {boolean}
 */
 function isEmpty(field){
	if(field != '') return false;
	return true;
}

/**
 * Check if email is valid
 * @param {string} email - The email to check.
 * @return {boolean}
 */
function isMailValid(email){
	// est-ce que le champ est vide
	if( isEmpty(email) ) {
		// ce n'est pas un mail valide car il est vide
		return false;
	}
	// est-ce qu'il y a une @ 
	if(email.indexOf("@") == -1){
		return false;
	}
	// est-ce qu'il y a un point après l'arobase
	return true;
}