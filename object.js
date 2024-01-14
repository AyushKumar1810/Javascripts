// const fitbitData={//Property = Key + value
//     totalstes:30879,
//     totalmiles:222,
//     avgCalorieBurn:5890,
//     workoutsThisweeks:'5 out of 7',
//     avgGoodSleep: '2:54'


// };
// console.log(fitbitData);
// const person ={first_Name:'Ayush' , Last_Name:"kumar" , Age:21,Gender:"Male" 

// }
// console.log((person));

const Kitchen_sink={
    favNum:9212226,
    isGunny:true,
    colours:['red' , 'orange' , 'blue']
}
console.log(Kitchen_sink);
Ayush=Kitchen_sink["favNum"]//For accessing Data of object we have to use syntax kitchen_sink["Objectname"]
console.log(Ayush);
// Another method is that we can use synatx Kitchen_sink.object name 
AYushi=Kitchen_sink.favNum
console.log(AYushi);

const midsem={
    denielle:96,
    thomas:78
}
midsem.thomas=79// For updating thomas Score we use that syntax
console.log(midsem);

//Array + Object 

const comments = [
    {username:'Ayushi' , text:'Lolololol' , vote:'2379'},
    {username:'Ronaldo' , text:'Suuiiiii' , vote:'9999'}
]

// For accessing text value of 2nd row and coloumn we should 1st got to 2nd row then we can do Chain with that desired key and to get value . 
messi=comments[1].text
console.log(messi);