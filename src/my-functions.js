/**
 * Beregner summen af to tal.
 * @param {number} a - Det første tal.
 * @param {number} b - Det andet tal.
 * @returns {number} Summen af de to tal.
 */
export function calculateSum(a, b) {
    // Skriv din kode her:

    if(isNaN(a) || isNaN(b)) {
        throw new Error('Input must be numbers');
    }

    return a + b;

}

/**
 * Kontrollerer om et tal er et primtal.
 * @param {number} number - Tallet der skal kontrolleres.
 * @returns {boolean} True hvis tallet er et primtal, ellers false.
 */
export function checkIfPrime(number) {
    // Skriv din kode her:

    // numbers less than or equal to 1 are not prime numbers
    if (number <= 1) return false;

    // check all numbers from 2 to number - 1 (i < number)
    // if number % i === 0, it means that number is divisible by i completely
    // it should only be divisible by 1 and itself to be a prime number
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    // if no number could divide it completely, then it's a prime number
    return true;
    
}

/**
 * Finder det største tal i en liste.
 * @param {number[]} array - Listen af tal.
 * @returns {number} Det største tal i listen.
 */
export function findMaximumNumber(array) {
    // Skriv din kode her:

    if (array.length === 0) {
        throw new Error('Array cannot be empty');
    }

    return Math.max(...array);

}

/**
 * Fjerner dubletter fra en liste.
 * @param {any[]} array - Listen der skal renses for dubletter.
 * @returns {any[]} Listen uden dubletter.
 */
export function removeDuplicateElements(array) {
    // Skriv din kode her:

    const newArray = [...new Set(array)];

    return newArray
    
}