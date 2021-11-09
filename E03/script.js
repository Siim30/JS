// Create an array, containing 10 numbers.
//ARRAY
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// Remove the last element from the array and log it in console.
//REMOVE LAST
console.log('remove the last one');
numbers.pop()
console.log(numbers);

// Add a new element to the end of the array.
//ADD NEW
console.log('Add new');
numbers.push(11)
console.log(numbers);

// Change the value of the array's second element to zero.
//CHANGE THRIDS VALUE
console.log('Cange the third value');
numbers[2] = 0;
console.log(numbers);

// Change the value of every third array's element to one.
//CAHANGE THE VALUE OF EVERY THIRD ARRAY'S ELEMENT
console.log('Change the value of every third arrays element');
for(let i = 0; i < numbers.length; i+=3){
    numbers[i] = 1;
}
console.log(numbers);