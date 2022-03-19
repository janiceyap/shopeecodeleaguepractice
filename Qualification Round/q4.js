// process.stdin.on("data", function (input) {
//     stdin_input += input;                               // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//    main(stdin_input);
// });

const input = `3
3
1 2 3 1 2 3
3
1 2 1 3 2 3
5
1 3 5 1 2 2 4 4 5 3`;



function main(input) {

    function parseInput(input){
        let parsed=[]
        let arr = input.split('\n');

        // console.log(arr)
        parsed.push(parseInt(arr[0]));

        for (let i=0; i<parsed[0]; i++){
            parsed.push(parseInt(arr[2*i+1]));
            parsed.push(arr[2*(i+1)].split(' '));

            for (let j=0; j<parsed[2*(i+1)].length; j++){
                parsed[2*(i+1)][j] = parseInt(parsed[2*(i+1)][j]);
            }
        }
        
        // console.log("parsed=",parsed);

        return parsed;
    }

    const parsedInput = parseInput(input);
    // console.log("parsedInput=",parsedInput);

    let noOfTestCase = parsedInput[0];
    let noOfPts = 0;
    let clockwisePts = [];
    let position1 = 0;
    let position2 = 0;
    let itemsBetween = [];
    let isPointPairOK = true;
    let isTestCaseOK = true;
    let previousChecked = [];
    let isPreviousChecked = false;
    let noOfPreviousChecked = 0;
    let result = []; 

    // work on each test case
    for (let i=0; i<noOfTestCase; i++){

        previousChecked = [];

        // console.log("i=",i);

        isTestCaseOK = true;

        noOfPts = parsedInput[2*i+1];
        clockwisePts = [...parsedInput[2*(i+1)]];

        // console.log("Array clockwisePts", clockwisePts);

        // check location of each point
        for (let j=0; j<noOfPts; j++){

            previousChecked.push(clockwisePts[j]);
            noOfPreviousChecked = 0;

            // console.log("j=",j);

            isPointPairOK = true;

            position1 = clockwisePts.lastIndexOf(clockwisePts[j]);

            // split out new array of items between these two points.
            itemsBetween = clockwisePts.slice(j+1,position1);

            // console.log("Array itemsBetween", itemsBetween);

            // for each item here, we will check if there is a pair here.
            // if there is a pair, then its ok
            // if no pair, then only not OK on 2nd time

            if (itemsBetween.length > 1){
                for (let k=0; k<itemsBetween.length; k++){

                    isPreviousChecked = false;

                    if( previousChecked.find(e => e === itemsBetween[k])){
                        isPreviousChecked = true;
                    }

                    // console.log("isPreviousChecked=",isPreviousChecked);
                    // console.log("Array PreviousChecked=",previousChecked);
                    // console.log("itemsBetween[k]=",itemsBetween[k]);

                    position2 = itemsBetween.lastIndexOf(itemsBetween[k]);
    
                    // console.log("k=",k);
                    // console.log("position2=",position2);
                    // console.log("noOfPreviousChecked=",noOfPreviousChecked);

    
                    if (position2 === k){
                        if (isPreviousChecked){
                            isPointPairOK = true;
                            noOfPreviousChecked++;
                        } else if (k===noOfPreviousChecked){
                            isPointPairOK = true;
                        } else {
                            isPointPairOK = false; // *edge cases?
                            break;
                        }
                    } else {
                        isPointPairOK = true;
                    }
                }
            }            

            // console.log("isPointPairOK",isPointPairOK);

            if(!isPointPairOK){
                isTestCaseOK = false;
                break;
            }
        }
        if (!isTestCaseOK){
            result[i] = "no";
        } else {
            result[i] = "yes"
        }

        console.log(result[i]);
    }

}

main(input);