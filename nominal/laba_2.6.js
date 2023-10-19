function countD(numbers){
    if (!isNaN(numbers)){
    const numStr = numbers.toString();
    const dCount = numStr.length;
    return dCount;
    }
    else{
        console.log("You did not enter a number.")
    }
}
// let numbers = ("")
let numbers = prompt("Write nubmer");
let CountOfNumbers = countD(numbers);
console.log(CountOfNumbers);