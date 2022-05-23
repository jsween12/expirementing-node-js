const bubbleSort = require('./bubbleSort'); 
const missingWords = require('./missingWords'); 

const {v4: uuid} = require ('uuid'); 


let RandomArray = [1, 5, 8, 3, 98, 2, 45, 65, 23, 98, 9]; 

//console.log("The random array is: " + RandomArray + "\n"); 


//let array1 = bubbleSort.bubbleSort(RandomArray);  

//console.log("This is the bubbleSort() results for random array: " + array1); 

//console.log("The select sort results are: " + bubbleSort.bubbleSort(RandomArray)); 

let fullString = "I am using HackerRank to learn programming";
let partialString = "I learn programming";  

let fullArray = missingWords.stringToArray(fullString);
let partialArray = missingWords.stringToArray(partialString);

let theWords = missingWords.missingWords(fullArray, partialArray); 

console.log("The missing words from string is: " + theWords); 





