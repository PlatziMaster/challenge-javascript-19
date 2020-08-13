const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
days.splice(1,0,'Wed')

console.log(days)

//The splice method allow to modify an array.
// sintaxis--parameters 
// Array.splice(start,items to delete, new value)
// start = the index to start editing.
// items to delete = the number of items to delete, if 0 
// add a new item in the start index. 
// new value = values if want to add items to the array in 
// an specific indexedDB.