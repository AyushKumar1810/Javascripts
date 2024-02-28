// new Promise((resolve,reject)=>{
//     resolve();// that will give "resolved" status
// })
// new Promise((resolve,reject)=>{
//     reject();// that will give "Rejected" status
// })
// new Promise((resolve,reject)=>{
//     //Simply it will give "Pending" As it we haven't given any parameter like "Resolve" or "reject"
// })

// const fakeRequest= (url) =>{
//      return new Promise((resolve, reject) => {
//         const Rand= Math.random();
//         setTimeout(() => {
//             if (Rand < 0.7){
//                 resolve("Your Fake DATA IS here")
//             }
//             reject("Request Failed !")
//         }, 1000);
//      })
// }
// fakeRequest('/dogs/1')
//     .then((data)=>{
//     console.log("Done WIth My Request");
//     console.log("Your data is :" ,data); // If we get Resolved signal then our input data will be output
//     })
//     .catch((err)=>{
//         console.log("OH NO! " , err);// if not will be displayed by an errror
//     })

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


delayedColorChange('red', 1000)//first red then after 1 sec orange and then comtinue...
    .then(() => delayedColorChange('orange', 1000))// basically .then is use to slect 
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))