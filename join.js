const phrase = ['Nunca', 'Pares','De', 'Aprender']

console.log(phrase.join())//-----Nunca,Pares,De,Aprender
console.log(phrase.join(''))//---NuncaParesDeAprender
console.log(phrase.join('-'))//--Nunca-Pares-De-Aprender

//the join method blend the items in single string.
//if it doesn't have a parameter it blend them width the ','
// the parameters goes to the division of every item