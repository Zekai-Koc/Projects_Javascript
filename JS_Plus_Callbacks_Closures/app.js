// ------------------------- 1 ------------------------- //
// lets have a simple function which says hello to the user by using alert function:

// function processUserInput() {
//     var fname = prompt('Please enter your name.');
//     alert('Hello ' + fname);
// }

// processUserInput();

// ------------------------- 2 ------------------------- //
// then we need to use console for processing user input with additional arguments;

// but, before continuing our example let me try to answer the question:
// Why do we need Callback Functions?
// JavaScript runs code sequentially in top-down order. However, there are some cases that code runs (or must run) after something else happens and also not sequentially. This is called asynchronous programming.
// Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.
// In JavaScript, the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed.

// now, lets change our example. instead of alerting, let's log it on console.


// function processUserInput() {
//     var fname = prompt('Please enter your name.');
//     console.log('Hello ' + fname);
// }

// processUserInput();

// ------------------------- 3 ------------------------- //
// we have two different cases but using the same code. how can we make it more generic? by using callbacks ofcourse. here it comes...
 

// function greeting(fname) {
//     alert('Hello ' + fname);
// }

// function greetingsOnConsole(fname) {
//     console.log("Greetings on console: ", fname);
// }

// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }

// processUserInput(greeting);
// processUserInput(greetingsOnConsole);


// ------------------------- 4 ------------------------- //
// let's add one more function, doing a different job.
 

// function greeting(fname) {
//     alert('Hello ' + fname);
// }

// function greetingsOnConsole(fname) {
//     console.log("Greetings on console: ", fname);
// }

// here is our additional function:
// function anotherFunction(fname) {
//     var lname = prompt('Please enter your last name.');

//     alert("hi " + fname + ". your last name is: " + lname);
// }

// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }

// processUserInput(greeting);
// processUserInput(greetingsOnConsole);
// processUserInput(anotherFunction);



// ------------------------- 5 ------------------------- //
// lets create a more complex example:

// let users = [
//     {id: 0, fname: "michael", lname: "adams", salary: 1000},
//     {id: 1, fname: "matthew", lname: "dunn", salary: 2000},
//     {id: 3, fname: "aaron", lname: "scott", salary: 1300},
//     {id: 4, fname: "david", lname: "meldow", salary: 1500},
//     {id: 5, fname: "jacop", lname: "britt", salary: 2500},
// ];
 
// function iterateUsers(myCallbackFunction) {
//     users.forEach( (user) => myCallbackFunction(user));
// }

// let totalSalary = 0;

// function findTotalSalary(user) {
//     console.log(user);
//     totalSalary += user.salary;
// }

// iterateUsers(findTotalSalary);
// console.log("totalSalary: ", totalSalary);

// let's use our object's another value.
// let userNames = [];

// function fillUserNames(user) {
//     userNames.push(user.fname);
// }

// iterateUsers(fillUserNames);
// console.log("userNames: ", userNames);



// ------------------------- 6 ------------------------- //
// a native example of a callback can be written without any complex code:
// function calculate(num1, num2, callbackFunction) {
//     return callbackFunction(num1, num2);
// }

// function calcProduct(num1, num2) {
//     return num1 * num2;
// }

// function calcSum(num1, num2) {
//     return num1 + num2;
// }
// // alerts 75, the product of 5 and 15
// alert(calculate(5, 15, calcProduct));
// // alerts 20, the sum of 5 and 15
// alert(calculate(5, 15, calcSum));

// First a function calculate is defined with a parameter intended for callback: callbackFunction. Then a function that can be used as a callback to calculate is defined, calcProduct. Other functions may be used for callbackFunction, like calcSum. In this example, calculate() is invoked twice, once with calcProduct as a callback and once with calcSum. The functions return the product and sum, respectively, and then the alert will display them to the screen.
// In this primitive example, the use of a callback is primarily a demonstration of principle. One could simply call the callbacks as regular functions, calcProduct(num1, num2). Callbacks are generally used when the function needs to perform events before the callback is executed, or when the function does not (or cannot) have meaningful return values to act on, as is the case for Asynchronous JavaScript (based on timers) or XMLHttpRequest requests. 




// ------------------------- 7 ------------------------- //
// last example:
// önce yansıdan bir giriş, sonra örnek... atlayabiliriz.

