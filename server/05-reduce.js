const numbers = [1, 2, 3, 4, 5];

const reducer = numbers.reduce((sum, element) => sum + element, 0);

console.log('reducer', reducer);

// VS

let sum = 0;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    sum += element;
}

console.log('sum', sum);
