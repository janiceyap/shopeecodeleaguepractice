function isShoffee(mix, K){
    let qualify = true;
    let initialValue = 0;

    Vtotal = mix.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );

    Vavg = Vtotal / mix.length ;

    if (Vavg < K){
        qualify = false;
    }

    return qualify;
}

function howManyShoffee(caseinput){

    console.log("caseinput in function", caseinput);

    let N = caseinput[0][0];
    let K = caseinput[0][1];
    let counter = 0;

    for (let i=0; i<N; i++){

        console.log("i=",i);

        for (let j=0; j<N-i; j++){

            console.log("j=",j);

            let mix = caseinput[1].slice(i,N-j);

            console.log("mix=",mix);

            if(isShoffee(mix,K)){
                console.log("isShoffee", isShoffee(mix,K));
                counter++;
            }
        }
    }

    console.log("counter", counter);

    return counter;
}

module.exports = howManyShoffee;