function bubbleSort (array){
     
    
    
    //while loop using switchCounter; 
    let switchCounter = null; 

    let storedValue = null; 
        while(switchCounter !=0){
            //the switchCounter needs to be out here so that if necessary, the loop will start at the beginning again. Same for comp2; 
            switchCounter = 0; 
            let comp2 = 0;
            for (let comp1 = 1; comp1 < array.length; comp1++, comp2++){
                //if the first comp is greater than the second, then switch and increment the switch counter. 
                if(array[comp1] < array[comp2]){
                    //switch the values. 
                    storedValue = array[comp2];
                    array[comp2]= array[comp1]; 
                    array[comp1]= storedValue; 
                    //if there are no switches the sort is complete, and the while loop will exit because it won't increment 0 (below)
                    switchCounter++; 
                    //console.log("This is the switchCounter: "+ switchCounter);
                }

        }
        }
        return array; 



    }

    module.exports ={ bubbleSort}; 