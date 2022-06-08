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
];

console.log('original', orders);

const rta = orders.map((item) => item.total);

console.log('rta', rta);

// const rta2 = orders.map((item) => {
//     item.tax = 0.19;

//     return item;
// });

// console.log('rta2', rta2);

// console.log('original', orders);

const rta3 = orders.map((item) => {
    return { ...item, tax: 0.19 };
});

console.log('rta3', rta3);

console.log('original', orders);

// Another example
const products = [
    {
        name: 'Pampers',
        price: 15,
        stock: 50,
    },
    {
        name: 'Shampoo',
        price: 10,
        stock: 45,
    },
    {
        name: 'Vacuum',
        price: 65,
        stock: 30,
    },
];

const taxProducts = products.map((item) => {
    return {
        ...item,
        taxes: Math.trunc(item.price * 0.19),
    };
});

console.log(taxProducts);
