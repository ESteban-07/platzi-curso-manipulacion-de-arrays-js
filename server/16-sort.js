const allMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

const months = ['Mar', 'Jan', 'Feb', 'Dec'];

months.sort((a, b) => allMonths.indexOf(a) - allMonths.indexOf(b));
console.log(months);

const numbers = [1, 30, 4, 21, 100000];

numbers.sort((a, b) => a - b);

console.log(numbers);

const words = [
    'réservé',
    'premier',
    'communiqué',
    'café',
    'adieu',
    'éclair',
    'banana',
];

words.sort((a, b) => a.localeCompare(b));
console.log(words);

const orders = [
    {
        customerName: 'Nicolas',
        total: 600,
        delivered: true,
        date: new Date(2022, 6, 5, 4),
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
        date: new Date(2022, 5, 3, 8),
    },
    {
        customerName: 'Santiago',
        total: 1840,
        delivered: true,
        date: new Date(2022, 3, 8, 14),
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
        date: new Date(2022, 6, 10, 14),
    },
];

orders.sort((a, b) => a.total - b.total);
console.log('sortedByTotal', orders);

orders.sort((a, b) => b.date - a.date);
console.log('sortedByDate', orders);