// function foo(array) {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }

// // // let's debug our code and find the problem!!!
// // console.log(foo[2, 4, 6, 8]);

// console.log(foo([2, 4, 6]));


// // let's add some lines in our function and show user each iteration.
// function foo1(array) {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//         alert(sum);
//     }
//     return sum;
// }
// console.log(foo([2, 4, 6]));


// // then i needed to see the results on console.
// function foo(array) {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//         console.log(sum);
//     }
//     return sum;
// }
// console.log(foo([2, 4, 6]));


// // instead of changing our function, let's find a generic way...
// // be careful. these codes are just for demo purposes. code optimization is ignored.
// function foo2(array, callback) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i]);
//         sum += array[i];
//     }
//     return sum;
// }

// const array = [1, 2, 3, 4, 5];
// foo2(array, alert);
// foo2(array, function (x) {
//     console.log(x);
// });

// ------------------------- END OF CALLBACKS ------------------------- //



// ------------------------- CLOSURES ------------------------- //
// ------------------------- 1 ------------------------- //
// here is a simple example for closures.


// function init() {
//     let fname = 'Mozilla'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//       alert(fname); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

// here in our example init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. likewise, we can access fname just inside our init function. lets try to access them from outside.

// displayName();
// console.log(fname);


//  Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().

// Running the code make us notice that the alert() statement within the displayName() function successfully displays the value of the name variable, which is declared in its parent function. This is an example of lexical scoping, which describes how a parser resolves variable names when functions are nested. The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.


// ------------------------- 2 ------------------------- //
// Here's a slightly more interesting example from mdn's site. —a makeAdder function:

// function makeAdder(x) {
//   return function(y) { 
//     return x + y;
//   };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));  // 7
// console.log(add10(2)); // 12


// In this example, we have defined a function makeAdder(x), that takes a single argument x, and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.

// ilave açıklamalı yansıdan gösterilecek. oklu olan. bundan sonraki iki paragraf da yansı açıkken.

// In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.

// add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.



// ------------------------- 3 ------------------------- //
// Here's another example.

// var counter = 0;

// // Function to increment counter
// function add() {
//     counter += 1;
//     return counter;
// }

// Call add() 3 times
// console.log(add());
// console.log(add());
// console.log(add());

//   // The counter should now be 3
//   // There is a problem with the solution above: Any code on the page can change the counter, without calling add().
//  counter++;
//  console.log(counter);

// //   // The counter should be local to the add() function, to prevent other code from changing it:


// // Initiate counter
// var counter = 0;

// // Function to increment counter
// function add() {
//     var counter = 0;
//     counter += 1;
//     return counter;
// }

// // Call add() 3 times
// console.log(add());
// console.log(add());
// console.log(add());

// The counter should now be 3. But it is 1

// now close global counter
// what is the value

// var addFunc = function () {
//     var counter = 0;
//     return function () {
//         counter += 1;
//         return counter;
//     };
// };

// const add = addFunc();

// // console.log("counter: ", counter);

// console.log(add());
// console.log(add());
// console.log(add());

// // be careful. if we want to access counter from outside, we will get an error.
//  counter++;
//  console.log(counter);



// ------------------------- 4 ------------------------- //
// let's do another example.
// index.html'deki comment out edilmiş bölümü açıyoruz.

// function fontSize(size) {
//     return function () {
//         document.querySelector('p').style.fontSize = size + 'pt';
//     };
// }


// document.getElementById('btn24').addEventListener('click', fontSize(24));
// document.getElementById('btn32').addEventListener('click', fontSize(32));
// document.getElementById('btn48').addEventListener('click', fontSize(48));


// we can create variables by using our function and use them instead of calling fontSize function directly.
// here we go...

// same function.
// function fontSize(size) {
//     return function () {
//         document.querySelector('p').style.fontSize = size + 'pt';
//     };
// }


// we are creating a variable:
// const fs24 = fontSize(24);

// document.getElementById('btn12').addEventListener('click', fs24);
// document.getElementById('btn14').addEventListener('click', fontSize(32));
// document.getElementById('btn16').addEventListener('click', fontSize(48));



// ------------------------- 5 ------------------------- //
// now, let's review our example on the slide.






// // forEach
// // we have a simple function...
// const payments = [100, 300, -200, 500, -400, 225, 1000, -700];

