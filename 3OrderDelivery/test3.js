const minDeliveryCost = require("./index");

const input = [
    [8, 3, 11],
    [1, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [4, 6],
    [3, 7],
    [7, 8],
    [12, 5, 1],
    [11, 10, 6],
    [1, 6, 7],
    3,
    [3, 4],
    [4, 4],
    [7, 5]
];

let output = minDeliveryCost(input);
console.log(output);