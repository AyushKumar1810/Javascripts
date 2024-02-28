//NOTE :  The call stack is a crucial concept in JavaScript’s runtime environment, representing the mechanism by which the JavaScript engine keeps track of function calls in a program. It operates as a Last In, First Out (LIFO) data structure, meaning that the last function called is the first one to be resolved.

const multiply = (x,y)=> x*y
const square = (x)=> multiply(x,x);
const isRightTriangle=(a,b,c) =>{
    return square(a)+ square(b)  === square(c)
}
const ayush = isRightTriangle(3,4,5);
console.log(ayush);
