//
// Object destructuring
// 





// const person = {
//     name: 'Omar',
//     age: 27,
//     location: {
//         city: 'Luton',
//         temp: 8
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);


// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
//    console.log(`${publisherName} is the Publisher.`); //penguin - default is self-published 





//
// Array destructuring
// 




// const address = ['747 King Street', 'London', 'UK', 'LO4 95P'];
// const [, city, state = 'Brixton'] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)','£2','£2.50','£2.75'];
const [itemName, ,priceM] = item;
console.log(`A medium ${itemName} costs ${priceM}`);
