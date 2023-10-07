// //Question-1
// //using for loop
// const marks = {
//     Yash: 88,
//     Sarthak: 80,
//     Patil: 87
// }
// for(let i=0; i<Object.keys(marks).length; i++){
//     console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
// }

// //Question-2
// //using for-in loop
// for(let key in marks){
//     console.log("The marks of " + key + " is " + marks[key]);
// }

// //Question-3
// let n = 18;
// let i ;
// while(i != n){
//     i = prompt("Enter your age");
//     i = Number.parseInt(i);
// }
// console.log("Your age is " + i);

//Question-4
const mean = (a,b,c,d) => {
    return (a + b + c + d)/4;
} 
console.log(mean(3,4,5,6));