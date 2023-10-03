//Primitive DataTypes
let a = 3;
let b = null;
let c = true;
let d = BigInt("483") + BigInt("7");
let e = "Yash";
let f = Symbol("I am a symbol")
let g = undefined; //No need to define
console.log(a, b, c, d, e, f, g);
console.log(typeof d);

//Objects in JS

const item = {
    "Yash": true,
    "Sarthak": false,
    "Nikhil": undefined
}

console.log(item["Yash"])