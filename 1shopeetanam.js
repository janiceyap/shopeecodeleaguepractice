function tabulate(input){

    console.log(input);

    // only look for a line where there are 2 integers M, N
    // move the index to the start of the next test case immedately

    let i=1; // ie the 1st element is T, and the 1st test case starts at 2nd element 
    let output = [];

    while (i<input.length){

        // if it is the 1st test case, else increment i to look for the
        // line that indicates the start of a test case
        // i is the test case number.

        if (input[i].length == 2){
            console.log("i=", i);

            // each for loop handles each line (N) in a test case.

            let cumSumLeft = [[]];
            let cumSumRight = [[]];

            let maxSumLeft = [];
            let maxSumRight = [];

            let kLeft = [];
            let kRight = [];

            let optionsleft = [[]];
            let optionsflex = [[]];
            let optionsright = [[]];

            // j is the Nth line of each test case

            for (let j=0; j<input[i][0]; j++){
                console.log("j=", j);

                // k denotes the index of the current array of the path values.

                for (let k=0; k<input[i][1]; k++){

                    if (k==0){

                        cumSumLeft[j][k] = input[i+1+j][k];
                        cumSumRight[j][input[i][1]-k-1] = input[i+1+j][input[i][1]-k-1];

                    } else {

                        cumSumLeft[j][k] = cumSumLeft[j][k-1] + input[i+1+j][k];
                        cumSumRight[j][input[i][1]-k-1] = cumSumRight[j][input[i][1]-k] + input[i+1+j][input[i][1]-k-1];

                    } 
                }

                if (j==0){

                    maxSumLeft[j] = Math.max(...cumSumLeft[j]);
                    kLeft[j] = cumSumLeft[j].indexOf(maxSumLeft[j]);

                    if (maxSumLeft[j]<=0 && kLeft[j]<input[i][1]-1){
                        optionsleft[j].push(0);
                    } else if (maxSumLeft[j]<=0 && kLeft[j]==input[i][1]-1){
                        optionsflex[j].push(0);
                    } else if (maxSumLeft[j]>0 && kLeft[j]<input[i][1]-1){
                        optionsleft[j].push(maxSumLeft[j]);
                    } else if (maxSumLeft[j]>0 && kLeft[j]==input[i][1]-1){
                        optionsflex[j].push(maxSumLeft[j]);
                    }

                    if (kLeft[j] !== input[i][1]-1) {
                        optionsflex[j].push(cumSumLeft[j][input[i][1]-1])
                    }

                    // case of only 1 row.

                    if (j==(input[i][0]-1)){
                        if (maxSumLeft[j]<=0){
                            output.push(0);
                        } else {
                            output.push(maxSumLeft[j]);
                        }
                    } 

                } else {

                    maxSumLeft[j] = Math.max(...cumSumLeft[j]);
                    kLeft[j] = cumSumLeft[j].indexOf(maxSumLeft[j]);
                    console.log("maxSumLeft", maxSumLeft);
                    console.log("kleft", kLeft);

                    maxSumRight[j] = Math.max(...cumSumRight[j]);
                    kRight[j] = cumSumRight[j].indexOf(maxSumRight[j]);
                    console.log("maxSumRight", maxSumRight);
                    console.log("kright", kRight);

                    if (maxSumLeft[j]<=0 && kLeft[j]<input[i][1]-1){
                        if (!isNaN(parseInt(optionsleft[j-1]))) {
                            optionsleft[j].push(parseInt(optionsleft[j-1]));
                        }
                        if (!isNaN(parseInt(optionsflex[j-1]))) {
                            optionsleft[j].push(parseInt(optionsflex[j-1]));
                        }
                    } else if (maxSumLeft[j]<=0 && kLeft[j]==input[i][1]-1){
                        if (!isNaN(parseInt(optionsleft[j-1]))) {
                            optionsflex[j].push(parseInt(parseInt(maxSumLeft[j])+parseInt(optionsleft[j-1])));
                        }
                        if (!isNaN(parseInt(optionsflex[j-1]))){
                            optionsflex[j].push(parseInt(parseInt(maxSumLeft[j])+parseInt(optionsflex[j-1])));
                        } 
                    } else if (maxSumLeft[j]>0 && kLeft[j]<input[i][1]-1 && cumSumLeft[j][kLeft[j]]!==cumSumLeft[j][input[i][1]-1]){
                        if (!isNaN(parseInt(optionsleft[j-1]))){
                            optionsleft[j].push(parseInt(parseInt(maxSumLeft[j])+parseInt(optionsleft[j-1])));
                        }
                        if (!isNaN(parseInt(optionsflex[j-1]))){
                            optionsleft[j].push(parseInt(parseInt(maxSumLeft[j])+parseInt(optionsflex[j-1])));
                        }
                    } else if (maxSumLeft[j]>0){
                        if (!isNaN(parseInt(optionsleft[j-1]))){
                            optionsflex[j].push(parseInt(parseInt(maxSumLeft[j])+parseInt(optionsleft[j-1])));
                        }
                        if (!isNaN(parseInt(optionsflex[j-1]))){
                            optionsflex[j].push(parseInt(parseInt(maxSumLeft[j])+parseInt(optionsflex[j-1])));
                        }                        
                    }

                    // if (kLeft[j] !== input[i][1]-1) {
                    //     optionsflex[j].push(cumSumLeft[j][input[i][1]-1])
                    // }

                    if (maxSumRight[j]<=0 && kRight[j]>0){
                        if (!isNaN(parseInt(optionsright[j-1]))){
                            optionsright[j].push(parseInt(optionsright[j-1]));
                        }
                        if (!isNaN(parseInt(optionsflex[j-1]))){
                            optionsright[j].push(parseInt(optionsflex[j-1]));
                        }
                    } else if (maxSumRight[j]<=0 && kRight[j]==0){
                        if (!isNaN(parseInt(optionsright[j-1]))){
                            optionsflex[j].push(parseInt(optionsright[j-1]));
                        }
                        if (!isNaN(parseInt(optionsflex[j-1]))){
                            optionsflex[j].push(parseInt(optionsflex[j-1]));
                        }
                    } else if (maxSumRight[j]>0 && kRight[j]>0){
                        if (!isNaN(parseInt(optionsright[j-1]))){
                            optionsright[j].push(parseInt(maxSumRight[j])+parseInt(optionsright[j-1]));
                        }
                        if (!isNaN(parseInt(optionsflex[j-1]))){
                            optionsright[j].push(parseInt(maxSumRight[j])+parseInt(optionsflex[j-1]));
                        }
                    } else if (maxSumRight[j]>0 && kRight[j]==0){
                        if (!isNaN(parseInt(optionsright[j-1]))){
                            optionsflex[j].push(parseInt(maxSumRight[j])+parseInt(optionsright[j-1]));
                        }
                        if (!isNaN(parseInt(optionsflex[j-1]))){
                            optionsflex[j].push(parseInt(maxSumRight[j])+parseInt(optionsflex[j-1]));
                        }
                    }

                    if (kRight[j] !== 0) {
                        optionsflex[j].push(cumSumRight[j][0])
                    }

                    // case of the last row

                    if (j==(input[i][0]-1)){
                        let flatArray = optionsleft[j].concat(optionsright[j].concat(optionsflex[j]));
                        console.log("Flat Array", flatArray);
                        output.push(Math.max(...flatArray));                        
                    } 
                }

                cumSumLeft.push([]);
                cumSumRight.push([]);

                optionsleft.push([]);
                optionsflex.push([]);
                optionsright.push([]);

                console.log("options left", optionsleft[j]);
                console.log("options flex", optionsflex[j]);   
                console.log("options right", optionsright[j]);    


            }



            console.log("cumSumLeft", cumSumLeft);
            console.log("cumSumRight", cumSumRight);


            // there are input[i][1] + 2 path options each day the 
            // character can choose to take, need to find the max value

            // value of each path can be calculated as the cumulative sum
            // from the direction the character is walking from. 
            // 0 for not moving from position.

            // except for the 1st line which has to be cumulative fr left,
            // other lines need to be evaluated for cumulative from right
            // and compared to see which sum is bigger.

            // Unless the choice is to remain at current position then 
            // only need to sum from one direction.

            // if remain at current position, sum = 0. 
            // however, it is possible that summing from left/right also gives 0.
            // compare array.lastIndexOf vs array.indexOf to determine if there's only
            // a single 0 value in the summation array.

            // move the index of the while loop to the next test case
            i = i + input[i][0] + 1; 

        } else {
            i++;
            console.log("something is wrong.");
        }
        
    }

    // use values of M, N to control number of times to run the 
    // next loop and maximize value.

    return output;
    
}

module.exports = tabulate;