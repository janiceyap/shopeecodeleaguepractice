let tabulate = require("./1shopeetanam");

let input = [
    3,
    [1,5],
    [-9,-8,1,2,3],
    [2,3],
    [1,4,-5],
    [-1,-9,100],
    [2,3],
    [1,4,-5],
    [-1,-1,100]
]

const output = tabulate(input);
console.log(output);