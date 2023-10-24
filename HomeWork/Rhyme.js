function rhyme(word1,word2)
{
const a = word1.toString();
const b = word2.toString();
if (a.slice(-3) === b.slice(-3))
{
return "1";
}
if (a.slice(-3) || b.slice(-3))
{
return "0";
}
}
let word1 = "комар";
let word2 = "кошмар";
let rhymee = rhyme(word1,word2);
console.log(rhymee);