alert("Enter a number");
let a = prompt("Enter your number : ");
a = Number.parseInt(a);
alert("The type of number is : "+ (typeof a));
let write = confirm("Do you want to write this numbet to the page?");
if(write){
    document.write(a);
}
else{
    document.write("Please allow me to write")
}