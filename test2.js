let howManyShoffee = require("./2shoffee");

const case1 = [
    [3,3],
    [1,3,4]
];

const case2 = [
    [6,3],
    [1,1,4,5,1,4]
];

const case3 = [
    [10,4],
    [4,1,6,2,1,7,6,7,2,7],
];

// const output1 = howManyShoffee(case1);
// const output2 = howManyShoffee(case2);
const output3 = howManyShoffee(case3);

// console.log("Output1", output1);
// console.log("Output2", output2);
console.log("Output3", output3);