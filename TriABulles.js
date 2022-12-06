function bubbleSort(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau.length - 1; j++) {
            if (tableau[j] > tableau[j + 1]) {
                let savedValue = tableau[j+1];
                tableau[j + 1] = tableau[j]; 
                tableau[j] = savedValue;
            }
        }
    }
}

let tab = [5, 2, 6, 1];
bubbleSort(tab);
console.log(tab);
