/** Compare 2 arrays
 * @param {array} arr1 - first array to compare
 * @param {array} arr2 - second array to compare
 * @returns {boolean}
 */
function isTheSameArray(arr1, arr2) {
    // console.log(`Est-ce que ${nameof(arr1)} et ${nameof(arr2)} contiennent les mêmes valeurs ? \n Réponse :`);
	return ( JSON.stringify(arr1) === JSON.stringify(arr2) ) ? true : false;
}

/** Delete datas in Array
 * @param {array} targetedArray - The array to check
 * @param {object} datasToDelete - The object of datas to delete
 * @returns {array} - array of deleted datas
 */
function deleteDatas ( targetedArray, datasToDelete ) {
    return targetedArray.splice(datasToDelete.start, datasToDelete.deleteCount);
}

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
  * @param {string} id - id of the container
  * @param {array} data - results to display as child
  *  @param {string} newclass - Optional css class name to add on the displayed child
  */
 function fnDisplayDataAsAList(id, data, newclass){
	let container = document.getElementById(id);
    let parentNode = document.createElement('ul');
    container.appendChild(parentNode);
	for ( let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.textContent = data[i];
        parentNode.appendChild(li);
        if(newclass) li.className = newclass;
    }
}