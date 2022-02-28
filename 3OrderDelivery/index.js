const handleInput = require("./handleInput");

function minDeliveryCost(input){
    let output = 0;
    let inputObj = handleInput(input);


    // console.log(inputObj);
    console.log(inputObj.adjCity);

    // objective: minimize cost while working within limited supply









    return output;
}

module.exports = minDeliveryCost;