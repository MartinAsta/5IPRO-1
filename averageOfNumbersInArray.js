/**Fait la moyenne des éléments d'une liste
 * 
 */
function averageOfArray(array) {
    let sumOfArray = 0;
    for (const i of array) {
        sumOfArray += i;
    }
    return sumOfArray / array.length;
}

let myArray = [2, 6, 5, 1, 3, 1, 1, 10];
console.log(averageOfArray(myArray));
