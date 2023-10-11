//Question-1
// let arr = [1,2,3,4,5];
// let a = prompt("Enter the next number");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

//Question-2
// let arr1 = [1,2,3,4,5];
// let a;
// do{
//     a = prompt("Enter any num");
//     a = Number.parseInt(a);
//     arr1.push(a);
//     console.log(arr1);
// }while(a!=0);

//Question-3
// let arr2 = [20,33,44,50,60,65,40];
// let a = arr2.filter((value) => {
//     return value%10==0;
// })
// console.log(a);


// //Question-4
// let arr3 = [2,3,4,5,6,7];
// let b = arr3.forEach((element) => {
//     console.log(element*element);
// })

//Question-5
let arr5 = [1,2,4,5,6];
let c = arr5.reduce((a1, a2) => {
    return a1 * a2;
})
console.log(c)

