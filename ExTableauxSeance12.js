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
    for (let i = 0; i < array.length; i++){
        if(!isModulo4(i)){
            console.log(array[i]);
        }
    }
}

function isModulo4(number) {
    return number % 4 == 0;
}