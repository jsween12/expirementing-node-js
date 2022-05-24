const http = require("https"); 

//takes a state abbreviation and returns JSON data for that state. 
async function getStatesFacts (StateAbbreviation){

let url = `https://fantasy-humdrum-restaurant.glitch.me/states/${StateAbbreviation}` 

    let promise = new Promise ((resolve,reject) => {

        http.get(url, res => {

            let rawData =''; 
            parsedData={}; 
            
            
            //chunk data gets appended into rawData. 
                res.on('data', chunk => {
                    rawData += chunk; 
                }); 
            
            //when the data reached the end, parse the data into JSON, then return
                res.on('end', () => {
                    let result = JSON.parse(rawData); 
                    console.log(result); 
                    resolve(result);   
                })
            
            })


    })

    let result = await promise;

    return result; 


}
module.exports = {getStatesFacts}; 