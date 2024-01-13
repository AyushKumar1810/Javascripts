// // To make Empty Array
// let Students =[]
// //An array Of string
// let colours = ['Red ' , 'orange ', 'Black' , 'Pink' , 'Magenetta' , 'Brown']
// // An Array Of Number
// let lottoNums = [19 , 22 , 56 , 12 , 51];
// // An Array of mixed Things 
// let stuff = [true , 68 , 'cat' , null];

// console.log(colours);
// console.log(colours.length);
// console.log(colours[0]);
// console.log(colours[1]);
// console.log(colours[2]);
// console.log(colours[3]);
// console.log(colours[4]);
// console.log(colours[5]);

// // Modifying Array

// colours[0] ='orange'
// colours[1] ='Red'
// colours[2] ='Blue'
// colours[3] ='Magneta'
// colours[4] ='Pink'
// colours[5] ='White'
// colours[12]= 'Indigo'

// console.log(colours);
// console.log(colours.length);
//Array Method 

// // Push=Add to the end 
// // pop= Remove from the end 
// // shift = remove From the Start
// // unshift = Add to the Start
// let movieline = ['Ayush' , 'Aditya'];
// movieline[2]= 'Himanshu' // Common way to add in Js with known index
// console.log(movieline); 
// movieline.push('Aditi')//Add to the end 
// console.log(movieline); 
// //NOTE: point to be Notes here Push method changes the array while .Uppercase() method Make no change to array .
// movieline.pop()//Remove to the end 
// console.log(movieline); 
// movieline.unshift('Ayushi')// add in the Start
// console.log(movieline); 
// movieline.shift()// remove From the Start
// console.log(movieline); 

// More Method

// // Concat=Merge array
// // includes= Look For a value
// // indexOf= Just Like String.indexOf
// // join= creates a string From an array
// // reverse = reverse an array 
// // slice = copies of Portion on an array 
// // splice = remove/Replace elements 
// // sort = sorts an array 
// 1.) concat = The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

// 2.) includes =The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false

// 3.)indexOf=The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// Syntax
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1

// 4.) join=The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water
//NOTE: main use Of  that is  we can simply converts 2D(MATRIX) array into 1D.
const matrix = [//2D array
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9 (1D array)
  console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9

// 5.)reverse=The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
const array_1 = ['one', 'two', 'three'];
console.log('array1:', array_1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array_1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array_1);
// Expected output: "array1:" Array ["three", "two", "one"]

//slice:=The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
