const fastFood = ['🌭', '🍔', '🍟', '🍕']
const iterator = fastFood.entries()

console.log(iterator.next().value)//--[0,'🌭']
console.log(iterator.next().value)//--[1,'🍔']

//the entries method return an Object iterator with the
// index and the values of the array 
// iterator.next() return the index of the array 