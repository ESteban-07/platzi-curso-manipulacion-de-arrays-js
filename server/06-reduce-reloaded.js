const numbers = ['one', 'three', 'two', 'three', 'three', 'one', 'ten'];

const reducer = numbers.reduce((obj, item) => {
    if (obj[item]) {
        obj[item] += 1;
    } else {
        obj[item] = 1;
    }

    return obj;
}, {});

console.log('Reduce Method', reducer);

// Square Bracket Notation

const obj = {};
const item = 'one';
obj[item] = 1;
console.log('Square Bracket Notation', obj);

// Another example

const data = [
    {
        name: 'Nicolas',
        level: 'low',
    },
    {
        name: 'Andrea',
        level: 'medium',
    },
    {
        name: 'Zulema',
        level: 'high',
    },
    {
        name: 'Santiago',
        level: 'low',
    },
    {
        name: 'Valentina',
        level: 'medium',
    },
    {
        name: 'Lucia',
        level: 'high',
    },
];

// We can map data and output an array of levels first
// then we can reduce levels array and create a new
// object that represents the number of levels repeated

const mapReduceLevels = data
    .map((item) => item.level)
    .reduce((obj, item) => {
        if (obj[item]) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }

        return obj;
    }, {});

console.log('Map & Reduce Levels', mapReduceLevels);
// expected output: { low: 2, medium: 2, high: 2 }

// Or we can simply use reduce method instead to determine
// the number of levels repeated that exist in data array

const reduceLevels = data.reduce((obj, item) => {
    // Destructuring objects from data array to extract level property
    const { level } = item;
    if (obj[level]) {
        obj[level] += 1;
    } else {
        obj[level] = 1;
    }
    return obj;
}, {});

console.log('Reduce Levels', reduceLevels);
// expected output: { low: 2, medium: 2, high: 2 }
