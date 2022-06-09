const numbers = [1, 30, 39, 29, 10, 13];

let rta;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = true;
    } else {
        rta = false;
        break;
    }
}

console.log('for', rta);

// VS

const rta2 = numbers.every((item) => item <= 40);

console.log('every', rta2);
