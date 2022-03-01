function handleInput(input){
    let repeatOrderCity = -1;
    const inputObj = {
        N : input[0][0],
        D : input[0][1],
        E : input[0][2],
        M : input[][0],
        adjCity : [],
        warehouse : [],
        order : [],
    };

    inputObj.M = input[inputObj.E + inputObj.D + 1];

    for (let i=0; i<inputObj.E; i++){

        inputObj.adjCity.push({
            x : input[i+1][0],
            y : input[i+1][1]
        });

        inputObj.adjCity.push({
            x : input[i+1][1],
            y : input[i+1][0]
        });

    };

    for (let j=0; j<inputObj.D; j++){

        // all cities have at most 1 warehouse, means won't be repeated.

        inputObj.warehouse.push({
            qty : input[1+inputObj.E+j][0],
            cost : input[1+inputObj.E+j][1],
            city : input[1+inputObj.E+j][2]
        });

        // inputObj.W.push(input[1+inputObj.E+j][0]);
        // inputObj.C.push(input[1+inputObj.E+j][1]);
        // inputObj.P.push(input[1+inputObj.E+j][2]);
    };

    for (let k=0; k<inputObj.M; k++){

        // consolidate orders by city

        repeatOrderCity = inputObj.order.findIndex(e => e.city === input[inputObj.E + inputObj.D + 2+k][1]);
        console.log("repeatOrderCity", repeatOrderCity);

        if ( repeatOrderCity === -1){
            inputObj.order.push({
                qty : input[inputObj.E + inputObj.D + 2+k][0],
                city : input[inputObj.E + inputObj.D + 2+k][1]
            });
        } else {
            inputObj.order[repeatOrderCity].qty = inputObj.order[repeatOrderCity].qty + input[inputObj.E + inputObj.D + 2+k][0];
        }
        
        // inputObj.K.push(input[inputObj.E + inputObj.D + 2+k][0]);
        // inputObj.G.push(input[inputObj.E + inputObj.D + 2+k][1]);
    };

    return inputObj;
}

module.exports = handleInput;