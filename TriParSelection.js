function selectionSort(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        let minimum = tableau[i];
        let savedIndex = i;
        for (let j = i + 1; j < tableau.length; j++) {
            if (tableau[j] < minimum) {
                minimum = tableau[j];
                savedIndex = j;
            }
        }
        switchPos(tableau, i, savedIndex);
    }
}

function switchPos(tableau, firstPosition, secondPosition) {
    let savedValue = tableau[secondPosition];
    tableau[secondPosition] = tableau[firstPosition];
    tableau[firstPosition] = savedValue;
}

let tab = [5, 3, 8, 1];
selectionSort(tab);
console.log(tab);
