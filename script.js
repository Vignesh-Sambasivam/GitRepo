'use strict'; 

function sample(x,y)
{
    console.log(` I bought ${x} in ${y}`);
    console.log(parseInt(x)+parseInt(y));
}

console.log(sample('2','4'));

// These can be called before it is defined


const yearsToRetirement = (year,firstName)=>
{
    const old = 2037- year;
    const retirement = 60 - old;
    return(` ${firstName} has ${retirement} years left to retire`);

}

const num = yearsToRetirement('1991','Balu');
console.log(num);



const age = Birthyear => 2037- Birthyear;


console.log(`the person's age is ${age(1990)}`)


// Arrow functions cannot be called before it is defined
//  Arrow functions with no parameters doesnt require {} and return keyword ( It's just for a single line expression like age functon above)
// But with paramaters it needs all those.
// This keyword is cannot be used in Arrow functions.

// Calling a fuction inside a function

const cutpieces = fruit => 4 * fruit;

const fruitProcessor = function(x,y) {
    const f1pieces = cutpieces(x);
    const f2pieces = cutpieces(y);
    return (` We have Juices with ${f1pieces} pieces of fruit1 and ${f2pieces} pieces of fruit2 `)
}

console.log(fruitProcessor(5,6));