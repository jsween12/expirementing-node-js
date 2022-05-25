//const http = require("https"); 

const fetch = require('node-fetch'); 

//takes a state abbreviation and returns JSON data for that state from my api. 
async function getStatesFacts (StateAbbreviation){

let url = `https://fantasy-humdrum-restaurant.glitch.me/states/${StateAbbreviation}` 

const res = await fetch(url); 

const jsonData = await res.json(); 

console.log(jsonData); 

return jsonData; 

}
module.exports = {getStatesFacts}; 