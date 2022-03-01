const handleInput = require("./handleInput");

function minDeliveryCost(input){
    let output = 0;
    let inputObj = handleInput(input);
    let distanceMatrix = []; // an array of objects that hold arrays of cities 1km, 2km and 3km apart.

    // console.log(inputObj);
    console.log("adjCity", inputObj.adjCity);
    console.log("warehouse", inputObj.warehouse);
    console.log("order", inputObj.order);

    // objective: minimize cost while working within limited supply

    // work out the distance matrix for each order.
    for (let i=0; i<inputObj.order.length; i++){

        one = [];
        two = [];
        three = [];
        four = [];
        five = [];

        one = inputObj.adjCity.map();





        distanceMatrix[i].push({
            onekm : one, 
            twokm : two,
            threekm : three, 
            fourkm : four,
            fivekm : five
        });











    }









    return output;
}

module.exports = minDeliveryCost;