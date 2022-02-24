const input1 = [4,2];
const array = [1,3,2,4];

const N = input1[0];
const K = input1[1];

console.log(`No. of Engineers = ${N}, Groups = ${K}`)
console.log('A[i] =', array);

// Noise function
function noise(left, right) {
  let sum = 0;
  for (let i = left - 1; i < right; i++) {
    sum += array[i];
  } 
  return sum * (right - left + 1);
}

// Test for all possible groups
// console.log(noise(input2, 1, 1));
// console.log(noise(input2, 1, 2));
// console.log(noise(input2, 1, 3));

// console.log(noise(input2, 2, 4));
// console.log(noise(input2, 3, 4));
// console.log(noise(input2, 4, 4));

let i = 0
let results = [];
for (let n = 1; n < N; n++) {
  let sum = noise(1, n) + noise(n+1, 4);
  console.log(`Group K1(1,${n}) + K2(${n+1},4) = ${sum}`);
  results.push(sum);    
}
console.log('Results = ', [...results]);
console.log(`Lowest noise = ${Math.min(...results)}`);