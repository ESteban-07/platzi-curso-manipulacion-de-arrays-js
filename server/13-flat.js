const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [1, 2]]],
    [7, 8, 9],
];

const newArray = [];

for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}

console.log('for', newArray);

// Utilizando recursión
function aplanarArray(arr) {
    let newArr = [];
    if (typeof arr != 'object') {
        return [arr];
    }
    arr.forEach((element) => {
        newArr = newArr.concat(aplanarArray(element));
    });
    return newArr;
}

const rta = aplanarArray(matriz);

console.log('recursion', rta);

// VS

const rta2 = matriz.flat(3);

console.log('flat', rta2);
