const Denomination = [50, 20 ,10 ,5 ,3 ,2 ,1];
function minChange(amount){
    const result = {};
for (let a = 0; a < Denomination.length ; a++){
    const Denominationn = Denomination[a]
    const count = Math.floor(amount/Denominationn);
    if (count>0){
        result[Denominationn] = count;
        amount = amount - (count * Denominationn);
    }
}
return result
}
const amount = parseInt(prompt("Enter the amount"));;
const change = minChange(amount);
console.log(`sum: ${amount}`);
console.log(`Minimum number of banknotes for payment:`);
for(var key in change){
    console.log(`nominal: ${key} count: ${change[key]}`);
}

