
const astrologyStorage = 
['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];

const luckLevelStorage = ['very lucky','somewhat lucky', 'lucky','somewhat unlucky','very unlucky'];

const dadJakesStorage = ["What country's capital is growing the fastest? Ireland. Every day it's Dublin.",
                            "I made a pencil with two erasers. It was pointless.",
                            "I'm reading a book about anti-gravity. It's impossible to put down!"];


const astrologyGenerator = (arr) => {

    //generate random number to select element in astrology Array
    let totalArrNum = arr.length;
    let randNum =  Math.floor(Math.random()*arr.length);
    //return element stored in the array
    //console.log(randNum);
    return arr[randNum];
}

const luckLevelGenerator = (arr) => {

    //generate random number to select element in Lucky Level Array
    let totalArrNum = arr.length;
    let randNum =  Math.floor(Math.random()*arr.length);
    //return element stored in the array
    
    return arr[randNum];
}

const dadJokesGenerator = (arr) => {

    //generate random number to select element in Lucky Level Array
    let totalArrNum = arr.length;
    let randNum =  Math.floor(Math.random()*arr.length);
    //return element stored in the array
    return arr[randNum];
}

console.log("your sign is.....?            " + astrologyGenerator(astrologyStorage)); 
console.log("How lucky are you today.....? " + luckLevelGenerator(luckLevelStorage)); 
console.log("the joke of the day:          " + dadJokesGenerator(dadJakesStorage) );