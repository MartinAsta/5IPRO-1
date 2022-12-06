function insertSort(tableau) {
    for (let i = 1; i < tableau.length; i++) {
        currentValue = tableau[i];
        let j = i - 1;
        while (j >= 0 && currentValue < tableau[j]) {
            switchPos(tableau, j, j + 1);
            j--;
        }
    }
}

function switchPos(tableau, firstPosition, secondPosition) {
    let savedValue = tableau[secondPosition];
    tableau[secondPosition] = tableau[firstPosition];
    tableau[firstPosition] = savedValue;
}

let tab = [5, 3, 8, 1];
insertSort(tab);
console.log(tab);
