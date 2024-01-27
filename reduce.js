// REDUCE : The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

//Syntax : array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

const prices =[9.99,1.50,19.99,49.99,30.50]
// let total = 0;
// for (let price of prices ){
//     total+=price
// }
// console.log(total);// This function add and give the result

/////Using Reduce function (It works as sliding Windows)
// const total=prices.reduce((total,price)=>{
//     return total + price
// })
// console.log(total);
// const MinPrice=prices.reduce((min , price)=>{
//     if (price>min){
//         return price;
//     }
//     return min
// })
// console.log(MinPrice);

/////Arrow Function + This keyword

const person = {
    FirstName: 'Amigo',
    LastName: 'Voltorato',
    FullName: function () {
        return `${this.FirstName} ${this.LastName}`;
    }
};

console.log(person.FullName()); // Output: Amigo Voltorato