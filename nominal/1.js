const nominal = [50, 20, 10, 5, 1];

let sum = Number(prompt("Amount"))
for (const n of nominal) {
  const count = Math.floor(sum / n);
  if (count) {
    console.log(`Moneta ${n} x ${count}`);
  }
  sum -= count * n;
}