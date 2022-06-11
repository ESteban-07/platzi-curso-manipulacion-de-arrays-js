const users = [
    { userId: 1, username: 'Tom', attributes: ['Nice', 'Cute'] },
    { userId: 2, username: 'Mike', attributes: ['Lovely'] },
    { userId: 3, username: 'Nico', attributes: ['Nice', 'Cool'] },
];

const rta = users.map((user) => user.attributes).flat();

// console.log('map-flat', rta);

const rta2 = users.flatMap((user) => user.attributes);

// console.log('flatMap', rta2);

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: 'Cita 1',
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: 'Cita 2',
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: 'Cita 2',
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: 'Cita 4',
        },
    ],
};

// Mi solución

let arrayDates = [];

for (let calendar in calendars) {
    const newArr = calendars[calendar];
    newArr.map((dates) => arrayDates.push(dates.startDate));
}

console.log('mi solución', arrayDates);

// VS

// Utilizando flatMap (por separado)

/*
1. Con Object.values, obtenemos una lista con los 
valores de cada key en nuestro objeto calendars

2. Con flat “aplanamos” la lista ya que con el paso
anterior nos quedan dos arrays dentro de uno:
[ [ primaryCalendar  ], [ secondaryCalendar ] ]

3. Con map recorremos cada elemento de la lista ya unificada.
Estos elementos son finalmente objetos asi que solo nos queda
acceder al atributo de startDate y listo.
*/

const rta3 = Object.values(calendars)
    .flat()
    .map((item) => item.startDate);

console.log('flatMap', rta3);
