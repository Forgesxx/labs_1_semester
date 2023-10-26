function findNumbers(n, m) 
{
  const result = [];

  for (let num = 1; num < m; num++) 
  {
      let sumOfDigits = 0;
      let currentNum = num;
      while (currentNum > 0) 
      {
          sumOfDigits += currentNum % 10;
          currentNum = Math.floor(currentNum / 10);
      }
      if (sumOfDigits * sumOfDigits === n) 
      {
          result.push(num);
      }
  }

  return result; 
}

const n = parseInt(prompt("Write a number"));
const m = parseInt(prompt("Enter the maximum value"))
const numbers = findNumbers(n, m);
console.log(numbers);








