const elements = ['Fire', 'Air', 'Water', 'Metal'];

let rtaFinal = '';
let separator = '--';

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (index === elements.length - 1) {
        rtaFinal += element;
    } else {
        rtaFinal += element + separator;
    }
}

console.log('for', rtaFinal);

const rta = elements.join('--');

console.log('join', rta);

// Función para remover tildes
const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const string = removeAccents('Platzi Curso de Manipulación de Arrays en JS');

const http = 'http://';
const https = 'https://';

const urlFinal = https.concat(string.split(' ').join('-').toLowerCase());

console.log('urlFinal', urlFinal);
// expected output: urlFinal https://platzi-curso-de-manipulacion-de-arrays-en-js
