// function singSong(){
//     console.log("SA");
//     console.log("Re");
//     console.log("GA");
//     console.log("MA");
// }
// singSong()// function call This will print wharever written inside function

// Hoisting: Usually we call function after the function end but in java scripts we can call functions before function define that is called hoisting 

//Arguments :Input To a function
// function greet(firstName , lastname) {
//     console.log(`Hey There ${firstName} ${lastname}`);
// }

// greet('Ayush ' , 'Kumar');\

// function repeat(str , numTimes){
//     for (let i=0 ; i<numTimes ; i++);
//     {console.log('Hii' , 5);
// }
    
// }
// repeat('hi',5)   

// function collectEggs(){
//     let total_Eggs=7; // we can't use like that we have to first make it to 0 
//     //like let total_Eggs=0 then inside  function we will make total egg = 6 
//     console.log(total_Eggs);
// }
// collectEggs();
// console.log(total_Eggs);
// let total_Eggs=0 //Initial 0 
// function collectEggs(){
//     total_Eggs=7; // Then we updated inside function and that will be printed when function called
//     console.log(total_Eggs);
// }
// collectEggs();

//////FUNCTIONS SCOPE 

// let bird='scarlet Macaw';
// function birdwatch(){
//     let bird= 'Great Blue Heron'// BIRD IS SCOPED TO birdWatch Function 
//     console.log(bird); //Great Blue Heron
// }
// console.log(bird);// scarlet Macaw

//BLOCKED SCOPE
// let radius = 8;
// if (radius>0){
//     const PI = 3.14159; //PI AND msg are scoped to the BLOCK
//     let msg = 'HIIIII!'

// }
// console.log(radius); // 8 
// // console.log(PI); //NOT DEFINED
// // console.log(msg); // NOT DEFINED

////LEXIAL SCOPE :

// function bankrobbery(){
//     const heroes = ['spiderman' , 'wolverine ' , "Black Panther" , "Black Women"]
    
//     function cryForHelp(){
//         function inner(){

        
//             for (let hero of heroes){
//                 console.log(`Please Help Us , ${hero.toUpperCase()}`);
//         }
        
//         }


//     }
//     cryForHelp();
// }

///// Function Expression :
// function add(x,y){
//     return x+y
// }
// ayush =add(4,5)
// console.log(ayush);

// const add=  function (x,y){ // We can also use function expression like that (We can store Function as a value)
//     return x+y
// }
// ayush =add(4,5)
// console.log(ayush);

// Higher Order Function :

// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// // Example usage
// console.log("Calling rollDie twice:");
// callTwice(rollDie);

// console.log("\nCalling rollDie ten times:");
// callTenTimes(rollDie);

// function makeMystryFunc(){
//     const rand = Math.random();
//     if (rand> 0.5){
//         return function(){
//             console.log("Congrats You have won Million ! Dollars");
//             console.log("congrats You have A Good Logic ");

//         }
//     }else {
//         return function(){
//             alert("You have  been infected by computer virus")
//             alert("Stop Trying to close window")
//             alert("Stop Trying to close window")
//             alert("Stop Trying to close window")
//             alert("Stop Trying to close window")
//             alert("Stop Trying to close window")
//             alert("Stop Trying to close window")
//             alert("Stop Trying to close window")
//         }
//     }
// }
// const mystry = makeMystryFunc()
// mystry

// const mymath={
//     PI: 3.14519,
//     square:function(num){
//         return num * num
//     },
//     cube: function (num){
//         return num**3;
//     }
// }

//////`THIS` IN METHODS:use the keyword 'This' to access other properties on the same object. By using this we can access particular elements 
// const cat={
//     name: "Blue Steels",
//     color:'Grey',
//     breed:"scottish Fold",
//     meow(){
//         console.log(`${this.name} says MEOWWWWWWW.... and It's Color is ${this.color}`);//Observe carefully we have access special object by using 'This.desired' value that we want
//     }
// }
// // cat.meow() // here by cat we are accesing whole object and meow is function in which we are interested . Also we can say that this refers to the left of the dot(.) so in left it's "cat" so it will fetch call object 

// const cat2=cat.meow
// cat2()//undefined says MEOWWWWWWW.... and It's Color is undefined. so that is what we are getting because nothing on the left of cat2()

/////////// TRY / CATCH 
//NOTE: By using try/Catch method we can still run our code after the error , But if we don't use try/catch then our code will stop at the error 

// hello.toUpperCase();// see thet code will show error and stop here it will not go to next line for do so we have to use Try/Catch Things
// console.log("Hello ayush");

// try{
//     hello.toUpperCase();// That is error
// } // Point to be noted here for every try there should be always catch . Like if try is error then catch will display the 'its error ' and next Line code will be executed
// catch{
//     console.log("Hey i am the ERROR"); // If we get it will show this
// }
// console.log("AFter Ever After"); // And after all that code will be executed

function yell(msg){
    console.log(msg.toUpperCase().repeat(3)); // here code is good and it's working But the problem arises when someone enter 
}
yell(34)


// for avaoidng that we will wrap that function in try and in catchbwe will show "error"
function yell(msg){

    try{
        console.log(msg.toUpperCase().repeat(3));
    }catch (e){
        console.log("Hey plesae Enter string")
    }
    
}    yell(12)

// yell(12)

console.log("Hey i am next");