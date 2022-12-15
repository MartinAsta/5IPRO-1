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
