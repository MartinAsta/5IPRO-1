/**Exercice 1
 * Bouclez sur les entiers de 100 à 0, affichez la valeur de l’entier seulement si le résultat du modulo entre l’entier et une variable “comparaison” est différent de 0
 */
function compareNumberFrom100To0(comparaison) {
    for (let i = 100; i >= 0; i--) {
        if (i % comparaison != 0) {
            console.log(i);
        }
    }
}

/**Exercice 2
 * Bouclez sur les entiers de 2 à 200, faites la somme des entiers qui sont des nombres premiers (divisible uniquement par 1 et eux-même)
 */
function sumOfFirstPrimeNumbersBetween2And200() {
    let sum = 0;
    for (let i = 2; i <= 200; i++){
        if(isPrime(i)){
            sum += i;
        }
    }
    return sum;
}

/**
 * Vérifie qu'un nombre est premier
 */
function isPrime(number) {
    if (number === 1) {
        return false;
    }
    for (let i = 2; i <= (number / 2); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
