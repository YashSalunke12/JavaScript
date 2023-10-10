let arr = [10,20,30,40];

//Array Map Method
let a = arr.map((value, index, array) =>{
    console.log(value, index, array);
    return value + 5;
})
console.log(a, arr);

//Array Filter Method
let arr2 = [10,20,30,40];
let a2 = arr.filter((value) => {
    return value<=30;
})
console.log(a2, arr2);