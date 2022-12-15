/**Exercice 1
 * Améliorez le tri à bulle tel que vu précédemment : Si lors d’un tour entier il n’a pas dû effectuer de “swap” alors arrêtez l’algorithme
 */
function improvedBubbleSort(array) {
    let hasSwapped;
    for (let i = 0; i < array.length; i++) {
        hasSwapped = false;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                switchPos(array, j, j + 1);
                hasSwapped = true;
            }
        }
        if (!hasSwapped) {
            return array;
        }
    }
    return array;
}

function switchPos(tableau, firstPosition, secondPosition) {
    let savedValue = tableau[secondPosition];
    tableau[secondPosition] = tableau[firstPosition];
    tableau[firstPosition] = savedValue;
}

/**Exercice 2
 * Réalisez un tri (bulle / insertion / sélection) décroissant
 */
function selectionSortDesc(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        let minimum = tableau[i];
        let savedIndex = i;
        for (let j = i + 1; j < tableau.length; j++) {
            if (tableau[j] > minimum) {
                minimum = tableau[j];
                savedIndex = j;
            }
        }
        switchPos(tableau, i, savedIndex);
    }
}

function bubbleSortDesc(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau.length - 1; j++) {
            if (tableau[j] < tableau[j + 1]) {
                switchPos(tableau, j, j + 1)
            }
        }
    }
}

function insertSortDesc(tableau) {
    for (let i = 1; i < tableau.length; i++) {
        currentValue = tableau[i];
        let j = i - 1;
        while (j >= 0 && currentValue > tableau[j]) {
            switchPos(tableau, j, j + 1);
            j--;
        }
    }
}

/**Exercice 3
 * Permettez à l’utilisateur d’entrer des valeurs (nombres entiers) remplissant un tableau,
 * une fois que l’utilisateur est satisfait de ses entrées, triez le tableau par ordre croissant
 */
function makeArrayAndSortIt() {
    let userInput = 0;
    let newArray = [];
    while (!isNaN(userInput)) {
        userInput = parseInt(prompt("Ajoutez une valeur (tapez 'stop' pour finir la liste)"));
        if (!isNaN(userInput)) {
            newArray.push(userInput);
        }
    }
    improvedBubbleSort(newArray);
    return newArray;
}

/**Exercice 4
 * Créez un tableau d’entiers avec au moins 10 entrées, définissez ensuite une variable “limite” et triez les N derniers éléments du tableau (N étant la limite)
 */
function sortNLastIndex(array, n) {
    let sortedNewArray = improvedBubbleSort(array.splice(array.length - n));
    for (let i = 0; i < sortedNewArray.length; i++) {
        array.push(sortedNewArray[i]);
    }
    return array;
}

/**Exercice 5
 * Même question que la précédente sauf qu’il faut trier les N premiers éléments
 */
function sortNFirstIndex(array, n) {
    let sortedArray = improvedBubbleSort(array.splice(0, n));
    for (let i = 0; i < array.length; i++) {
        sortedArray.push(array[i]);
    }
    return sortedArray;
}
