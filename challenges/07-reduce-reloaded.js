const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10];

// This function validates whether a number exists in a given range
const between = (x, min, max) => x >= min && x <= max;

const reducer = numbers.reduce(
    (obj, item) => {
        if (between(item, 1, 5)) {
            obj['1-5'] += 1;
        } else if (between(item, 6, 8)) {
            obj['6-8'] += 1;
        } else if (between(item, 9, 10)) {
            obj['9-10'] += 1;
        }
        return obj;
    },
    {
        '1-5': 0,
        '6-8': 0,
        '9-10': 0,
    }
);

console.log(reducer);
// expected output: { '1-5': 5, '6-8': 5, '9-10': 3 }
