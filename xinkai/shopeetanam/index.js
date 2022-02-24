// import data from './data.js';

const data = [[1,4,-5,1],
[-1,-1,100,23],
[8,5,6,7]];

let LR = [];
let LL = [];
let RL = [];
let RR = [];

let maxLL = [];
let maxRR = [];

for (let i = 0;i<data.length;i++){
    //sum left to right and sum right to left is same. separated out for clarity
    LR[i] = data[i].reduce((total,num)=>total+num,0)
    RL[i] = data[i].reduceRight((total,num)=>total+num,0)

    //count thru from left to right, find biggest sum and end back at left (can also go all the way thru and back to left if that gives maximum points)
    for (let j=0;j<data[i].length;j++){
        if (j===0){
            maxLL[j] = data[i][j]
            continue
        }
        maxLL[j] = maxLL[j-1] + data[i][j]
    }
    LL[i]=Math.max(...maxLL,0) //if negative, then stay so value = 0;

    //count thru opposite way, same logic as above, just adjust value of j to start from right side. 
    for (let j=data[i].length-1;j>-1;j--){
        if (j===data[i].length-1){
            maxRR[j] = data[i][j]
            continue
        }
        maxRR[j] = maxRR[j+1] + data[i][j]
    }
    // console.log(maxRR)
    RR[i]=Math.max(...maxRR,0) //if negative, then stay so value = 0;
}

console.log(`LR [${LR}]`)
console.log(`RL [${RL}]`)
console.log(`LL [${LL}]`)
console.log(`RR [${RR}]`)

let L = [];
let R = [];
for (let i=0;i<data.length;i++){
    if (i===0){
        L[i]=Math.max(LL[i]) //for day 1, start at left so no need consider RL or RR
        R[i]=Math.max(LR[i]) //same 
        continue
    }
    L[i]=Math.max(L[i-1]+LL[i],R[i-1]+RL[i]); //take max L or R from previous day, then check max value if i want to end at L
    R[i]=Math.max(L[i-1]+LR[i],R[i-1]+RR[i]); //check max value for end at R. 
}
//L and R is the max value for each day at respective side. Could probably add a way to log the exact path but don't wanna go into it because it's 2am. 
console.log(L)
console.log(R)

console.log(Math.max(L[data.length-1],R[data.length-1])) 