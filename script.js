// Write a program that will output numbers from 10 to 20.
// Do it using `for`, `while` and `do while` loops.

//console.for loop
console.log('For the Loop');
for(let i = 10; i <= 20; i++){
    console.log(i);
}
    
//console.while
console.log('While Loop');
let i = 9;
while(i <= 20){
    i++;
    console.log(i);
}

//console do while
console.log('Do While Loop');
let a = 10;
do{
    console.log(a);
    a++;
} while(a <= 20);


// Modify your code, so that your program will output only even numbers.
console.log('Numbers')
for(let i = 10; i <= 20; i+=2){
    console.log(i);
}

// Modify your code again, so that it becomes a function with two arguments, determining range of numbers to output (from a to b).
console.log('Function')
function arguments(a, b){
    for(var i = a; i <= b; i+=2){
    console.log(i);
    }
}

//function call
arguments(10,20);
