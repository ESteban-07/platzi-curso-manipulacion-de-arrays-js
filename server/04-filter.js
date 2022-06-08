const words = ['spray', 'limit', 'elite', 'exuberant'];

const mapArray = words.filter((item) => item.includes('li'));

console.log('mapArray', mapArray);
console.log('original', words);

// VS

// const newArray = [];

// for (let index = 0; index < words.length; index++) {
//     const element = words[index];
//     if (element.includes('li')) {
//         newArray.push(element);
//     }
// }

// console.log('newArray', newArray);
// console.log('original', words);

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
    {
        customerName: 'Nicolas',
        total: 2322,
        delivered: false,
    },
];

const filterOrders = orders.filter((item) => {
    return item.delivered && item.total >= 100;
});

console.log('filterOrders', filterOrders);

const search = (query) => {
    return orders.filter((item) => {
        return item.customerName.includes(query);
    });
};

console.log(search('Nico'));
console.log(search('a'));

const people = [
    {
        name: 'Elijah',
        lastName: 'Dunkerke',
        age: 24,
    },
    {
        name: 'Anna',
        lastName: 'Peters',
        age: 38,
    },
    {
        name: 'John',
        lastName: 'Smilga',
        age: 35,
    },
    {
        name: 'Ryan',
        lastName: 'Duke',
        age: 29,
    },
];

const searcher = (query) => {
    return people.filter((person) => {
        return person.lastName.includes(query);
    });
};

console.log(searcher('er'));
