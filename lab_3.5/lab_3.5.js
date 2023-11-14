function BubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function sortText(inputText) {
    var characters = inputText.split('');
    var letters = [];
    var digits = [];

    for (var i = 0; i < characters.length; i++) {
        var char = characters[i];
        if (char.match(/[a-zA-Z]/)) {
            letters.push(char);
        } else if (char.match(/\d/)) {
            digits.push(char);
        }
    }

    BubbleSort(letters);
    BubbleSort(digits);

    var resultText = [];

    for (var i = 0; i < characters.length; i++) {
        var char = characters[i];
        if (char.match(/[a-zA-Z]/)) {
            resultText.push(letters.shift());
        } else if (char.match(/\d/)) {
            resultText.push(digits.pop());
        } else {
            resultText.push(char);
        }
    }

    return resultText.join('');
}
//var inputText = prompt("");
var inputText = "dcba1234";
var outputText = sortText(inputText);

console.log(outputText);

let testString =     "cba1076/’abfc3785,’’3946f";
let expectedString = "abc7610/’abcf8753,’’9643f";
let outputString = sortText(testString);

console.log("test string:       " + testString);
console.log("expected string:   " + expectedString);
console.log("output string:     " + outputString);

if (expectedString === outputString)
{
    console.log("[Test Passed]");
}
else
{
    console.log("[Test Failed]");
}