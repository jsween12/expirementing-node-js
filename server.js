const bubbleSort = require('./controllers/bubbleSort'); 
const selectSort = require('./controllers/selectSort'); 
const missingWords = require('./controllers/missingWords'); 
const RandomArrayGeneration = require('./controllers/randomArray' ); 
const GetRequest = require('./controllers/GETRequest'); 


//const {v4: uuid} = require ('uuid'); 


let RandomArray1 = RandomArrayGeneration.createRandomArray(20); 
let RandomArray2 = RandomArrayGeneration.createRandomArray(20); 


console.log("The random array is: " + RandomArray1 + "\n"); 


let sortedArray1 = bubbleSort.bubbleSort(RandomArray1);  


console.log("This is the bubbleSort() results for the random array: " + sortedArray1 + "\n");

console.log("The random array is: " + RandomArray2 + "\n");

console.log("The select sort results are: " + selectSort.selectSort(RandomArray2) + "\n"); 

console.log ("--------------------------------------------------------------------------------- \n")

let fullString = "I am using HackerRank to learn programming";
let partialString = "I learn programming";  

console.log("Full String is: " + fullString); 
console.log("Partial String is: " + partialString + "\n"); 

let fullArray = missingWords.stringToArray(fullString);
let partialArray = missingWords.stringToArray(partialString);

console.log("The full string converted to an Array is: "+ fullArray); 
console.log("The partial string converted to an Array is: " + partialArray + " \n");

let theWords = missingWords.missingWords(fullArray, partialArray); 

console.log("The missing words from string is: " + theWords); 

console.log ("--------------------------------------------------------------------------------- \n")

console.log("I made an API in class that returns state facts @ https://fantasy-humdrum-restaurant.glitch.me/states/. It returns individual state facts with the state abbreviation added to the end")
console.log("\n The following is the result of querying that api with the code : 'OK'"); 

GetRequest.getStatesFacts("OK"); 










