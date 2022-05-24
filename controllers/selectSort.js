function selectSort (array){
    
    let lowestValue = null; 

    for(let i = 0; i < array.length; i++){
        lowestValue = array[i];
        indexOfLowest =null; 
        for(let searchIndex = i; searchIndex < array.length; searchIndex++){
            
            if(lowestValue > array[searchIndex]){
                lowestValue = array[searchIndex]; 
                indexOfLowest = searchIndex; 
            }
        }

        //now switch the lowest Value into the i position. 

        let switchHolder = array[i];

        array[i]= lowestValue; 
        array[indexOfLowest]= switchHolder; 

    }
    
        return array; 
    }

    module.exports ={ selectSort}; 