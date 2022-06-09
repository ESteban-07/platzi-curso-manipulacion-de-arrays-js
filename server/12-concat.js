const elements = [1, 1, 2, 2];

const otherElements = [3, 3, 4, 4];

// Con spread operator clonamos el array en vez de asignar
// una referencia para que no existan efectos secundarios
const newArray = [...elements];

for (var i = 0; i < otherElements.length; i++) {
    const element = otherElements[i];
    newArray.push(element);
}

console.log('for', newArray);
// expected output: for [1, 1, 2, 2, 3, 3, 4, 4]

// VS

// El método Concat es IMMUTABLE

const rta = elements.concat(otherElements);

console.log('concat', rta);
// expected output: concat [1, 1, 2, 2, 3, 3, 4, 4]

// También podemos cancatenar arrays con spread operators

const rta2 = [...elements, ...otherElements];

console.log('...', rta2);
// expected output: ... [1, 1, 2, 2, 3, 3, 4, 4]

// Podemos usar ... para concatenar nuevos elementos al array
const rta3 = [...elements, 'random'];

console.log('rta3', rta3);
// expected output: rta3 [ 1, 1, 2, 2, 'random' ]

// Si utilizamos ... en un string, js lo interpretará como caracteres separados
const rta4 = [...elements, ...'random'];

console.log('rta4', rta4);
// expected output: rta4 [1, 1, 2, 2, 'r','a', 'n', 'd', 'o', 'm']

// Mutamos el array original y agregamos los elementos del otro array
elements.push(...otherElements);
console.log('elements', elements);
// expected output: elements [1, 1, 2, 2, 3, 3, 4, 4]
