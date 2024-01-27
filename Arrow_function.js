// /syntactically compact alternatives to a regular function expression

const sqqare =(x)=>{
    return x*x;
}

const add=function(x,y){ //Normal syntax where we have used function syntax
    return x+y
}

const sum=(x,y)=>{// Here instaed of function we use arrow 
    return x+y;
}

const rolldie=() =>{
    return Math.floor(Math.random()*6)+1
}
console.log(rolldie())

////For getting "Implicit return" in Arrow Function  we should remove curley bracess and add parenthesis in that and we should remove return
// /NOTE: "Implicit return" only use for single expression For multiexpression it will not work

const rolldie=() =>(
    Math.floor(Math.random()*6)+1)// Work same removed " curley bracess"

console.log(rolldie())

const add=(x,y)=> x+y
console.log(add(4+5));

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    } 
]

const newMovie=movies.map(function(movie){
    return `${movie.title}-${movie.score/10}`//Simple expression
})
console.log(newMovie);
// Now using arrow function 

const newMovie1=movies.map((movie)=>{
    return `${movie.title}-${movie.score/10}`// with Arrow function 
})
console.log(newMovie1);