var teachers = ['Oscar']
teachers.unshift('Facundo')
teachers.unshift('Nicolas', 'Pablo')
console.log(teachers) //['Nicolas','Pablo','Facundo','Oscar']

//the unshift method add the parameter at the beginning of the array
//[Oscar]
//[Facundo, Oscar] Facundo is added at the beginning
//[Nicolas,Pablo,Facundo,Oscar] Nicolas and Pablo are added before 
//Facundo because it was the first index of the array.