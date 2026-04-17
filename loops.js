// FOR LOOP - SYNTAX
//for(start;condition;increment){
//    code to be repeated
//}

for(let i=1;i<=3;i++){
    console.log("Repetition " + i)
}

// temp of 7 days using only variables
// let temp1 = 30;
// let temp2 = 40;
// let temp3 = 25;
// let temp4 = 15;
// let temp5 = 24;
// let temp6 = 35;

// temp 7 days using an array
let temperatures = [30,28,25,22,29,31,27];
// console.log(temperatures[0]);
// console.log(temperatures[1]);
// console.log(temperatures[2]);
// console.log(temperatures[3]);
// console.log(temperatures[4]);
// console.log(temperatures[5]);
// console.log(temperatures[6]);

for(let i=0;i<7;i++){
    console.log(temperatures[i]);
}

for(let i=0;i<7;i++){
    if(temperatures[i] > 25){
        console.log(temperatures[i] + " is Hot");
    }else if(temperatures[i] > 10){
        console.log(temperatures[i] + " is OK");
    }else{
        console.log(temperatures[i] + " is cold");
    }
}