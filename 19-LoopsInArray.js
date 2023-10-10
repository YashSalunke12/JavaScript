let num = [1,2,3,4,5];

//Normal Loop
// for(let i=0; i<num.length; i++){
//     console.log(num[i]);
// }

// //ForEach Loop
// num.forEach((element) => {
//     console.log(element*element);
// })

// //Array from
// let name1 = "Yash";
// let arr = Array.from(name1);
// console.log(arr);

//For of loop
for(let item of num){
    console.log(item);
}

//For in loop
for(let i in num){
    console.log(i);
}