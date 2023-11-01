const generatedNumbers = new Set();
// For Generate Random Id
export const generateUniqueId = () => {
    let randomNumber;
    do {
        randomNumber = Math.floor(1e9 + Math.random() * 9e9);
    } while (generatedNumbers.has(randomNumber));
    generatedNumbers.add(randomNumber);
    return randomNumber;
}
