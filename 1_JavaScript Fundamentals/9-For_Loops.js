//Normal Loop
//Program to add first n natural numbers
let sum = 0;
let n = 5;
// let n = prompt("Enter the value of n ");
// n = Number.parseInt(n);
for(let i=1; i<=n; i++){
    sum += i;
}
console.log(sum);

//For-in Loop
let obj = {
    Yash: 90,
    Sarthak: 87,
    Patil: 97,
    Nitesh: 66,
    Nikhil: 88
}
for(let a in obj){
    console.log("Marks of " + a + " is " + obj[a]);
}

//For-of Loop
for(let b of "Yash"){
    console.log(b);
}