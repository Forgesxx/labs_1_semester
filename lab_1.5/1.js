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
console.log(rhyme('комары','кошмар'));