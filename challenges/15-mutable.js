/*
Reto 1: Eliminar un elemento sin borrarlo del array original.

Solución: utilizar el método filter para crear un nuevo array
a partir del original y así  filtrar los elementos que cumplan
con la condición o en caso contrario añadir los elementos
que no la cumplan a un array distinto.
*/

const products = [
    { title: 'Cheese Burger', price: 171, id: '🍔' },
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

const product = products.filter((item) => {
    if (item.id !== '🍔') {
        return item;
    } else {
        myProducts.push(item);
    }
});

console.log('original array', products);
console.log('new array', product);
console.log('myProducts', myProducts);

/*
Reto 2: Actualizar un array sin modificar el original.

Solución: Utilizar el método map para clonar el array
original y actualizar cierto elemento sin mutar nada.
*/

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious',
    },
};

const newArray = productsV2.map((item) => {
    if (item.id === update.id) {
        return {
            ...item,
            ...update.changes,
        };
    } else {
        return {
            ...item,
        };
    }
});

console.log('original state', productsV2);
console.log('immutable update', newArray);
