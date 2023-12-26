function isPalindrome(word) {
    word = word.toLowerCase().replace(/\s/g, "");
    return word === word.split("").reverse().join("");
}

let wordsToCheck = ["LEVEL", "KATAK", "MALAM", "RAFSUR"];
for (let word of wordsToCheck) {
    if (isPalindrome(word)) {
        console.log(`${word} adalah palindrom`);
    } else {
        console.log(`${word} bukan palindrom`);
    }
}
