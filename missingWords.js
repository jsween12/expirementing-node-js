
//takes fullArray, and compares it to partialArray. It returns an array of the elements of fullArray not found in partialArray. 
function missingWords (fullArray, partialArray){
    console.log("fullArray = "+ fullArray); 
    console.log("partial Array = "+ partialArray); 

    let newArray = []; 
    let j = 0; 

    //The problem I had was I was using 1 index to move through both arrays. Key is to identify where they are different, then skip ahead 
    //on the fullarray index and check again. This code holds at the place they are different and copies the elements into the newArray
    //until there is a match
    for(let i = 0 ; i < fullArray.length; j++ , i++){
        if (fullArray[i] != partialArray[j]){

            while(fullArray[i] != partialArray[j]){
                newArray.push(fullArray[i]); 
                i++; 
            } 
            
        }
    
    }

return newArray; 

}


//takes an string of words and converts to an array of words
function stringToArray(wordsString){

let char1 = ""; 
let char2 = ""; 
let word = ""; 
let newArray = []; 

    for (let i = 0; i < wordsString.length; i++){
    //if the char is not a " " then add the char to the word.
        if(wordsString[i] != " "){
        
            char2 = word; 
            char1 = wordsString[i]; 
            word = char2.concat(char1);
        }
    //if the char is a space, then the word is complete. Add it to the array then reset word. 
    //(Or explained:the last word won't get pushed onto the array if the sentence doesn't end in a space )

        if(wordsString[i] == " " || i == wordsString.length-1){
            newArray.push(word); 
            word = ""; 
        }

    }

return newArray; 

}


module.exports={
    missingWords, 
    stringToArray}; 