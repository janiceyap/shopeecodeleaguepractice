function handleInput(input){
    const inputObj = {
        N : input[0][0],
        D : input[0][1],
        E : input[0][2],
        X : [],
        Y : [],
        W : [],
        C : [],
        P : [],
        M : null,
        K : [],
        G : []
    };

    inputObj.M = input[inputObj.E + inputObj.D + 1];

    for (let i=0; i<inputObj.E; i++){
        inputObj.X.push(input[i+1][0]);
        inputObj.Y.push(input[i+1][1]);
    };

    for (let j=0; j<inputObj.D; j++){
        inputObj.W.push(input[1+inputObj.E+j][0]);
        inputObj.C.push(input[1+inputObj.E+j][1]);
        inputObj.P.push(input[1+inputObj.E+j][2]);
    };

    for (let k=0; k<inputObj.M; k++){
        inputObj.K.push(input[inputObj.E + inputObj.D + 2+k][0]);
        inputObj.G.push(input[inputObj.E + inputObj.D + 2+k][1]);
    };

    return inputObj;
}

module.exports = handleInput;