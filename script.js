///   create and intialization of array in jscript  and  manipulation


let array = [0,1,4,10,11];
array.push(5,7);
array.unshift(6);
array.shift(5);
array.pop(6);
console.log(array.includes(10));
console.log(array.indexOf(25));



// array search using find()

let result = array.find(function(item){
     return item > 5 ;
})
 

console.log(result);
console.log(array);

/////filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers); 

///// map
const numbers1 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(x => x * x);
console.log(squaredNumbers); 


