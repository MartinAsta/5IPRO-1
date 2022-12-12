/**Exercice 1
 * Réalisez le code nécessaire pour afficher une variable “âge” uniquement si elle est strictement supérieure à 18 et inférieure à 50
 */
function isOlderThan18AndYoungerThan50(age) {
    if (age > 18 && age < 50) {
        console.log(age);
    }
}

/**Exercice 2
 * Réalisez le code nécessaire pour afficher une variable “âge” uniquement si elle est strictement égale en valeur et en type à 30
 */
function is30YearsOld(age) {
    if (age === 30) {
        console.log(age);
    }
}

/**Exercice 3
 * Réalisez le code nécessaire pour vérifier qu’une variable "âge" uniquement si elle est supérieure à une variable “ageMinimum”. 
 * Dans ce cas affichez soit un message indiquant que l'âge requis n’est pas atteint, ou que l'âge requis est atteint en fonction du résultat
 */
function hasMinimumRequiredAge(age, minimumAge) {
    age > minimumAge ? console.log("Atteint") : console.log("Pas atteint");
}

/**Exercice 4
 * Réalisez la condition suivante de 3 manières différentes “Si il a un age alors je le multiplie par 2, sinon je le divise par 3”
 */
function hasAge(age) {
    age ? age * 2 : console.log("Pas d'âge.");
}