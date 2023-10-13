function minChange(amount){
    const Denomination = [50, 20 ,10 ,5 ,3 ,2 ,1];
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
const amount = 342;
const change = minChange(amount);
console.log(`Сума: ${amount}`);
console.log(`Мінімальна кількість купюр для виплати:`);



