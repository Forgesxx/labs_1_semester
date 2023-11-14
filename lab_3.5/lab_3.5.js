function BubbleSort(arr, des = false) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            var compareResult;

            if (des) {
                compareResult = arr[j] < arr[j + 1];
            } else {
                compareResult = arr[j] > arr[j + 1];
            }

            if (compareResult) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function getSymbolKind(str) {
    let result = 0;
    let code = str.charCodeAt(0);
    if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
        result = 1; // буква
    } else if ((code > 47 && code < 58)) {
        result = 2; // цифра
    }
    return result;
}

function sortText(inputText) {
    let currentGroupKind = 0;
    let currentGroup = "";
    let output = "";

    for (let i = 0; i < inputText.length; i++) {
        let symbol = inputText[i];
        let symbolKind = getSymbolKind(symbol);

        if (symbolKind !== currentGroupKind) {
            if (currentGroupKind === 1 || currentGroupKind === 2) {
                // Используем вашу функцию BubbleSort для сортировки
                const groupArray = currentGroup.split('');
                BubbleSort(groupArray, currentGroupKind === 2);
                currentGroup = groupArray.join('');
            }
            output = output + currentGroup;
            currentGroup = "";
            currentGroupKind = symbolKind;
        }

        currentGroup = currentGroup + symbol;
    }

    if (currentGroupKind === 1 || currentGroupKind === 2) {
        const groupArray = currentGroup.split('');
        BubbleSort(groupArray, currentGroupKind === 2);
        currentGroup = groupArray.join('');
    }

    output = output + currentGroup;

    return output;
}

var inputText = "«cba321 /’abfc3785,’’3946f";
var outputText = sortText(inputText);
console.log("InputText:", inputText);
console.log("OutputText:", outputText);
