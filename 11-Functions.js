function onePlusAvg(x, y){
    return 1 + (x + y)/2;
}

let a = 5;
let b = 3;
let c = 2;

console.log("The average of a and b is ", onePlusAvg(a, b));
console.log("The average of b and c is ", onePlusAvg(b, c));
console.log("The average of a and c is ", onePlusAvg(a, c));

const sum = (p, q) => {
    return p + q;
}
console.log(sum(5,5));