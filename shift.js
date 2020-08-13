var acidFruits = ['🍓', '🍋', '🍊']
var modification = acidFruits.shift()
console.log(acidFruits) //----['🍋', '🍊']
console.log(modification)//---'🍓'

// the shift method get the item in index 0 
// from the array and return it.
// that's why acidFruits is the array without
// the strawberry and it is returned to modification.