const pairNumbers = [2,10,14,98]

console.log(pairNumbers.fill(0, 2, 4))//--[ 2, 10, 0, 0 ]
console.log(pairNumbers.fill(34, 1))//----[ 2, 34, 34, 34 ]
console.log(pairNumbers.fill(6))//--------[ 6, 6, 6, 6 ]

//the fill method allows to change specific items in the array
//sintaxis
//.fill(value to replace, start index, end index +1)
//the end index doesn't include. it use the previus index.