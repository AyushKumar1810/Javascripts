// // // function hello(){
// // //     // That will give undefined
// // // }
// // // async function hello(){
// // //     //That will give Promise and status will be "Resolved"
// // // }

// // const sing = async() =>{
// //     throw "OH NO NO NO ...."
// //     return' LA LA LA LA !'
// // }
// // sing()
// //     .then((data)=>{
// //     console.log("Promise resolved with :" , data);
// // })
// // //f we use throw the it will be shown on output of error
// //     .catch(err=>{
// //         console.log("OH NO , PROMISE REJECTED");
// //         console.log(err);
// //     })

// const login = async(username , password)=>{
//     if (!username||!password) throw 'Misiing Credential'
//     if(password==='LeoMessi') return 'Welcome To GOAT Accedmy'
//     throw 'Invalid password'
// }
// login('ayushkumar','LeoMessi')
//     .then(msg=>{
//         console.log("Logged in ");
//         console.log(msg);
//     })
//     .catch(err=>{
//         console.log("error!");
//         console.log(err);
//     })

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }


// // delayedColorChange('red', 1000)//first red then after 1 sec orange and then comtinue...
// //     .then(() => delayedColorChange('orange', 1000))// basically .then is use to slect 
// //     .then(() => delayedColorChange('yellow', 1000))
// //     .then(() => delayedColorChange('green', 1000))
// //     .then(() => delayedColorChange('blue', 1000))
// //     .then(() => delayedColorChange('indigo', 1000))
// //     .then(() => delayedColorChange('violet', 1000))

// async function rainbow(){
//     await delayedColorChange('red' , 1000)
//     await delayedColorChange('orange' , 1000)//this line of code will run if above line of code will finish 
//     await delayedColorChange('yellow' , 1000)
//     await delayedColorChange('green' , 1000)
//     await delayedColorChange('blue' , 1000)
//     await delayedColorChange('indigo' , 1000)
//     await delayedColorChange('violet' , 1000)
//     await delayedColorChange('purple' , 1000)
//     return "All Done "
// }
// // rainbow().then(()=>{
// //     console.log("Rainbow has Been Finished");
// // })

// async function PrintRainbow(){
//     await rainbow();// This function will wait till 'rainbow function will finished execuating'
//     console.log("END OF THE RAINBOW");
// }
// PrintRainbow()


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }

}
































