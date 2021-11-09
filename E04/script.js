//my first algorithm
//ALGORITHM
function algorithm(a, b){
    let x = 1;
    while(x < b){
        a *= a;
        x++;
    }
    return a;
}

console.log(algorithm(2, 2));
console.log(algorithm(3, 1));
console.log(algorithm(2, 4));


//The algorithm intends to calculate the power of a number. But - as you can see, something is wrong in it.
//Try to find and correct the mistake.
//FiXED ALGORITHM
    console.log('fixed');
    function algorithm2(a, b){
    let x = 1;
    let result = 1; //we need an extra variable to be multiplied by a
    while(x < b){
        result *= a;
        x++;
    }
    return result;
}

console.log(algorithm2(2, 2));
console.log(algorithm2(3, 1));
console.log(algorithm2(2, 4));