// for ([i, item] of payments.entries()) {
//     item > 0
//         ? console.log(i, `You received ${item} USD`)
//         : console.log(i, `You paid ${Math.abs(item)} USD`);
// }


// // you can give names what ever you want.
// payments.forEach(function (item, i, arr) {
//     item > 0
//         ? console.log(qqq, `You received ${item} USD`)
//         : console.log(qqq, `You paid ${Math.abs(item)} USD`);
// });

// // you can give names what ever you want.
// payments.forEach(function (zzz, qqq, aaa) {
//     zzz > 0
//         ? console.log(qqq, `You received ${zzz} USD`)
//         : console.log(qqq, `You paid ${Math.abs(zzz)} USD`);
//     // console.log(arr[i]);
//     // console.log(arr);
// });



// const payments = [100, 300, -200, 500, -400, 225, 1000, -700];

// // we can access and change our original array if we like...
// payments.forEach(function (item, i, arr) {
//     item > 0
//         ? console.log(i, `You received ${item} USD`)
//         : console.log(i, `You paid ${Math.abs(item)} USD`);
//     arr.push(item * 2);
// });

// console.log(payments);




// MAP

// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log({ map1 });
// console.log({ array1 });  // we still have it unchanged...

// // here is a simple challenge: create a string from the initials of a sentence...
// const str = 'Clarusway Online Career IT Training School';
// // console.log(str.split(' '));
// const initials = str.split(' ').map((word) => word[0]).join('');
// console.log(initials);


// // Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

// const str1 = 'The Quick Brown Fox';
// const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// console.log(
//     str1
//         .split('')
//         .map((letter) =>
//             UPPER.indexOf(letter) !== -1 ? letter.toLowerCase() : letter.toUpperCase()
//         )
//         .join('')
// );


// // full name
// // you can use map method with arrays, not objects. (can use with array of objects as well)
// var persons = [
//     { firstname: 'Malcom', lastname: 'Reynolds' },
//     { firstname: 'Kaylee', lastname: 'Frye' },
//     { firstname: 'Jayne', lastname: 'Cobb' },
// ];

// // you can check the methods of your var by using console. 
// console.log(persons);

// function getFullName(item) {
//     var fullname = [item.firstname, item.lastname].join(' ');
//     return fullname;
// }

// console.log(persons.map(getFullName));




// // FILTER
// // let newArray = arr.filter(callback(currentValue[, index[, array]])
// const words = [
//     'spraying',
//     'limit',
//     'elite',
//     'exuberant',
//     'destruction',
//     'test',
//     'present',
// ];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// //   // expected output: Array ["exuberant", "destruction", "present"]


// const resultMap = words.map((word) => word.length > 6);
// console.log(resultMap);

// const resultMap2 = words.map((item) => (item.lenght > 6 ? item : "short item"))
// console.log(resultMap2);




// REDUCE
// arr.reduce(callback(accumulator, currentValue, [, index[, array]])[, initialValue])
// const arr1 = [1, 2, 3, 4];

// console.log(arr1.reduce(((acc, cur) => acc + cur), 11));

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(arr1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(arr1.reduce(reducer, 5));
// expected output: 15

// // Flatten an array of arrays
// let flattened = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
//     [6, [7, 8, 9]],
// ].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

// console.log(flattened);

// Remove duplicate items in an array
// let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
//     if (accumulator.indexOf(currentValue) === -1) {
//         accumulator.push(currentValue);
//     }
//     return accumulator;
// }, []);

// console.log(myOrderedArray);


// homework
// // Replace .filter().map() with .reduce()
// const numbers = [-5, 6, 2, 0];

// const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
//     if (currentValue > 0) accumulator.push(currentValue * 2);
//     return accumulator;
// }, []);

// console.log(doubledPositiveNumbers); // [12, 4]

// const payments2 = [1000, -200, 100, -500, 750, -80, 800, -400];
// console.log(payments2.reduce((acc, number) => (acc > number ? acc : number)));

// // Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

// const text = '025468';
// const arr2 = text.split('');
// console.log(arr2);

// const arr3 = arr2.reduce((acc, item, i, arr) => {
//     acc.push(item);
//     if (item % 2 === 0 && arr[i + 1] % 2 === 0) acc.push('-');
//     return acc;
// }, []);

// console.log(arr3.join(''));


