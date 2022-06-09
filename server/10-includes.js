const pets = ['cat', 'dog', 'bat'];

const includes = pets.includes('bat');

console.log('includes', includes);

// VS

let includesInArray = false;

for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includesInArray = true;
        break;
    }
}

console.log('for', includesInArray);
