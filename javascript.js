//program 1 
//creating a new array with a given length
let length=5;
let value=1;
let arr=new Array(length).fill(value);
console.log(arr);
 
//program 2
//Removing array itams by index
let arr1=[10,20,30,40,50];
let indexToRemove=2;
console.log(arr1)
arr1.splice(indexToRemove,1);
console.log(arr1);

//program 3
//Inserting items at a specific position
let array=[1,2,3,4,5];
let indexToInsert=5;
let itemToInsert=6; 
array =array.slice(0,indexToInsert).concat(itemToInsert,array.slice(itemToInsert));
console.log(array);

//program 4
//converting array of objects
let arr2=['sam','john','steve','will'];
let obj=Object.assign({},arr2);
console.log(obj);

//program 5
//
const numbers = [1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 7];

const countOccurrences = numbers.reduce((acc, number) => {
  acc[number] = (acc[number] || 0) + 1;
  return acc;
}, {});

console.log(countOccurrences);
