function sumOfDigits(number) {
    let sum = 0;
    let num = Math.abs(number); // Берем модуль числа, чтобы работать только с положительными значениями.

    while (num > 0) {
        sum += num % 10;  // Добавляем последнюю цифру числа к сумме.
        num = Math.floor(num / 10); // Удаляем последнюю цифру числа.
    }

    return sum;
}

let number = 435214124;
let sum = sumOfDigits(number);
console.log(sum);