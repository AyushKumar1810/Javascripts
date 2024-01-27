// ///1. default paramter
// // if we didn't supply value of paramter then it will fetch error so for resolving that we shall
// // add a default value if user forget to put value the that default value will be consider and will get the result:
// ///for Eg
// // function rolldice(numofsides){
// //     if(numofsides===undefined){
// //         numofsides=6 
// //     }
// //     return Math.floor(Math.random()*numofsides)+1;
// // }
// // console.log(rolldice(12));// we have given 12 so we will get digit between 12 but if we leave empty then it will automaticcaly select/take default value and we will get results according to that 
// ///But there is one more unique way to do it .
// function rolldice1(numofsides=6){
//     return Math.floor(Math.random()*numofsides)+1;}
// console.log(rolldice1(7));// comsume less space 

// /////spread is used to combine the data into one : for eg registration form
// const DataFromForm={
//     email :'ayush@gmail.com',
//     password : 'helloMessi',
//     userName: "Messi is the Goat"
// }
// const newUser={...DataFromForm , id:234,isAdmin: false}
// console.log(newUser);// we have fill the google form and details we filled is in different line so to collect it to data we collect each user database at one place Like that 

//////spread (copying) in a OBJECT Literals(Copies properrties from one object into another object literal)

// const feline ={legs: 4 , family: 'Felidae'};
// const canline ={family: 'caniline' , furry: true}

// const dog={...canline, isPet:true}
// console.log(dog);//{ family: 'caniline', furry: true, isPet: true }
// const lion={...feline , genus:'Panthera'}
// console.log(lion);//{ legs: 4, family: 'Felidae', genus: 'Panthera'}

// const catDog={...feline , ...canline}
// console.log(catDog);//{ legs: 4, family: 'caniline', furry: true }

////////////REST : It looks Like Spread (...element we wanna copy) , but it's not


/////DESTRUCTION
