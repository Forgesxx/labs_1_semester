function isMod3(aNumber) {
    return aNumber % 3 === 0;
}

function isNotMod5(aNumber) {
    return aNumber % 5 === 0;
}

function findMinimalNumber(numbers) {
    let minimalNumber = Infinity;

    for (let number of numbers) {
        if (isMod3(number) && isNotMod5(number) && number < minimalNumber) {
            minimalNumber = number;
        }
    }

    return minimalNumber;
}

const inputNumbers = [15,8.3 ,30 , , ];

console.log("Задані числа: " + inputNumbers);

let minimalNumber = findMinimalNumber(inputNumbers);

if (minimalNumber === Infinity) {
    console.log("Немає числа, що підходить під умови");
} else {
    console.log("minimalNumber: " + minimalNumber);
}
