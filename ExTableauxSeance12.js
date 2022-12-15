/**Exercice 1
 * Créez et parcourez un tableau comprenant des valeurs de différents types (boolean, string, integer, float, ..)
 */
function createArrayWithDifferentValuesAndTypes() {
    let newArray = [1, 2.0, false, "salut"];
    for (const i of newArray) {
        console.log(i);
    }
}

/**Exercice 2
 * Créez et parcourez un tableau d’entier, du dernier élément au premier
 */
function parcourirALEnvers(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

/**Exercice 3
 * Créez et parcourez un tableau d’entier du premier élément au dernier en évitant les index impairs et ce sans utiliser de condition à l’intérieur de votre boucle
 */
function avoidOddNumbers(array) {
    for (let i = 0; i < array.length; i += 2) {
        console.log(array[i]);
    }
}

/**Exercice 4
 * Créez et parcourez un tableau d’entier du premier élément au dernier en évitant les index dont le modulo 4 est 0
 */
function avoidModulo4(array) {
    for (let i = 0; i < array.length; i++) {
        if (!isModulo4(i)) {
            console.log(array[i]);
        }
    }
}

function isModulo4(number) {
    return number % 4 == 0;
}

/**Exercice 5
 * Créez et parcourez un tableau en sommant les éléments à leur place
 */
function progressiveSum(array) {
    let newArray = [];
    let lastSum = 0;
    for (let i = 0; i < array.length; i++) {
        newArray.push(lastSum + array[i]);
        lastSum += array[i];
    }
    return newArray;
}

/**Exercice 6
 * Pareil que le précédent, sauf que vous avez un tableau de tableaux, une fois la somme faites triez les par ordre décroissant
 */
function progressiveSumAndDescSort(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(progressiveSum(array[i]));
    }
    sortMatrixesDesc(newArray);
    return newArray;
}

function sortMatrixesDesc(array) {
    let savedValue = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i][0] > array[i - 1][0]) {
            savedValue = array[i];
            array[i] = array[i - 1];
            array[i - 1] = savedValue;
        }
    }
}
