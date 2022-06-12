const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

const product = products.find((item) => item.id === '🍔');

if (product) {
    myProducts.push(product);
    products.splice(products.indexOf(product), 1);
}

console.log('mutable products', products);
console.log('myProducts updated', myProducts);
console.log('-'.repeat(10));

// Update

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

console.log('initial state', productsV2);

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious',
    },
};

const productIndexV2 = productsV2.findIndex((item) => item.id === update.id);

if (productIndexV2 !== -1) {
    productsV2[productIndexV2] = {
        ...productsV2[productIndexV2],
        ...update.changes,
    };
}

console.log('mutable update', productsV2);
