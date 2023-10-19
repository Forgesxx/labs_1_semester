function sumOfnum(number){
    let sumOfn = 0
    if(!isNaN(number)){
        const string = number.toString();
        for (let i = 0; i < string.length; i++) {
            sumOfn = sumOfn + parseInt(string[i]);
        }
        return sumOfn;
    } else{
        console.log("You didn't write a number")
    }
}
//let number = prompt("Write a nubmer")
let number = 43522
let sum = sumOfnum(number)
console.log(sum)