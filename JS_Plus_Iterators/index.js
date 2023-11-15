console.log('Array Iterator functions');
console.log('-----');
console.log('forEach');
// without arrow functions
// const months = ['January', 'February', 'March', 'April', 'May'];

// for (let i = 0; i < months.length; i++) {
//   // const element = months[i];
//   // console.log(element);
//   console.log(months[i]);
// }

// // with forEach array function
// months.forEach((month) => console.log(month));

// const course = 'Clarusway';
// const charsOfCourse = course.split('');
// charsOfCourse.forEach((char) => console.log(char));

// // forEach will return undefined
// const returnedVal = months.forEach(function (month) {
//   return month;
// });
// console.log(`Returned value is ${returnedVal}`);

// // what about index and the whole array
// months.forEach((month, idx, arr) => console.log(month, idx, arr));
/**
 * Advantages
 * 1. short, easy to understand
 * 2. no need to keep track of elements, no extra counter needed
 * 3. easy to debug no extra var
 * 4. auto stop after iteration no loop control needed
 */

console.log('-----');
console.log('map');
// without array function manual way

const moviePlayers = [
  { firstName: 'Tom', lastName: 'Hanks', age: 64 },
  { firstName: 'Will', lastName: 'Smith', age: 52 },
  { firstName: 'Keanu', lastName: 'Reeves', age: 56 },
  { firstName: 'Tom', lastName: 'Cruise', age: 58 },
  { firstName: 'Sandra', lastName: 'Bullock', age: 56 },
];
const playerList = [];
for (let index = 0; index < moviePlayers.length; index += 1) {
  const element = moviePlayers[index];
  playerList.push(`${element.firstName} ${element.lastName}`);
}
console.log(playerList);

// let's write with map function

console.log(
  moviePlayers.map((element) => `${element.firstName} ${element.lastName}`)
);