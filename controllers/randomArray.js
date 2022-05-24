//make a function to generate random arrays that are the prescribed length
//input: length of random array
//output: random array of perscribed length between 1 and 100;  

function createRandomArray (length){

    let newArray = new Array (length); 

    for(let i = 0; i < newArray.length; i++){
        newArray[i] = Math.floor(Math.random()* 100); 


    }

    return newArray; 

}

module.exports = {createRandomArray}; 