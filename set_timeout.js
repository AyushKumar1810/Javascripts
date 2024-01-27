console.log("Hello............?");// 1st this will run
setTimeout(()=>{
    console.log(".......Are u still There ..?");//1st paramenter is functiona and second is Time after which the function will run
},3000)// 3rd This will Run after 3seconds
console.log("Ok Then Good Bye ");//2nd this will run

setInterval(()=>{
    console.log(Math.random()*6) +1;
},2000)
console.log("Please Let me go !");

// /FILTER
// It will create a new array that will passes the conditiond and return the new array
const nums=[1,2,3,4,5,6,7,8,9]
const odd=nums.filter(n=>{ // here if will see the condition on `n` and return the new array that has passed the array
    return n%2===1;
})
console.log(odd);
const smallNumbers=nums.filter(n=>n<5)
console.log(smallNumbers);



const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]
const GoodMovies = movies.filter(m=>m.score>80)
const badMovies = movies.filter(m=>m.score<70)
console.log(GoodMovies);
console.log(badMovies);

const recentMovies= movies.filter(y=>y.year>2000)
console.log(recentMovies);

