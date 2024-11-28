// SEQUECNCE PRACTICE PROBLEMS

// 1) Random function to get a single digit 
// let a = Math.floor(Math.random()*10);   // if we want to avoid 0 than add 1.
// console.log(a);

// 2) Random to get dice number between 1-6
// let b = Math.floor(Math.random()*6)+1;
// console.log(b);

// 3) Add two random dice number and print the result
// let sum = a+b;
// console.log(sum);


// 4) a program that reads 5 random 2 digit values than find their sum and average
// let num1 = Math.floor(Math.random()*90)+10;
// let num2 = Math.floor(Math.random()*90)+10;
// let num3 = Math.floor(Math.random()*90)+10;
// let num4 = Math.floor(Math.random()*90)+10;
// let num5 = Math.floor(Math.random()*90)+10;

// let sum = num1+num2+num3+num4+num5

// let avg = sum/5;

// console.log(sum , avg)

// 5) unit conversion 
// const inches = 42;
// const ft = inches/12;
// console.log(ft);

// 6) calculate area
// const l = 60;
// const b = 40;

// const area = l*b;
// const totalarea = area*25;
// console.log(totalarea)


//SELECTION PRACTICE PROBLEMS WITH IF ELSE
// 7)
// let min = 999;
// let max = 100;
// for(let i=0;i<5;i++){
//     let num = Math.floor(Math.random()*1000)+10;
//     if(num>max){
//         max = num;
//     }
//     if(num<min){
//         min = num;
//     }
// }
// console.log(min,max)

//8) Write a program that takes day and month from the command line and prints true if 
//  day of month is between March 20 and June 20, false otherwise.

// let date = process.argv[2];
// let month = process.argv[3];

// if(date > 20 && month == 3 || month == 4 || month==5 || month==6){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// 9) Leap year
// let year = process.argv[2];
// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(true);
// }else{
//     console.log(false);
// }


// 10) heads or tails
// let coin = Math.floor(Math.random()*2);
// if(coin == 0){
//     console.log("tails")
// }else{
//     console.log("heads")
// }



// Selection Practice Problems with if else if and else
// 11)


