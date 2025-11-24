let numbers = [10, 25, 5, 40, 15];


let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log("Sum:", sum);


let largest = numbers[0];
for (let num of numbers) {
  if (num > largest) {
    largest = num;
  }
}
console.log("Largest Number:", largest);

