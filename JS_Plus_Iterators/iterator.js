// let plusFive = (number) => {
//   return number + 5;
// };

// const f = plusFive;

// console.log(plusFive(3));
// // f(9);
// console.log(f(9));

// const isEven = (n) => !(n % 2);

// let printMsg = (fn, num) => {
//   const isNumEven = fn(num);
//   console.log(
//     `The number ${num} is ${isNumEven ? `an even` : `not an even`} number.`
//   );
// };

// console.log(isEven(3));

// printMsg(isEven, 4);

const arrayOfNumbers = [4, 5, 6, 7, 8];
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);

const randomNumbers = [6, 11, 42, 8, 4];
const filteredArray = randomNumbers.filter((n) => n > 7);
console.log(filteredArray);

const finalParticipants = ['Taylor', 'Donald', 'Ron', 'Natalie', 'Tim'];
const announcements = finalParticipants.map(
  (member) => `${member} joined the contest.`
);
console.log(announcements);